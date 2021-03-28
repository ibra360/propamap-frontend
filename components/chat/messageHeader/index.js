import React from "react";
import { Row, Col, Badge } from "antd";
// import room from "../../public/images/room.jpg"
import "./messageHeader.scss";

const MessageHeader = (props) => {
  return (
    <>
      <Col xl={18} lg={18} md={18} sm={18}>
        <Row gutter={[16, 16]}>
          <Col xl={3} lg={3} md={3} sm={3} className="avatarContain">
            <img src="/images/arrow-left.svg" className="back" />
            <img src="/images/room.jpg" className="avatar" />
          </Col>
          <Col xl={18} lg={18} md={18} sm={18} className="descriptionContain">
            <h3 className="description">Amazing Property In Malaysia</h3>
            <p className="time">
              27 July 2025 10:15 pm - ID # 1213234 - Malaysia - Kaula Terengganu
            </p>
          </Col>
          <Col xl={3} lg={3} md={3} sm={3} className="priceContain">
            <p className="price">3,000,000$</p>
            <p className="type">Sell</p>
          </Col>
        </Row>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6}>
        {props.isOwner ? (
          <Row>
            <Col xl={6} lg={6} md={6} sm={6}>
              <img src="/images/room.jpg" className="userAvatar" />
            </Col>
            <Col xl={18} lg={18} md={18} sm={18} className="userInfo">
              <p className="username">Emmar Holding</p>
              <p className="year">
                450 <span style={{ color: "black" }}>AD</span>
              </p>
              <p className="time">Joined 27 July 2025</p>
            </Col>
          </Row>
        ) : (
          <Row>
            <p className="open" >Open chats</p>
          </Row>
        )}
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} className="divider"></Col>
    </>
  );
};

export default MessageHeader;
