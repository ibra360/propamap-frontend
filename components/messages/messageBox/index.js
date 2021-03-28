import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Badge } from "antd";
import "./messageBox.scss";
import { MessageInput as Input } from "../messageInput";
import moment from "moment";

const Recieve = ({ message, createdAt }) => {
  return (
    <Col xl={24} lg={24} md={24} sm={24}>
      <p className="recieved">{message}</p>
      <p className="timestamp">{moment(createdAt).fromNow()}</p>
    </Col>
  );
};

const Sent = ({ message, createdAt }) => {
  return (
    <Col xl={24} lg={24} md={24} sm={24} className="sentContain">
      <p className="sent">{message}</p>
      <p className="timestamp">{moment(createdAt).fromNow()}</p>
    </Col>
  );
};

const MessageBox = (props) => {
  const messages = props.messageList;
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (props.messageContain.current) {
      const scrollHeight = props.messageContain.current.scrollHeight;
      console.log("scrollHeight -->", scrollHeight);
      props.messageContain.current.scrollTop = scrollHeight;
      setHeight(scrollHeight);
    }
  }, [messages.length]);

  return (
    <>
      <div
        className="messageBody"
        ref={(el) => (props.messageContain.current = el)}
      >
        <Row gutter={[16, 16]} style={{margin:0}} >
          {!!messages.length &&
            messages.map((item) => {
              return (
                <>
                  {props.user && props.user._id == item.sender ? (
                    <Sent {...item} />
                  ) : (
                    <Recieve {...item} />
                  )}
                </>
              );
            })}
        </Row>
      </div>
      <Row style={{ padding: "0px 10px" }}>
        <Input
          onKeyPress={props.onKeyPress}
          onChange={props.handleChange}
          onClick={props.onSendMessage}
          value={props.message}
        />
      </Row>
    </>
  );
};

export default MessageBox;
