import React from "react";
import { Form } from "antd";
import { Col, Row } from "reactstrap";

import "./Filters.scss";

import { CheckBox, Button, TextBox } from "../../html";

const Filters = (props) => {
  const handleSubmit = () => {
    console.log("submit");
  };

  const classes = props.filters ? "cmp-filters" : "cmp-filters disabled";

  console.log("props -->", props);
  return (
    <div className={classes}>
      <div onSubmit={handleSubmit} noValidate>
        <hr />
        <Row>
          <label className="ml-3">By Property Features</label>
        </Row>
        <Row>
          <Col xl={2} lg={2} md={8} sm={12} xs={12}>
            <div className="checkbox">
              <CheckBox
                title="Available Immediately"
                {...props.avaialable_immediately}
                className="privacy-policy-checkbox"
              />
            </div>
            <div className="checkbox">
              <CheckBox
                title="Students Only"
                {...props.student_only}
                className="privacy-policy-checkbox"
              />
            </div>
          </Col>
          <Col xl={2} lg={2} md={8} sm={12} xs={12}>
            <div className="checkbox">
              <CheckBox
                title="Kitchen"
                {...props.kitchen}
                className="privacy-policy-checkbox"
              />
            </div>
            <div className="checkbox">
              <CheckBox
                title="Living Room"
                {...props.living_room}
                className="privacy-policy-checkbox"
              />
            </div>
          </Col>

          <Col xl={2} lg={2} md={8} sm={12} xs={12}>
            <div className="checkbox">
              <CheckBox
                title="Internet"
                {...props.internet}
                className="privacy-policy-checkbox"
              />
            </div>

            <div className="checkbox">
              <CheckBox
                title="Furniture"
                {...props.furniture}
                className="privacy-policy-checkbox"
              />
            </div>
          </Col>
          <Col xl={2} lg={2} md={8} sm={12} xs={12}>
            <div className="checkbox">
              <CheckBox
                title="Water Bill"
                {...props.includes_water}
                className="privacy-policy-checkbox"
              />
            </div>
            <div className="checkbox">
              <CheckBox
                title="Car Parking"
                {...props.car_parking}
                className="privacy-policy-checkbox"
              />
            </div>
          </Col>

          <Col xl={2} lg={2} md={8} sm={12} xs={12}>
            {/* <div className="checkbox">
              <CheckBox
                title='Smoking Allowed'
                {...props.smoking}
                className='privacy-policy-checkbox'
              />
            </div> */}
            <div className="checkbox">
              <CheckBox
                title="Air conditioner"
                {...props.aircondition}
                className="privacy-policy-checkbox"
              />
            </div>
            <div className="checkbox">
              <CheckBox
                title="Electricity Bill"
                {...props.electricity}
                className="privacy-policy-checkbox"
              />
            </div>
          </Col>
        </Row>
        <Row className="ml-1">
          <Col
            // className="byPrice"
            xl={4}
            lg={4}
            md={10}
            sm={12}
            xs={12}
            style={{ padding: 0 }}
          >
            <div className="feature-option">
              <Row>
                <Col>
                  <div className="feature-label">
                    <p>Rooms</p>
                  </div>
                </Col>
                <div className="feature-input">
                  <Col className="offset-2 ml-5 ">
                    <Button
                      icon="minus"
                      inline={true}
                      shape="circle"
                      category="secondary"
                      className="feature-btn"
                      onClick={() =>
                        props.rooms.onChange({
                          target: {
                            name: "rooms",
                            value: props.rooms.value
                              ? props.rooms.value - 1
                              : props.rooms.value,
                          },
                        })
                      }
                    />
                    <span className="feature-value">{props.rooms.value}</span>
                    <Button
                      inline={true}
                      icon="plus"
                      shape="circle"
                      category="secondary"
                      // className='feature-btn'
                      onClick={() =>
                        props.rooms.onChange({
                          target: {
                            value: props.rooms.value + 1,
                            name: "rooms",
                          },
                        })
                      }
                    />
                  </Col>
                </div>
              </Row>
            </div>
            <div className="feature-option">
              <Row>
                <Col>
                  <div className="feature-label">
                    <p>Bathrooms</p>
                  </div>
                </Col>
                <div className="feature-input">
                  <Col className="offset-2">
                    <Button
                      icon="minus"
                      inline={true}
                      shape="circle"
                      category="secondary"
                      className="feature-btn"
                      onClick={() =>
                        props.bathrooms.onChange({
                          target: {
                            name: "bathrooms",
                            value: props.bathrooms.value
                              ? props.bathrooms.value - 1
                              : props.bathrooms.value,
                          },
                        })
                      }
                    />
                    <span className="feature-value">
                      {props.bathrooms.value}
                    </span>
                    <Button
                      inline={true}
                      icon="plus"
                      shape="circle"
                      category="secondary"
                      onClick={() =>
                        props.bathrooms.onChange({
                          target: {
                            value: props.bathrooms.value + 1,
                            name: "bathrooms",
                          },
                        })
                      }
                    />
                  </Col>
                </div>
              </Row>
            </div>
          </Col>
          <Col className="pl-0">
            <div className="byPrice ">
              <p className="">By Price</p>
              <Row >
                <Col className="Coll" xl={4} lg={5} md={6} sm={8} xs={12}>
                  <TextBox className='m-1' type="number" {...props.min} min="0" />
                </Col >
                <Col className="Coll" xl={4} lg={5} md={6} sm={8} xs={12}>
                  <TextBox className='m-1' type="number" {...props.max} min="0" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Filters;
