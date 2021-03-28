import React from "react";
import { Card as AntCard, Rate, Divider, Row, Col } from "antd";
import "./messageInput.scss";
import { Button } from "../../html";

const MessageInput = (props) => {
  return (
    <div className="inputContain">
      <input
        type="text"
        value={props.value}
        className="input"
        placeholder="Type Keyword ..."
        onChange={(e) => props.onChange(e)}
        onKeyPress={(e) => props.onKeyPress(e)}
      />
      {/* <img src="/images/attach.svg" className="attach" /> */}
      <Button
        title="SEND"
        className="button"
        category="primary"
        inline={true}
        size="large"
        onClick={props.onClick}
      />
    </div>
  );
};

const CommentInput = (props) => {
  const onSubmit = () => {
    console.log("props -->", props);
    props.valueToPass ? props.onClick(props.valueToPass) : props.onClick();
  };
  return (
    <div className="inputContain">
      <input
        type="text"
        className="comment-input"
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeholder || "Type you comment here ..."}
      />
      <Button
        title="SUBMIT"
        className="button"
        category="primary"
        inline={true}
        size="large"
        onClick={onSubmit}
      />
    </div>
  );
};

export { MessageInput, CommentInput };
