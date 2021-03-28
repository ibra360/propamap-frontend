import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import {
  Menu,
  Tooltip,
  Dropdown,
  Modal,
  Icon as Load,
  Alert,
  AutoComplete,
} from "antd";

import { SignOutAction, connectSocket } from "../../../redux/actions/account";
import { redirect } from "../../../utils/site";
import site from "../../../core/config/sitemap";

import "./TopNav.scss";
import { Icon, Button, TextBox } from "../../html";
import { SignupForm, LoginForm, ForgotPasswordForm } from "../../home";
import notification from "../../../utils/services/alert";
import formValidator from "../../../utils/services/formValidator";
import {
  UserDispatch,
  SearchPropertyDispatch,
  SearchPropertyCountDispatch,
  UserVerified,
} from "../../../redux/actions/system";
import cookie from "../../../utils/services/cookie";
import { COOKIE_IDENTIFIER, COOKIE_ID } from "../../../core/constants/auth";
import {
  searchPropertyByTerm,
  GetPropertyByIdAction,
  searchSuggestion,
} from "../../../redux/actions/property";
import { SignInAction, UserVerifyAction } from "../../../redux/actions/account";

import { SearchOutlined } from "@ant-design/icons";
const { Item } = Menu;

const capitalizeFirstLetter = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
};

