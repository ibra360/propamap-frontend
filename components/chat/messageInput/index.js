import React from "react";
import { Card as AntCard, Rate, Divider, Row, Col } from "antd";
import "./messageInput.scss";
import { Button } from "../../html";

const MessageInput = (props) => {
  return (
    <div className="inputContain">
      <input type="text" className="input" placeholder="Type Keyword ..." />
      <img src="/images/attach.svg" className="attach" />
      <Button
        title="SEND"
        className="button"
        category="primary"
        inline={true}
        size="large"
      />
    </div>
  );
};

const CommentInput = (props) => {
  const onSubmit = () => {
    console.log('comment -->',props)
    props.valueToPass ? props.onClick(props.valueToPass) : props.onClick()
  }
  return (
    <div className="inputContain">
      <input
        type="text"
        className="comment-input"
        value={props.value}
        onChange={(e)=>props.onChange(e,props.valueToPass)}
        onKeyPress={(e) => props.onChange(e,props.valueToPass,true)}
        placeholder={props.placeholder || "Type your comment here ..."}
      />
      <Button
        title={props.buttonTitle || "SUBMIT"}
        className="button"
        category="primary"
        inline={true}
        size="large"
        onClick={onSubmit}
      />
    </div>
  );
};

export {MessageInput,CommentInput};
