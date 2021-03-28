import React from "react";
import { Row, Col, Typography, Rate } from "antd";

import "./HorizontalCard.scss";
import { Button, Icon } from "../../html";
import capitalize from "../../../utils/helpers/stringHelper";
import { redirect } from "../../../utils/site";
import Link from "next/link";
import site from "../../../core/config/sitemap";


const { Title } = Typography;

const HorizontalCard = (props) => {
  console.log("card -->", props);
  return (
    <div
      className="cmp-horizontal-card"
      // onClick={() => redirect(`/properties/${props._id}`)}
    >
      <Link
        href={site.routes.viewProperty.path}
        as={`${site.routes.viewProperty.route}${props._id}`}
      >
        <Row gutter={[16, 8]}>
          <Col span={6}>
            <img
              alt="property-img"
              src={
                props.images && props.images.length > 0
                  ? props.images[0]
                  : "/images/default-image.jpg"
              }
            />
          </Col>
          <Col span={13}>
            <Title level={4}>{props.title}</Title>
            <p className="property-desc">
              {props.description && props.description.substring(0, 200)}{" "}
              <span className="font-italic text-secondary">...See more</span>
            </p>
            <div className="card-footer">
              <Row>
                {props.features ? (
                  <Col className="prop-feature" span={4}>
                    <img src="/images/bed.svg" className="icon-img" />
                    {/* <Icon icon='bed' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.bed_rooms ? props.features.bed_rooms : 0}
                    </span>
                  </Col>
                ) : null}
                {props.features ? (
                  <Col className="prop-feature" span={4}>
                    <img src="/images/bathtub.svg" className="icon-img" />
                    {/* <Icon icon='bath' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.bath_rooms
                        ? props.features.bath_rooms
                        : 0}
                    </span>
                  </Col>
                ) : null}
                {props.features && props.features.kitchen ? (
                  <Col className="prop-feature" span={4}>
                    <img src="/images/kitchen.svg" className="icon-img" />
                    {/* <Icon icon='couch' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.kitchen ? "1" : "0"}
                    </span>
                  </Col>
                ) : null}
                {props.features && props.features.living_room ? (
                  <Col className="prop-feature" span={4}>
                    <img src="/images/armchair.svg" className="icon-img" />
                    {/* <Icon icon='couch' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.living_room ? "1" : "0"}
                    </span>
                  </Col>
                ) : null}
                {props.features && props.features.air_condition ? (
                  <Col className="prop-feature" span={4}>
                    <img
                      src="/images/air-conditioner.svg"
                      className="icon-img"
                    />
                    {/* <Icon icon='couch' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.air_condition ? "Yes" : "No"}
                    </span>
                  </Col>
                ) : null}
              </Row>
            </div>
          </Col>
          <Col span={5}>
            <div className="hotel-rent-details">
              <Title
                level={4}
                className={`rent${
                  props.rental_time &&
                  props.rental_time.toLowerCase() === "monthly"
                    ? "-per-month"
                    : ""
                }`}
              >
                {`RM ${props.price}`}&nbsp;
                {props.rental_time && capitalize(props.rental_time)}
              </Title>
              <div className="hotel-rating">
                {/* Agent rating <Rate disabled defaultValue={5} /> */}
                {props.avaialable_immediately && "Available Now"}
              </div>
              <Button
                icon="heart"
                className="add-favourite"
                shape="circle"
                category="primary"
              />
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export { HorizontalCard };