const TopNav = ({
  route,
  user,
  setUser,
  setSearchProperty,
  setCount,
  UserVerified,
}) => {
  const initialForm = {
    propertyName: {
      label: "Search",
      showLabel: false,
      placeholder: "Type keywords",
      value: "",
      required: true,
      id: "propertyName",
      type: "search",

      // onPressEnter: () => {
      //   quickSearchForm.propertyName.onSearch();
      // },
      onSearch: async () => {
        const res = await searchPropertyByTerm(
          quickSearchForm.propertyName.value
        );
        if (res.result) {
          setSearchProperty(res.body);
          setCount(res.count);
          redirect("/properties/search");
        } else {
          notification.error(res.message || "Something went wrong!");
        }
      },
      // onChange: (event) => _onChange(event),
    },
  };

  // const [quickSearchForm, setQuickSearchForm] = useState(initialForm);
  const [checkSocketConnection, setConnection] = useState(true);
  const [suggestionArray, setSuggestionArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("");

  const onSearch = async (e) => {
    // if (_handleKeyDown(e)) {
    setLoading(true);
    console.log("E", e);
    const res = await searchPropertyByTerm(e);
    console.log("RES OF LIST SHOWING", res);
    setSearchProperty(res.body);
    redirect(`/properties/search`);
    setLoading(false);

    // if (res.result) {
    //   setSearchProperty(res.body);
    //   setCount(res.count);
    //   redirect("/properties/search");
    // } else {
    //   notification.error(res.message || "Something went wrong!");
    // }
    // }
  };

  var Suggestion = async (e) => {
    console.log("Input text:", e);
    try {
      var res = await searchSuggestion(e);
      console.log("Api response of Suggestions", res);
      setSuggestionArray(res.body);
      console.log("Suggest", res.body);
    } catch (err) {
      console.log("error at suggestion api call", err);
      notification.error(
        res.message || "Something went wrong! at suggestion api call"
      );
    }
  };

  const _handleKeyDown = function (e) {
    if (e.key === "Enter") {
      return true;
    }
  };

  useEffect(() => {
    console.log("userssss --->", user);
    if (typeof user === "object") {
      const token = cookie.get(COOKIE_IDENTIFIER);
      console.log("token -->", token);
      if (token && checkSocketConnection) {
        setConnection(false);
        connectSocket(token);
      }
    }
  }, [user]);

  /*
   * open popup with token
   */
  useEffect(async () => {
    let slicetoken = window.location.href.split("?").slice([1]);
    if (slicetoken.length == 1) {
      let res = await UserVerifyAction(slicetoken);
      if (res.result) {
        if (!window.location.href.includes("resetpassword")) {
          notification.success("your account is activated");
        }
        if (user) {
          UserVerified(res.body);
          redirect("/");
          // notification.success(res.message || "your Account is activated")
        }
      }
    }
  }, []);

  // Events

  // const _onChange = (event) => {
  //   console.log("EE", event.target.value);
  //   let newForm = quickSearchForm;
  //   newForm[event.target.name].value = event.target.value;
  //   setQuickSearchForm({ ...newForm });
  //   Suggestion(event.target.value);
  // };

  const _onSubmit = (eve) => {
    eve.preventDefault();
    const { isValid, form } = formValidator(quickSearchForm);
    setQuickSearchForm({ ...form });
    console.log("form", form);
    if (isValid) {
    }
  };

  const [modalState, setModalState] = useState(false);
  const [loginType, setLoginType] = useState("login");

  // Events

  const _onClickOpenModal = () => {
    // setLogin(true);
    setLoginType("login");
    setModalState(true);
  };

  const _onSuccess = async () => {
    setModalState(false);
  };

  const _onClickCloseModal = () => {
    setModalState(false);
  };

  const _onToggleFormView = (loginType) => {
    setLoginType(loginType);
  };
  const { Option } = AutoComplete;
  console.log("state mai se", suggestionArray);
  const options = suggestionArray.map((d) => {
    return <Option key={d._id}>{d.title}</Option>;
  });
  const change = (e) => {
    console.log("ddddd", e);
    setText(e);
    // setSearchProperty(e)
    Suggestion(e);
  };
  console.log("OPT", options);

  // handleSearch = value => {
  //   if (value) {
  //     fetch(value, data => this.setState({ data }));
  //   } else {
  //     this.setState({ data: [] });
  //   }
  // };

  const userProfileDropdown = (
    <Menu>
      {/* <Item
        key='subscription'
        onClick={() => redirect("/subscription")}>
        <span>Subscription</span>
      </Item> */}
      <Item key="settings" onClick={() => redirect("/settings")}>
        <span>Settings</span>
      </Item>
      <Item
        key="myadvertisements"
        onClick={() => redirect("/myadvertisements")}
      >
        <span>My Advertisements</span>
      </Item>
      <Item
        key="logout"
        onClick={async () => {
          await SignOutAction();
          setUser(null);
          redirect("/");
        }}
      >
        <span>Logout</span>
      </Item>
    </Menu>
  );

  const onSelect = async (value, option) => {
    console.log("onSelect", value, option);
    try {
      const res = await GetPropertyByIdAction(value);
      console.log("RES OF ON_SELECT", res);
      redirect(`/properties/${value}`);
    } catch (err) {
      console.log("ERROR", err);
    }
    // if (res.result) {
    //   setSearchProperty(res.body);
    //   setCount(res.count);
    //   redirect("/properties/search");
    // } else {
    //   notification.error(res.message || "Something went wrong!");
    // }
  };

  const renderForm = () => {
    if (loginType === "login") {
      return (
        <LoginForm
          closeModal={_onClickCloseModal}
          onSuccess={_onSuccess}
          onUpdate={_onToggleFormView}
          visible={modalState}
        />
      );
    } else if (loginType === "signup") {
      return (
        <SignupForm
          closeModal={_onClickCloseModal}
          onSuccess={_onSuccess}
          onUpdate={_onToggleFormView}
        />
      );
    } else {
      return (
        <ForgotPasswordForm
          closeModal={_onClickCloseModal}
          onSuccess={_onSuccess}
          onUpdate={_onToggleFormView}
          visible={modalState}
        />
      );
    }
  };

  return (
    <div className="partial-top-nav">
      <Menu
        className="mb-3"
        mode="horizontal"
        overflowedIndicator={
          <Icon
            className="menu-icon-help"
            type="solid"
            size="1.5"
            icon="bars"
          />
        }
      >
        <Item>
          <Link href={site.routes.dashboard.path}>
            <a>
              <img src="/images/logo.png" className="logo clickable" />
            </a>
          </Link>
        </Item>
        <Item className="navbar-search">
          <div className={route.navKey === "dashboard" ? "hidden" : "parent"}>
            <AutoComplete
              style={{
                width: "100%",
              }}
              onChange={(e) => change(e)}
              // placeholder="input here"
              onSelect={onSelect}
              filterOption={false}
              // onSearch={(e, value) => onSearch(e, value)}
              backfill={true}
            >
              {options}
              {/* <Input.Search size="large" placeholder="input here" /> */}
            </AutoComplete>
            <div className="searchIcon" onClick={() => onSearch(text)}>
              {loading ? (
                <div className="">
                  <Load type="loading" className="pl-2 " />
                </div>
              ) : (
                <SearchOutlined className="pl-2" />
              )}
            </div>
          </div>
        </Item>
        <Item>
          <Link href={site.routes.addProperty.path}>
            <Button title="Advertise" type="secondary" />
          </Link>
        </Item>
        {/* <Item>
          <a>Buy</a>
        </Item>
        <Item>
          <a>Rent</a>
        </Item> */}
        <Item onClick={() => redirect("/subscription")}>
          {/* <a className="plans">Plans</a> */}
          <Button title="Plans" type="secondary" />
        </Item>
        {user && (
          <Item onClick={() => redirect("/messages")}>
            <Tooltip placement="bottom" title="Messages">
              <span>
                <Icon
                  className="menu-item-icon"
                  type="regular"
                  size="1.5"
                  icon="envelope"
                />
                <span class="badge badge-light">{`${
                  (user.notification && user.notification.length) || 0
                }`}</span>
              </span>
            </Tooltip>
          </Item>
        )}
        {user && (
          <Item onClick={() => redirect("/favourites")}>
            <Tooltip placement="bottom" title={"Favourites"}>
              <span>
                <Icon
                  className="menu-item-icon"
                  type="regular"
                  size="1.5"
                  icon="heart"
                />
                <span class="badge badge-light">{`${
                  (user.favorite && user.favorite.length) || 0
                }`}</span>
              </span>
            </Tooltip>
          </Item>
        )}
        {user && (
          <Item>
            <Dropdown
              overlay={userProfileDropdown}
              trigger={["click"]}
              placement="bottomRight"
            >
              <span className="menu-item-icon">
                <Icon type="regular" size="1.5" icon="user" />{" "}
                {capitalizeFirstLetter(user.first_name)}
              </span>
            </Dropdown>
          </Item>
        )}
        {!user && (
          <Item>
            <Button
              category="primary"
              title={`Sign In`}
              onClick={_onClickOpenModal}
            />
          </Item>
        )}
      </Menu>
      <Modal visible={modalState} onCancel={_onClickCloseModal} footer={null}>
        {renderForm()}
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(UserDispatch(user)),
  setSearchProperty: (body) => dispatch(SearchPropertyDispatch(body)),
  setCount: (count) => dispatch(SearchPropertyCountDispatch(count)),
  UserVerified: (user) => dispatch(UserVerified(user)),
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TopNav);

export { connectedComponent as TopNav };
