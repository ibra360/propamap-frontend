import React from "react";
import { Row, Col, Badge } from "antd";
// import room from "../../public/images/room.jpg"
import "./messageSplash.scss";

const MessageSplash = (props) => {
  return (
    <>
      <Col span={24} className="messageSplash">
        <div className="splash">
          <img src="/images/splash.png" alt="" className="image" />
          <div className="heading">Welcome to Propamap Chat</div>
          <div className="text">
            Contact and communicate with the property owners, get all the
            messages related to your properties right here in a customized way.
          </div>
        </div>
      </Col>
    </>
  );
};

export default MessageSplash;
