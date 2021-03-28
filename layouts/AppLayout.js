import { useState, useEffect } from "react";
import { Layout as AntLayout, Icon } from "antd";
import socketIoClient from "socket.io-client";

import Layout from "./main";
import { TopNav, Breadcrumb, Footer } from "../components/pagePartial";

import { Alert } from "reactstrap";
import alert from "../utils/services/alert";
import site from "../core/config/sitemap";
import config from "../core/config";
import axios from "axios";
// import {

// } from "../../../../redux/actions/property";
import "./styles/AppLayout.scss";
import { redirect } from "../utils/site";
import { connect } from "react-redux";
import { TryLogInAction } from "../redux/actions/account";
import { UserDispatch } from "../redux/actions/system";
import { getProfileAction } from "../redux/actions/settings";
import { COOKIE_ID } from "../core/constants/auth";
import cookie from "../utils/services/cookie";

const { Header, Content, Footer: AntFooter } = AntLayout;

const SIDER_OPENED_WIDTH = 200;
const SIDER_COLLAPSED_NONBROKEN_WIDTH = 80;
const SIDER_COLLAPSED_BROKEN_WIDTH = 0;

const AppLayout = ({
  route,
  roles,
  redirectUrl,
  children,
  setUser,
  user,
  userEmail,
  emailVerified
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [ready, setReady] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [collapsedWidth, setCollapsedWidth] = useState(
    SIDER_COLLAPSED_NONBROKEN_WIDTH
  );

  let socket = null;

  useEffect(() => {
    authN();
  }, []);

  useEffect(() => {
    if (!firstLoad) authN();
  }, [children]);

  const _onToggleCollapse = (e) => {
    setCollapsed(!collapsed);
  };

  // Utils
  let sendEmail = async () => {
    // console.log("STATE WALAa", userEmail);
    try {
      console.log("STATE WALA", userEmail);
      console.log("Verified WALA", emailVerified);
      let res = await axios.post(
        "http://localhost:5000/user/verificationEmail",
        {
          email: userEmail,
        }
      );
      console.log("RESRES", res);
    } catch (err) {
      console.log("ERROR", err);
    }
  };
  const authN = async () => {
    const USER_DATA = cookie.get(COOKIE_ID);
    if (USER_DATA) {
      try {
        setReady(false);
        const res = await getProfileAction();
        if (res) setUser(res);
        setFirstLoad(false);
        setReady(true);
      } catch (err) {
        // redirect(site.routes.signIn.path);
      }
    } else {
      setFirstLoad(false);
      setReady(true);
    }
  };

  const showUnactiveBar = () => {
    return (
      <div>
        <Alert className="p-2 m-0 line text-center">
          Your account is not activated yet, please activate your account to
          enjoy propamap features .
          <span
            style={{ cursor: "pointer" }}
            onClick={sendEmail}
            className="text-primary"
          >
            Send Link again
          </span>
        </Alert>
        {/* description="Your account is not activated yet, please activate your account to enjoy propamap features."
          type="warning"
          <p>Send Verification Link</p>
        /> */}
      </div>
    );
  };

  const getBreadcrumbProps = {
    module: route.module,
    page: {
      name: route.title,
      url: route.path,
      isIndex: route.isIndex || false,
    },
  };

  return !firstLoad ? (
    <Layout route={route}>
      <AntLayout style={{ minHeight: "100vh" }}>
        <AntLayout>
          <Header className="layout-header">
            {userEmail && !emailVerified && showUnactiveBar()}
            {/* <div
              className='container'
              style={{
                paddingLeft: collapsed ? collapsedWidth : SIDER_OPENED_WIDTH,
                transition: 'padding-left 0.2s'
              }}
            > */}
            <TopNav
              route={route}
              isSideNavCollapsed={collapsed}
              onToggleCollapse={_onToggleCollapse}
            />

            {/* </div> */}
          </Header>

          <AntLayout
            style={{
              marginTop: 64,
              // marginLeft: collapsed ? collapsedWidth : SIDER_OPENED_WIDTH,
              // transition: 'margin-left 0.2s'
            }}
          >
            <Content
              className="layout-content"
              style={
                user && !user.email_verified
                  ? { paddingTop: 85 }
                  : { paddingTop: 25 }
              }
            >
              <Breadcrumb {...getBreadcrumbProps} />
              {ready ? (
                children
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Icon type="loading" style={{ fontSize: 32 }} />
                </div>
              )}
            </Content>
            <AntFooter className="layout-footer">
              <Footer />
            </AntFooter>
          </AntLayout>
        </AntLayout>
      </AntLayout>
    </Layout>
  ) : null;
};

const mapStateToProps = (state) => {
  console.log("STATE", state);

  return {
    user: state.User,
    userEmail: state.UserReducer.User ? state.UserReducer.User.email : "",
    emailVerified: state.UserReducer.User ? state.UserReducer.User.email_verified : "",
  };
};
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(UserDispatch(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
