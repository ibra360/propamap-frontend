import React, { useState, useEffect, useRef } from "react";
import AppLayout from "../../layouts/AppLayout";
import site from "../../core/config/sitemap";
import Header from "../../components/messages/messageHeader";
import Body from "../../components/messages/messageBox";
import { Col, Row } from "antd";
import "./styles/Messages.scss";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import alert from "../../utils/services/alert";
import MessageSidebar from "../../components/messages/messageSidebar";
import {
  getChatroomDataAction,
  getOtherChatroomAction,
  getChatroomPropertiesAction,
  getChatroomsOfPropertyAction,
  sendMessage,
  updateCount,
} from "../../redux/actions/chat";
import { connect } from "react-redux";
import {
  ChatroomsDispatch,
  ChatroomDataDispatch,
  ChatPropertiesDispatch,
} from "../../redux/actions/system";
import socket from "../../utils/socket";
import { redirect } from "../../utils/site";

function callback(key) {
  console.log(key);
}

const UserMessage = (props) => {
  const [loading, setLoading] = useState(true);
  const [message,setMessage] = useState("")
  const [messageList,setMessageList] = useState([])
  const forceUpdate = useState()[1].bind(null, {})
  const ref = useRef([...messageList]);
  const messageContain = useRef(null)
console.log("PROPS IN USER MSG COMP",props)
  const router = useRouter();
  
  useEffect(() => {
    onSelectChatroom(router.query.id)
    getChatrooms();
    chatroomData();
    getPropertiesHavingChatrooms()
    socket.on("output", (data) => {
      console.log('ref ==>',ref)
      console.log('messageList ==>',messageList)
      console.log('data ==>',data)
      console.log('PROPS++++',props)
      if(props.chatProperties.length>0){
        console.log('IFFFFFFF')

        getPropertyChatrooms( props.chatProperties[0]._id)
        getChatrooms();
        chatroomData();
      }else{
        getPropertyChatrooms(data.chatroom)
        getChatrooms();
        chatroomData();
      }

      if(router.query.id === data.message.chatroom){

        setMessageList([...ref.current,data.message])
      }
    });
    socket.on("output1", (data) => {
     
      console.log('data1 ==>',data)
     
      

     
    });
    socket.on('ID',(data)=> {
      console.log('CONNECTED',data)
    })
    return () => {
      socket.off('output',(ss)=>{
        console.log('ss ==>',ss)
      })
    }
  }, [socket,getChatrooms,chatroomData]);

  useEffect(()=>{
    ref.current = messageList;
  },[messageList])

  



  const getPropertiesHavingChatrooms = async () => {
    try {
      const res = await getChatroomPropertiesAction();
      console.log('properties having chatrooms -->',res)
      const chatProperties = res;
      if(router.query.prop){
        console.log('IFFF2',router.query.prop)
        const res1 = await getChatroomsOfPropertyAction(router.query.prop)
        console.log('chatrooms 0f properties -->',res)
        for(let i=0; i < chatProperties.length ; i++ ){
          console.log('for loop -->',chatProperties[i]._id,router.query.prop)
          if(router.query.prop == chatProperties[i]._id){
            chatProperties[i].chatroom = res1
            break;
          }
        }
        console.log('chat added -->',chatProperties)
      }
      props.setChatroomsProperties(chatProperties)
      forceUpdate()
    } catch (e) {
      console.log(e);
    }
  };

  const getChatrooms = async () => {
    try {
      const res = await getOtherChatroomAction();
      props.setChatrooms(res);
    } catch (e) {
      console.log(e);
    }
  };

  const chatroomData = async () => {
    try {
      const res = await getChatroomDataAction(router.query.id);
      console.log('RREEESSSS',res)
      props.setChatroomData(res);
      setMessageList(res[0].messages)
      console.log('loading false hone wali',res)
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getPropertyChatrooms = async (propertyID) => {
    try{
      console.log('CHAT=====',propertyID)
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

  const onSendMessage = () => {
    try{
      console.log('user -->',props.chatroomData)
      const chatroom = props.chatroomData[0]
      const users = chatroom.users
      let reciever;
      for(let i = 0; i<users.length ; i++){
        if(users[i]._id != props.user._id){
          reciever = users[i]._id
          break
        }
      }
      const data = {
        message,
        sender: props.user._id,
        chatroom: router.query.id,
        reciever
      }
      if(message){
        console.log('data to send -->',data)
        sendMessage(data)
        const list = [...messageList,data]
        setMessage('')
        setMessageList(list)
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  const onSelectChatroom = async (chatroom,url='') => {
    try{
      const obj = {
        userID: props.user._id,
        chatroom,
      }
      const res = await updateCount(obj)
      if(url)
      redirect(url)
    }
    catch(e){
      console.log(e)
    }
  }

  const handleChange = (e) => {
    const {value} = e.target;
    // console.log('value ---->',value)
    setMessage(value)
  }

  const onKeyPress = (e) => {
    if (e.which == 13 || e.keyCode == 13){
      onSendMessage()
    }
  }

  const chatroomsData = {
    buyerChatrooms: props.chatrooms,
    activeID: router.query.id,
    activeProperty: router.query.prop,
    activeTab: router.query.tab,
    sellerChatrooms: props.chatProperties,
    getPropertyChatrooms,
    onSelectChatroom
  };

  const bodyProps = {
    data: props.chatroomData,
    user: props.user,
    handleChange,
    onSendMessage,
    message,
    messageList,
    onKeyPress,
    messageContain
  }

  return (
    <div className="messages">
      {console.log('loading -->',loading)}
      {loading === false ? (
        <Row gutter={[24, 24]} className="message-row">
          <Col span={7} className="sidebar-container">
            <MessageSidebar {...chatroomsData} />
          </Col>
          <Col span={17} className="messages-container">
            <Header property={props.chatroomData} user={props.user} />
            <Body {...bodyProps} />
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

UserMessage.getLayout = (page) => {
  return <AppLayout route={site.routes.UserMessage}>{page}</AppLayout>;
};
const mapStateToProps = ({ UserReducer, ChatReducer }) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMessage);
