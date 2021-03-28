import React from "react";
import { Row, Col, Badge } from "antd";
import "./messageBox.scss";
import { MessageInput as Input } from "../messageInput";
import PropertiesList from "../../chat/inboxList";

const Recieve = () => {
  return (
    <Col xl={24} lg={24} md={24} sm={24}>
      <p className="recieved">Hello There!</p>
      <p className="timestamp">30 mins ago</p>
    </Col>
  );
};

const Sent = () => {
  return (
    <Col xl={24} lg={24} md={24} sm={24} className="sentContain">
      <p className="sent">Hi</p>
      <p className="timestamp">30 mins ago</p>
    </Col>
  );
};

const MessageBox = (props) => {
  return (
    <>
      <Col xl={18} lg={18} md={18} sm={18}>
        <Row gutter={[16, 16]} className="messageBody">
          <Recieve />
          <Sent />
          <Recieve />
          <Sent />
          <Recieve />
          <Sent />
          <Sent />
          <Sent />
          <Sent />
        </Row>
        <Row>
          <Input />
        </Row>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6}>
        {props.isOwner && (
          <Row gutter={[16, 16]}>
            <Col xl={24} lg={24} md={24} sm={24} className="moreContain">
              <p className="more">More from Emmar</p>
              <img src="/images/arrow-right.svg" className="rightArrow" />
            </Col>
          </Row>
        )}
        <Row gutter={[16, 16]}>
          {props.isOwner
            ? [1, 1, 1, 1, 1, 1].map((i) => {
              return (
                <Col xl={24} lg={24} md={24} sm={24}>
                  <Row>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      className="thumbnailContain"
                    >
                      <img src="/images/room.jpg" className="thumbnail" />
                    </Col>
                    <Col
                      xl={18}
                      lg={18}
                      md={18}
                      sm={18}
                      style={{ paddingLeft: 0 }}
                    >
                      <p className="description">
                        Amazing property in Malaysia
                        </p>
                      <p className="price">3,000,000$</p>
                    </Col>
                  </Row>
                </Col>
              );
            })
            : [1, 1, 1, 1, 1, 1].map((i) => {
              return (
                <Col xl={24} lg={24} md={24} sm={24} className="userContain">
                  <Row>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      className="thumbnailContain"
                    >
                      <img src="/images/room.jpg" className="profilePic" />
                    </Col>
                    <Col
                      xl={15}
                      lg={15}
                      md={15}
                      sm={15}
                      style={{ paddingLeft: 0 }}
                    >
                      <p className="username">Eslam Khalil</p>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3}>
                      <Badge count={99} style={{ marginTop: 8 }} />
                    </Col>
                  </Row>
                </Col>
              );
            })}
        </Row>
      </Col>
    </>
  );
};

export default MessageBox;
