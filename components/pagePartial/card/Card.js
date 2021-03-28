import React from "react";
import { Card as AntCard, Rate, Divider, Row, Col, Tooltip } from "antd";
import Link from "next/link";
import { connect } from 'react-redux'

import "./Card.scss";

import { Button, Icon } from "../../html";

import capitalize from "../../../utils/helpers/stringHelper";
import site from "../../../core/config/sitemap";

const { Meta } = AntCard;

const Card = (props) => {
  // console.log("Props 123",props)
  return (
    <div className="cmp-card-container">
      <div className="cmp-card clickable">
        <Link
          href={site.routes.viewProperty.path}
          as={`${site.routes.viewProperty.route}${props._id}`}
        >
          <AntCard
            cover={
              <img
                alt="example"
                src={
                  props.images && props.images.length > 0
                    ? props.images[0]
                    : "/images/default-image.jpg"
                }
              />
            }
            style={props.slider ? { width: "200px" } : {}}
          >
            <Meta
              title={props.title}
              description={
                <>
                  <p>{props.description}</p>
                  <div
                    className={`hotel-rent-details ${
                      props.mobileView ? "mobile-view" : ""
                      }`}
                  >
                    <div className="hotel-rent">
                      <span
                        className={`rent${
                          props.rental_time &&
                            props.rental_time.toLowerCase() === "monthly"
                            ? "-per-month"
                            : ""
                          }`}
                      >
                        {`RM ${props.price}`}&nbsp;
                      </span>
                      {props.rental_time && capitalize(props.rental_time)}
                    </div>
                    {!props.showMeta && (
                      <div className="hotel-rating">
                        {/* Agent rating <Rate disabled defaultValue={5} /> */}
                        {props.avaialable_immediately && "Available Now"}
                      </div>
                    )}
                  </div>
                  {!props.showMeta && (
                    <>
                      <Divider />
                      <div className="card-footer">
                        <Row>
                          {props.features ? (
                            <Col span={4}>
                              <Tooltip placement="bottom" title={"Bedrooms"}>
                                <img
                                  src="/images/bed.svg"
                                  className="icon-img"
                                />
                                {/* <Icon icon='bed' type='solid' size='1' /> */}
                                <span className="available-quantity">
                                  {props.features.bed_rooms
                                    ? props.features.bed_rooms
                                    : 0}
                                </span>
                              </Tooltip>
                            </Col>
                          ) : null}
                          {props.features ? (
                            <Col span={4}>
                              <Tooltip placement="bottom" title={"Bathrooms"}>
                                <img
                                  src="/images/bathtub.svg"
                                  className="icon-img"
                                />
                                {/* <Icon icon='bath' type='solid' size='1' /> */}
                                <span className="available-quantity">
                                  {props.features.bath_rooms
                                    ? props.features.bath_rooms
                                    : 0}
                                </span>
                              </Tooltip>
                            </Col>
                          ) : null}
                          {props.features ? (
                            <Col span={4}>
                              <Tooltip placement="bottom" title={"Kitchen"}>
                                <img
                                  src="/images/kitchen.svg"
                                  className="icon-img"
                                />
                                {/* <Icon icon='couch' type='solid' size='1' /> */}
                                <span className="available-quantity">
                                  {props.features.kitchen ? "1" : "0"}
                                </span>
                              </Tooltip>
                            </Col>
                          ) : null}
                          {props.features ? (
                            <Col span={4}>
                              <Tooltip placement="bottom" title={"Living Rooms"}>
                                <img
                                  src="/images/armchair.svg"
                                  className="icon-img"
                                />
                                {/* <Icon icon='couch' type='solid' size='1' /> */}
                                <span className="available-quantity">
                                  {props.features.living_room ? "1" : "0"}
                                </span>
                              </Tooltip>
                            </Col>
                          ) : null}
                          {props.features ? (
                            <Col span={8}>
                              <Tooltip placement="bottom" title={"Air Conditioner"}>
                                <img
                                  src="/images/air-conditioner.svg"
                                  className="icon-img"
                                />
                                {/* <Icon icon='couch' type='solid' size='1' /> */}
                                <span className="available-quantity">
                                  {props.features.air_condition ? "Yes" : "No"}
                                </span>
                              </Tooltip>
                            </Col>
                          ) : null}
                        </Row>
                      </div>
                    </>
                  )}
                </>
              }
            />
          </AntCard>
        </Link>
      </div>
      <Button
        icon='heart'
        className='add-favourite'
        shape='circle'
        category='primary'
        onClick={() => props.favorite ? props.onremoveFav(props._id) : props.onAddFav(props._id)}
        color={props.favorite && '#e34c6b'}
      />
    </div>
  );
};

export { Card };
