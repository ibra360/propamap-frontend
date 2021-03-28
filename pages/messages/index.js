import React, { useState, useEffect } from "react";
import AppLayout from "../../layouts/AppLayout";
import site from "../../core/config/sitemap";
import Header from "../../components/messages/messageHeader"
import Body from "../../components/messages/messageBox"
import { Col, Row } from "antd";
import "./styles/Messages.scss";
import Title from "antd/lib/typography/Title";
import Link from 'next/link'

import alert from "../../utils/services/alert";
import MessageSidebar from "../../components/messages/messageSidebar";
import MessageSplash from "../../components/messages/messageSplash";
import { getChatroomPropertiesAction, getOtherChatroomAction, getChatroomsOfPropertyAction, updateCount } from "../../redux/actions/chat";
import { connect } from "react-redux";
import { ChatroomsDispatch, ChatPropertiesDispatch } from "../../redux/actions/system";
import { redirect } from "../../utils/site";

function callback(key) {
  console.log(key);
}

const Messages = (props) => {
console.log("PROPS IN MESSAGES comp",props)

  const forceUpdate = useState()[1].bind(null, {})

  useEffect(()=>{
    getPropertiesHavingChatrooms()
    getChatrooms()
  },[])

  const getPropertiesHavingChatrooms = async () => {
    try{
      const res = await getChatroomPropertiesAction()
      props.setChatroomsProperties(res)
    }
    catch(e){
      console.log(e)
    }
  }

  const getChatrooms = async () => {
    try{
      const res = await getOtherChatroomAction()
      props.setChatrooms(res)
    }
    catch(e){
      console.log(e)
    }
  }

  const getPropertyChatrooms = async (propertyID) => {
    try{
      const res = await getChatroomsOfPropertyAction(propertyID)
      console.log('chatrooms 0f properties -->',res)
      const chatProperties = props.chatProperties;
      for(let i=0; i < chatProperties.length ; i++ ){
        console.log('for loop -->',chatProperties[i]._id,propertyID)
        if(propertyID == chatProperties[i]._id){
          chatProperties[i].chatroom = res
          break;
        }
      }
      console.log('chat added -->',chatProperties)
      props.setChatroomsProperties(chatProperties)
      forceUpdate()
    }
    catch(e){
      console.log(e)
    }
  }
  const onSelectChatroom = async (chatroom,url) => {
    try{
      const obj = {
        userID: props.user._id,
        chatroom,
      }
      const res = await updateCount(obj)
      console.log("Redirecting to ...",url)
      redirect(url)
    }
    catch(e){
      console.log(e)
    }
  }

  const chatroomsData = {
    buyerChatrooms : props.chatrooms,
    sellerChatrooms: props.chatProperties,
    getPropertyChatrooms,
    onSelectChatroom
  }

  return (
    <div className="messages">
      <Row gutter={[24, 24]} className="message-row">
        <Col span={7} className="sidebar-container">
          <MessageSidebar {...chatroomsData} />
        </Col>
        <Col span={17} className="splash-container">
          <MessageSplash />
        </Col>

      </Row>
    </div>
  );
};

Messages.getLayout = (page) => {
  return <AppLayout route={site.routes.Messages}>{page}</AppLayout>;
};

const mapStateToProps = ({ UserReducer,ChatReducer }) => ({
  user: UserReducer.User,
  chatrooms: ChatReducer.chatrooms,
  chatroomData: ChatReducer.chatroomData,
  chatProperties: ChatReducer.chatProperties
});

const mapDispatchToProps = (dispatch) => ({
  setChatrooms: (chatrooms) => dispatch(ChatroomsDispatch(chatrooms)),
  setChatroomData: (data) => dispatch(ChatroomDataDispatch(data)),
  setChatroomsProperties: (properties) => dispatch(ChatPropertiesDispatch(properties))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
