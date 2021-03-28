import React from "react";
import { Row, Col, Badge } from "antd";
// import room from "../../public/images/room.jpg"
import "./messageHeader.scss";
import moment from "moment";
import Link from "next/link";
import { redirect } from "../../../utils/site";

const MessageHeader = (props) => {
  console.log("property details jani -->", props.property[0]);
  const property = props.property.length && props.property[0].property;
  let user_name;
  let profile_picture;
  !!props.property.length &&
    props.property[0].users.forEach((element) => {
      if (props.user) {
        if (element._id != props.user._id) {
          user_name = element.user_name;
          profile_picture = element.profile_picture;
        }
      }
    });
  var url = `/properties/${props.property[0].property._id}`;
  console.log("Demo wala name", user_name[0].toUpperCase());
  var sampleAvatar = user_name[0].toUpperCase();
  return (
    <>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={21} className="avatarContain descriptionContain">
            <div
              className="pointer"
              onClick={() => {
                redirect(url);
              }}
            >
              <img
                src={property.images && property.images[0]}
                className="avatar"
              />
              <div>
                <h3 className="description">{property.title}</h3>
                <p className="time">
                  {moment(property.createdAt).format("lll")} -{" "}
                  {property.address}
                </p>
              </div>
            </div>
          </Col>

          <Col span={3} className="header-avatar">
            <div className="avatar-cont">
              {profile_picture ? (
                <div className="avatar">
                  <img src={profile_picture} alt="user pic" />
                </div>
              ) : (
                <div className="avatar-demo">
                  {sampleAvatar}
                </div>
              )}
              <div className="name">{user_name}</div>
            </div>
          </Col>
        </Row>
      </Col>
      {/* <Col xl={6} lg={6} md={6} sm={6}>
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
      </Col> */}

      <Col xl={24} lg={24} md={24} sm={24} className="divider"></Col>
    </>
  );
};

export default MessageHeader;
