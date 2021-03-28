import React, { useState } from "react";
import { Card as AntCard, Rate, Divider, Row, Col, Tabs, Badge } from "antd";
import "./messageSidebar.scss";
import { Button } from "../../html";
import moment from "moment";
import { redirect } from "../../../utils/site";
const { TabPane } = Tabs;
import Link from "next/link";

function callback(key) {
  console.log(key);
}

const MessageSidebar = ({
  buyerChatrooms,
  activeID = "",
  activeTab = "1",
  activeProperty = "",
  sellerChatrooms,
  getPropertyChatrooms,
  onSelectChatroom,
}) => {
  console.log("data in sidebar -->", buyerChatrooms);
  //console.log("sellerChatrooms -->", sellerChatrooms);
  // var sampleAvatar = user_name[0].toUpperCase();
  // var [sampleAvatar, setSampleAvatar] = useState('O');

  return (
    <div className="sidebar">
      <div className="heading">Inbox</div>
      <Tabs defaultActiveKey={activeTab} onChange={callback} tabPosition="top">
        <TabPane tab="As a Buyer" key="1">
          <div className="plain-list">
            {buyerChatrooms
              .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
              .map((item) => {
                let user_name;
                let profile_picture;
                item.users.forEach((element) => {
                  if (element._id == item.owner) {
                    user_name = element.user_name;
                    profile_picture = element.profile_picture;
                  }
                });
                return (
                  <div
                    // href={`/messages/${item._id}?tab=1`}
                    className={`plain-list-item ${
                      activeID == item._id ? "active" : ""
                    }`}
                    onClick={() =>
                      onSelectChatroom(item._id, `/messages/${item._id}?tab=1`)
                    }
                  >
                    {/* <a  href={`/messages/${item._id}?tab=1`}> */}
                    <div className="top">
                      <div className="img-avatar">
                        <img
                          src={
                            profile_picture
                              ? profile_picture
                              : "/images/room.jpg"
                          }
                          className="avatar"
                        />
                      </div>
                      <div className="content">
                        <div className="left">
                          <div className="name">{user_name}</div>
                          <div className="property">
                            {" "}
                            {item.property ? item.property.title : ""}
                          </div>
                        </div>
                        <div className="right">
                          <div className="time">
                            {moment(item.updatedAt).fromNow()}
                          </div>
                          {!!item.unread_count && (
                            <Badge
                              className="message-badge"
                              count={item.unread_count}
                              style={{ backgroundColor: "#566ce2" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    {item.last_message ? (
                      <div className="bottom">{item.last_message.message}</div>
                    ) : (
                      <div className="bottom">
                        Discuss about property details with {user_name}
                      </div>
                    )}
                    {/* </a> */}
                  </div>
                );
              })}
          </div>
        </TabPane>
        <TabPane tab="As a Seller" key="2">
          <div class="panel nested-list">
            {sellerChatrooms
              .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
              .map((item) => {
                console.log("item in seller -->", item);
                return (
                  <details open={item._id == activeProperty ? true : false}>
                    <summary onClick={() => getPropertyChatrooms(item._id)}>
                      <div
                        className={`main-item ${
                          item._id == activeProperty ? "active" : ""
                        }`}
                      >
                        <div className="item-image">
                          <img src={item.images[0]} alt="" />
                        </div>
                        <div className="item-content">
                          <div className="left">
                            <div className="item-title">{item.title}</div>
                            <div className="item-location">{item.address}</div>
                            <div className="item-count">
                              {item.chatroom && item.chatroom.length} Chats
                            </div>
                          </div>
                          <div className="right">
                            <div className="item-price">${item.price}</div>
                            {!!item.unread_chatrooms && (
                              <Badge
                                className="message-badge"
                                count={item.unread_chatrooms}
                                style={{ backgroundColor: "#566ce2" }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </summary>
                    <div class="content">
                      <div className="plain-list">
                        {console.log("item chatroom -->", item.chatroom)}
                        {item.chatroom &&
                          item.chatroom.map((elem) => {
                            let user_name;
                            let profile_picture;
                            elem.users.forEach((element) => {
                              if (element._id != elem.owner) {
                                user_name = element.user_name;
                                profile_picture = element.profile_picture;
                              }
                            });
                            var sampleAvatar = user_name[0].toUpperCase();
                            return (
                              <div
                                // href={`/messages/${elem._id}?prop=${item._id}&tab=2`}
                                className={`plain-list-item ${
                                  activeID == elem._id ? "active" : ""
                                }`}
                                onClick={() =>
                                  onSelectChatroom(
                                    elem._id,
                                    `/messages/${elem._id}?prop=${item._id}&tab=2`
                                  )
                                }
                              >
                                <div className="top">
                                  {/* <Link href={`messages/${elem._id}?prop=${item._id}&tab=2`}> */}
                                  <div className="img-avatar">
                                    {profile_picture ? (
                                      <div className="avatar">
                                        <img
                                          src={profile_picture}
                                          alt="user pic"
                                        />
                                      </div>
                                    ) : (
                                      <div className="avatar-demo">
                                        {sampleAvatar}
                                      </div>
                                    )}
                                  </div>
                                  {/* </Link> */}
                                  <div className="content">
                                    <div className="left">
                                      <div className="name">{user_name}</div>
                                      <div className="property">
                                        {elem.property.title}
                                      </div>
                                    </div>
                                    <div className="right">
                                      <div className="time">
                                        {moment(elem.updatedAt).fromNow()}
                                      </div>
                                      {!!elem.owner_unread_count && (
                                        <Badge
                                          className="message-badge"
                                          count={elem.owner_unread_count}
                                          style={{ backgroundColor: "#566ce2" }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {elem.last_message ? (
                                  <div className="bottom">
                                    {elem.last_message.message}
                                  </div>
                                ) : (
                                  <div className="bottom">
                                    Discuss about property details with{" "}
                                    {user_name}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </details>
                );
              })}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MessageSidebar;
