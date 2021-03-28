import React from "react";
import { Row, Col, Badge } from "antd";
// import room from "../../public/images/room.jpg"
import "./inboxList.scss";

const InboxList = (props) => {
  console.log('chatrooms -->',props.chatrooms)
  return (
    
        <Row gutter={[16, 16]}>
          {props.chatrooms.map((item) => {
            return (
              <Col xl={24} lg={24} md={24} sm={24}>
                <Row>
                  <Col xl={3} lg={3} md={4} sm={4} className="thumbnailContain">
                    <img src={item.property.images[0]} className="thumbnail" />
                  </Col>
                  <Col xl={18} lg={18} md={18} sm={18}>
                    <p className="description">{item.property.title}</p>
                    <p className="price">{item.property.price}$</p>
                  </Col>
                  {!props.isInbox && <Col xl={3} lg={3} md={3} sm={3} className="arrowContain">
                    <Badge count={99} />
                    <img src="/images/arrow-right.svg" height="10px" />
                  </Col>}
                </Row>
              </Col>
            );
          })}
        </Row>
  );
};

export default InboxList;
