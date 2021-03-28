import React from "react";
import { Row, Col, Typography, Rate, Tooltip } from "antd";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./HorizontalCard.scss";
import { Button, Icon } from "../../html";
import capitalize from "../../../utils/helpers/stringHelper";
import { redirect } from "../../../utils/site";
import Router from "next/router";

const { Title } = Typography;

const HorizontalCard = (props) => {
  console.log("Horizontal card -->", props);
  return (
    <div className="cmp-horizontal-card">
      <Row gutter={[16, 8]}>
        <Col span={6}>
          <img
            alt="property-img"
            onClick={() => redirect(`/properties/${props._id}`)}
            src={
              props.images && props.images.length > 0
                ? props.images[0]
                : "/images/default-image.jpg"
            }
          />
        </Col>
        <Col span={13}>
          <Title
            className="property-title"
            level={4}
            onClick={() => redirect(`/properties/${props._id}`)}
          >
            {props.title}
          </Title>
          <p className="property-desc">{props.description}</p>
          <div className="card-footer">
            <Row>
              {props.features ? (
                <Tooltip placement="bottom" title={"Bed Rooms"}>
                  <Col className="prop-feature" span={4}>
                    <img src="/images/bed.svg" className="icon-img" />
                    {/* <Icon icon='bed' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.bed_rooms ? props.features.bed_rooms : 0}
                    </span>
                  </Col>
                </Tooltip>
              ) : null}
              {props.features ? (
                <Tooltip placement="bottom" title={"Bathrooms"}>
                  <Col className="prop-feature" span={4}>
                    <img src="/images/bathtub.svg" className="icon-img" />
                    {/* <Icon icon='bath' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.bath_rooms
                        ? props.features.bath_rooms
                        : 0}
                    </span>
                  </Col>
                </Tooltip>
              ) : null}
              {props.features && props.features.kitchen ? (
                <Tooltip placement="bottom" title={"Kitchen"}>
                  <Col className="prop-feature" span={4}>
                    <img src="/images/kitchen.svg" className="icon-img" />
                    {/* <Icon icon='couch' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.kitchen ? "1" : "0"}
                    </span>
                  </Col>
                </Tooltip>
              ) : null}
              {props.features && props.features.living_room ? (
                <Tooltip placement="bottom" title={"Living Rooms"}>
                  <Col className="prop-feature" span={4}>
                    <img src="/images/armchair.svg" className="icon-img" />
                    {/* <Icon icon='couch' type='solid' size='1' /> */}
                    <span className="available-quantity">
                      {props.features.living_room ? "1" : "0"}
                    </span>
                  </Col>
                </Tooltip>
              ) : null}
              {props.features && props.features.air_condition ? (
                <Tooltip placement="bottom" title={"Air Conditioner"}>
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
                </Tooltip>
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
            {!props.hideFavButton && (
              <Button
                icon="heart"
                className="add-favourite"
                shape="circle"
                category="primary"
                onClick={() => {
                  props.onremoveFav(props._id);
                }}
                color={props.color}
              />
            )}
            {props.hideFavButton && (
              <div>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    localStorage.setItem("Advertise", JSON.stringify(props));
                    Router.push({
                      pathname: "/properties/add",
                      query: { id: props._id },
                    });
                  }}
                >
                  <EditIcon fontSize="large" />
                </IconButton>
                {props.deleteMyAdvertisement ? (
                  <IconButton
                    aria-label="delete"
                    onClick={() => props.deleteMyAdvertisement(props._id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => props.deleteMyDraft(props._id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export { HorizontalCard };
