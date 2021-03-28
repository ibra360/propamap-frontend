import React, { useState } from "react";
import { Row, Col, Form, Typography } from "antd";
import ReCaptcha from "react-google-recaptcha";
import Link from "next/link";

import "./SignupForm.scss";

import { TextBox, Button, CheckBox } from "../../../html";

import formValidator from "../../../../utils/services/formValidator";
import accountValidations from "../../../../utils/validations/accountValidations";
import notification from "../../../../utils/services/alert";
import { CreateUserAction } from "../../../../redux/actions/user";
import { connect } from "react-redux";
import { UserDispatch } from "../../../../redux/actions/system";
import site from "../../../../core/config/sitemap";

const { Item } = Form;
const { Title } = Typography;

const SignupForm = ({ onUpdate, onSuccess, setUser }) => {
  const initialForm = {
    firstName: {
      label: "First name",
      placeholder: "First name",
      showLabel: false,
      value: "",
      autoFocus: true,
      required: true,
      id: "firstName",
      type: "text",
      minLength: 3,
      validator: (firstName) => accountValidations.validatString(firstName),
      errorMessage: "Invalid First name,Value must be alphabet.",
      onChange: (event) => _onChange(event),
    },
    lastName: {
      label: "Last name",
      placeholder: "Last name",
      showLabel: false,
      value: "",
      required: true,
      id: "lastName",
      type: "text",
      minLength: 3,
      validator: (lastName) => accountValidations.validatString(lastName),
      errorMessage: "Invalid Last name,Value must be alphabet.",
      onChange: (event) => _onChange(event),
    },
    email: {
      label: "Email address",
      placeholder: "Email address",
      showLabel: false,
      value: "",
      errorMessage: "Email required",
      // validator: (email) => accountValidations.validateEmail(email),
      required: true,
      id: "email",
      type: "text",
      emailFormat: true,
      onChange: (event) => _onChange(event),
    },
    password: {
      label: "Pasword",
      placeholder: "Password",
      showLabel: false,
      value: "",
      required: true,
      id: "password",
      errorMessage: "Password must be 8 characters with 1 capital letter",
      type: "password",
      minLength: 8,
      regex: "^(?=.*[A-Z])(?=.{8,})",
      //validator: (password) => password == accountValidations.validatePassword(password),
      onChange: (event) => _onChange(event),
    },
    confirmPassword: {
      label: "Confirm password",
      placeholder: "Confirm password",
      showLabel: false,
      value: "",
      required: true,
      minLength: 8,
      validator: (password) => password == initialForm.password.value,
      id: "confirmPassword",
      type: "password",
      errorMessage: "Passwords do not match.",
      onChange: (event) => _onChange(event),
    },
    // phoneNumber: {
    //   label: 'Phone number',
    //   placeholder: 'Phone number',
    //   showLabel: false,
    //   value: '',
    //   id: 'phoneNumber',
    //   required: true,
    //   errorMessage: 'Please input in this format +60-123-1234567',
    //   type: 'text',
    //   validator: (phoneNumber) =>
    //     accountValidations.validatePhoneNumber(phoneNumber),
    //   onChange: (event) => _onChange(event)
    // },
    displayName: {
      label: "Display name",
      placeholder: "Display name",
      showLabel: false,
      value: "",
      required: true,
      id: "displayName",
      type: "text",
      errorMessage: "Invalid Display name,Value must be alphabet.",
      minLength: 4,
      validator: (displayName) => accountValidations.validatString(displayName),
      onChange: (event) => _onChange(event),
    },
    subscribe: {
      value: false,
      validator: () => true,
      required: true,
      errorMessage: "Please accept Privacy Policy and Terms of service",
      /*title:
        (
          <span>
            I Agree to &nbsp;
            <a href={site.routes.Privacy.path} target="_blank">privacy policy</a>&nbsp;
            and&nbsp;
            <a href={site.routes.Terms.path} target="_blank">terms of service</a>.
          </span>
        ),*/
      id: "subscribe",
      className: "subscribe",
      onChange: (event) => _onClickSubscribe(event),
    },
  };

  const [saveLoading, setSaveLoading] = useState(false);
  const [captchaText, setCaptchaText] = useState();
  const [signupForm, setSignupForm] = useState(initialForm);

  // Events

  const _onChange = (event) => {
    let newForm = signupForm;
    newForm[event.target.name].value = event.target.value;
    newForm[event.target.name].error = false;

    setSignupForm({ ...newForm });
  };
  const [token, setToken] = useState(false);
  const _onChangeCaptchaTxt = (value) => {
    console.log("VALUE", value);
    setCaptchaText(value);
    setToken(true);
    console.log("CAPTCHA STATE", captchaText);
  };

  const _onClickSubscribe = (event) => {
    let newForm = signupForm;
    newForm.subscribe.value = !signupForm.subscribe.value;
    newForm[event.target.name].error = false;
    setSignupForm({ ...newForm });
  };

  const _onClickLogin = () => {
    onUpdate("login");
  };

  const _onClickRegister = async (event) => {
    event.preventDefault();
    const { isValid, form } = formValidator(signupForm);

    setSignupForm({ ...form });

    if (isValid) {
      /* if (!captchaText) {
        notification.error('Please verify recaptcha!');
        return;
      }*/
      setSaveLoading(true);
      try {
        const user = {
          first_name: signupForm.firstName.value,
          last_name: signupForm.lastName.value,
          user_name: signupForm.displayName.value,
          email: signupForm.email.value,
          password: signupForm.password.value,
          // mobile_number: signupForm.phoneNumber.value
        };
        await createUser(user);
      } catch (err) {
        console.log("err in signup -->", err);
      }
      setSaveLoading(false);
    }
  };

  // Utils

  const createUser = async (user) => {
    let res = await CreateUserAction(user);
    if (res.result) {
      console.log("Sign Up Successful.", res);
      if (res.result) {
        setUser(res.body);
        notification.success(
          "We have sent you a verification email with activation link to (user email). Please check your email to activate it."
        );
      }

      //notification.success(res.message || 'Account created successfully!');

      if (onSuccess) onSuccess();
    } else {
      notification.error(res.message || "Signup failed!");
    }
  };

  return (
    <div className="cmp-signup-form">
      <Title level={4}>Create new account</Title>
      <Row>
        {/* <Col span={24}>
          <div className='fancy'>
            <span>Register with social media</span>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Button
                block={true}
                title={'Register with Facebook'}
                size='large'
                className='social-btn-fb'
                iconType='brand'
                icon='facebook-f'
              />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Button
                block={true}
                title={'Register with Google'}
                className='social-btn-google'
                size='large'
                iconType='brand'
                icon='google-plus-g'
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className='fancy'>
            <span>Or</span>
          </div>
        </Col>
         */}
        <Col span={24}>
          <Form onSubmit={_onClickRegister} noValidate>
            <Row gutter={[16, 8]}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.firstName} />
                </Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.lastName} />
                </Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.displayName} />
                </Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.email} />
                </Item>
              </Col>
              {/* <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.phoneNumber} />
                </Item>
              </Col> */}
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.password} />
                </Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Item>
                  <TextBox {...signupForm.confirmPassword} />
                </Item>
              </Col>

              <Col span={24}>
                <Item>
                  <ReCaptcha
                    type="image"
                    onChange={_onChangeCaptchaTxt}
                    sitekey={"6LfOk80UAAAAAO-1VS2zVoD7cfNCqiMtm2GV9zqv"}
                    // sitekey={"6LeFuzgaAAAAAA2vGRey3ylTqVKI3lZMxk_ztIRc"}
                    required={true}
                    className="recap"
                  />
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  <CheckBox {...signupForm.subscribe} />
                  <span>
                    I Agree to{" "}
                    <a href={site.routes.Privacy.path} target="_blank">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href={site.routes.Terms.path} target="_blank">
                      terms of service
                    </a>
                    .
                  </span>
                </Item>
              </Col>
              <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                <Item>
                  <Button
                    title={"Register"}
                    block={true}
                    category="primary"
                    size="large"
                    type="submit"
                    disabled={!token}
                    loading={saveLoading}
                  />
                </Item>
              </Col>
              <Col
                xl={{ offset: 5, span: 9 }}
                lg={{ offset: 5, span: 9 }}
                md={{ offset: 5, span: 9 }}
                sm={24}
                xs={24}
              >
                <Item>
                  Already registered?&nbsp;
                  <span onClick={_onClickLogin}>
                    <a className="text-primary"> Login</a>
                  </span>
                </Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(UserDispatch(user)),
});

const connectedComponent = connect(null, mapDispatchToProps)(SignupForm);
export { connectedComponent as SignupForm };
