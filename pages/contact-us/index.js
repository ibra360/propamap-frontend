import React, { useState, useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import site from "../../core/config/sitemap";
import { Col, Row, Divider, Form } from "antd";
import "./styles/Contact.scss";
import Title from "antd/lib/typography/Title";
import { Button, TextField, TextBox, SelectBox } from "../../components/html";
import { ContactDetailsCard } from "../../components/favourites/contactDetailsCard/ContactDetailsCard";
import { HorizontalCard } from "../../components/favourites/horizontalCard/HorizontalCard";
import {
  getFavouriteProperty,
  removeFavouriteProperty,
} from "../../redux/actions/property";
import { connect } from "react-redux";
import notification from "../../utils/services/alert";
import { subjects } from "../../core/constants/data";

const ContactUs = (props) => {
  const initialForm = {
    subject: {
      label: "Select your topic",
      //   showLabel: false,
      placeholder: "Topic",
      value: [],
      searchable: false,
      id: "topic",
      type: "text",
      onChange: (event) => _onChange(event),
    },
    message: {
      label: "Message",
      //   showLabel: false,
      placeholder: "Type your message here...",
      value: [],
      id: "message",
      type: "text",
      onChange: (event) => _onChange(event),
    },
    email: {
      label: "Email",
      placeholder: "Enter email",
      value: "",
      id: "email",
      type: "text",
      onChange: (event) => _onChange(event),
    },
    name: {
      label: "Full Name",
      placeholder: "Enter your full name",
      value: "",
      id: "name",
      type: "text",
      onChange: (event) => _onChange(event),
    },
  };

  const [searchForm, setSearchForm] = useState(initialForm);

  const _onChange = (event) => {
    let newForm = searchForm;
    newForm[event.target.name].value = event.target.value;
    newForm[event.target.name].error = false;
    setSearchForm({ ...newForm });
  };

  return (
    <div className="contact">
      <Row style={{ width: "100%" }}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Title level={4}>Contact Us</Title>
          <Divider />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Form onSubmit={props.onFbSubmit} noValidate>
          <Col span={24} style={{ marginBottom: 15 }}>
              <TextBox {...searchForm.name} />
            </Col>
            <Col span={24} style={{ marginBottom: 15 }}>
              <TextBox {...searchForm.email} />
            </Col>
            <Col span={24} style={{ marginBottom: 15 }}>
              <SelectBox {...searchForm.subject} options={subjects} />
            </Col>
            <Col span={24} style={{ marginBottom: 15 }}>
              <TextField {...searchForm.message} />
            </Col>

            <Col sm={24} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
              <Button
                type="submit"
                title="Submit"
                size="large"
                category="primary"
                // disabled={props.fbAbout.length === 0}
              />
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

ContactUs.getLayout = (page) => {
  return <AppLayout route={site.routes.Contact}>{page}</AppLayout>;
};
const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});

export default connect(mapStateToProps, null)(ContactUs);
