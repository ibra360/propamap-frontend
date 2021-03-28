import React from "react";
import { Row, Col, Form, Icon } from "antd";
import { TextBox, TextField, Button, ProfileImage } from "../../html";
import "./GeneralSettingsForm.scss";

const GeneralSettingsForm = (props) => {
  window.onbeforeunload = function () {
    return "Dude, are you sure you want to leave? Think of the kittens!";
  };
  if (props.loading) {
    return (
      <div style={{ textAlign: "center" }}>
        <Icon type="loading" style={{ fontSize: 32 }} />
      </div>
    );
  }
  return (
    <div>
      <Col xl={18} lg={18} md={24} sm={24}>
        <Row gutter={[16, 16]}>
          <Form onSubmit={props.onProfileSubmit} noValidate>
            <Col xl={24} lg={24} md={24} sm={24}>
              <label>Profile Image</label>
              <ProfileImage
                removeImage={props.removeImage}
                onChangeProfileImage={props.onChangeProfileImage}
                profileImage={
                  props.newImage.value
                    ? props.newImage.value
                    : props.profileImage
                }
              />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <TextBox
                label="First Name"
                placeholder="Your First Name"
                onChange={props.onChangeFirstName}
                value={props.firstName.value}
              />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <TextBox
                label="Last Name"
                placeholder="Your Last Name"
                onChange={props.onChangeLastName}
                value={props.lastName.value}
              />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <TextBox
                label="User Name"
                placeholder="Your User Name"
                onChange={props.onChangeUserName}
                value={props.userName.value}
              />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24}>
              <TextBox
                label="E-mail Address"
                placeholder="Add valid e-mail address"
                onChange={props.onChangeEmail}
                value={props.email.value}
              />
            </Col>
            {/* <Col xl={24} lg={24} md={24} sm={24}>
              <TextBox className="phone-validation" label="Phone Number" placeholder="Add valid phone number" onChange={props.onChangePhone} value={props.phone.value} />
              <div className="validate-btn">
                <Button
                  // type='submit'
                  title='VALIDATE'
                  size='medium'
                  category='primary'
                />
              </div>
            </Col> */}
            <Col span={24}>
              <TextField
                label="About me"
                placeholder="Add details here"
                onChange={props.onChangeAbout}
                value={props.about.value}
              />
            </Col>

            <Col sm={24} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
              <Button
                type="submit"
                title="SAVE CHANGES"
                size="large"
                category="primary"
                disabled={
                  props.profileImage === props.newImage &&
                  props.firstName.original === props.firstName.value &&
                  props.lastName.original === props.lastName.value &&
                  props.userName.original === props.userName.value &&
                  props.email.original === props.email.value &&
                  props.phone.original === props.phone.value &&
                  props.about.original === props.about.value
                }
              />
            </Col>
          </Form>
        </Row>
      </Col>
    </div>
  );
};

export default GeneralSettingsForm;
