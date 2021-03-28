import React, { useState, useEffect } from "react";
import { Form, Row, Col, Typography } from "antd";
// import { Modal, ModalBody, ModalFooter, Button as Butt } from "reactstrap";
// import { MobileView, BrowserView, isAndroid } from "react-device-detect";
import "./SearchForm.scss";

import { SelectBox, Button, TextBox } from "../../html";

import formValidator from "../../../utils/services/formValidator";
import { redirect } from "../../../utils/site";
import site from "../../../core/config/sitemap";
import {
  propertyFor,
  rentPropertyType,
  sellPropertyType,
} from "../../../core/constants/data";
import { SearchLocation } from "../../pagePartial";
import { SearchPropertiesAction } from "../../../redux/actions/property";
import {
  SearchPropertyDispatch,
  SearchOptionsDispatch,
  SearchPropertyCountDispatch,
} from "../../../redux/actions/system";
import { connect } from "react-redux";
import Filters from "../filters/Filters";

const { Item } = Form;
const { Title } = Typography;

const SearchForm = (props) => {
  useEffect(() => {
    let fetchLoaction = async () => {
      let res = await fetch(`
    https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.loc.lat},${props.loc.lng}&key=AIzaSyArJOVVmBPjEuYiOyK6UtwvzA72uqghu5A
    `);
      let data = await res.json();
      setLocation(data);
      // console.log("Res data", data);
    };
    if (props.loc && props.loc.lat) {
      fetchLoaction();
    }
  }, [props, location]);
  console.log("PROPPSSSS IN SEARCHFORM", props);
  const initialForm = {
    location: {
      label: "Location",
      value: "",
      // required: true,
      id: "location",
    },
    propertyFor: {
      label: "Property For",
      name: "propertyFor",
      showLabel: false,
      placeholder: "Propery For",
      value: [],
      searchable: true,
      id: "propertyFor",
      type: "text",
      onSelect: (event) => _onSelect(event, "propertyFor"),
    },
    min: {
      placeholder: "Min",
      value: "",
      id: "min",
      type: "number",
      onChange: (event) => _onChange(event),
    },
    max: {
      placeholder: "Max",
      value: "",
      id: "max",
      type: "number",
      onChange: (event) => _onChange(event),
    },
    propertyType: {
      label: "Property Type",
      showLabel: false,
      placeholder: "Add property type",
      value: [],
      searchable: true,
      id: "propertyType",
      type: "text",
      onSelect: (event) => _onSelect(event, "propertyType"),
    },
    rooms: {
      id: "rooms",
      value: 0,
      onChange: (event) => _onChange(event),
    },
    bathrooms: {
      value: 0,
      id: "bathrooms",
      onChange: (event) => _onChange(event),
    },
    avaialable_immediately: {
      id: "avaialable_immediately",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    student_only: {
      id: "student_only",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    includes_water: {
      id: "includes_water",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    aircondition: {
      id: "aircondition",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    furniture: {
      id: "furniture",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    smoking: {
      id: "smoking",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    living_room: {
      id: "living_room",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    internet: {
      id: "internet",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    car_parking: {
      id: "car_parking",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    electricity: {
      id: "electricity",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
    kitchen: {
      id: "kitchen",
      value: false,
      onChange: (event) => _onChangeCheckbox(event),
    },
  };

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState();
  const [searchForm, setSearchForm] = useState(initialForm);
  const [filters, setFilters] = useState({
    value: false,
  });
  // Events

  const _onChange = (event) => {
    console.log("object", event);
    let newForm = searchForm;
    newForm[event.target.name].value = [event.target.value];
    newForm[event.target.name].error = false;
    setSearchForm({ ...newForm });
  };
  const _onSelect = (event, name) => {
    console.log("object", event);
    let newForm = searchForm;
    newForm[name].value = [event];
    newForm[name].error = false;
    setSearchForm({ ...newForm });
  };

  const _onChangeCheckbox = (event) => {
    let newForm = searchForm;
    newForm[event.target.name].value = !event.target.value;
    setSearchForm({ ...newForm });
  };

  const _onClickSearch = async (event) => {
    event.preventDefault();
    const { isValid, form } = formValidator(searchForm);
    setSearchForm({ ...form });

    if (isValid) {
      console.log("CHA RAHA", isValid);
      setLoading(true);
      try {
        const searchQuery = {
          lat: searchForm.location.value.lat,
          lon: searchForm.location.value.lng,
          propertyFor: searchForm.propertyFor.value,
          propertyType: searchForm.propertyType.value,
          avaialable_immediately: searchForm.avaialable_immediately.value,
          student_only: searchForm.student_only.value,
          bed_rooms: searchForm.rooms.value,
          bath_rooms: searchForm.bathrooms.value,
          furniture: searchForm.furniture.value,
          air_condition: searchForm.aircondition.value,
          car_parking: searchForm.car_parking.value,
          internet: searchForm.internet.value,
          electricity: searchForm.electricity.value,
          water: searchForm.includes_water.value,
          living_rooms: searchForm.living_room.value,
          min: searchForm.min.value,
          max: searchForm.max.value,
          page: 1,
          limit: 10,
        };
        const options = {
          location: searchForm.location.value,
          propertyFor: searchForm.propertyFor.value,
          propertyType: searchForm.propertyType.value,
        };

        await searchProperty(searchQuery, options);
      } catch (err) {}
      setLoading(false);
    }
  };

  // Utils

  const searchProperty = async (query, options) => {
    console.log("res of search -->", query);
    try {
      let res = await SearchPropertiesAction(query);
      console.log("response==>>", res);
      if (res.body) {
        console.log("HAHAHAHAHHAHHAH");
        if (props.onSuccess) props.onSuccess();
        props.setOptions(options);
        props.setSearchProperty(res.body);
        props.setCount(res.count);
        redirect("/properties/search");
      } else {
        redirect("/properties/search");
        // notification.error(res.message || "Something went wrong!");
      }
    } catch (err) {
      console.log("ERRORRRRR", err);
    }
  };

  const updatePropertyLocation = (value) => {
    const { lat, lng, location } = value;
    let newForm = searchForm;
    newForm.location.value = { lat, lng, location };
    newForm.location.error = false;
    setSearchForm({ ...newForm });
  };
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  return (
    <div className="cmp-search-form">
      <Title level={4}>Looking for something ?</Title>
      <p className="search-greetings">
        Type your search keywords to find what you're looking for. Try to be as
        accurate as possible to make the results closer.
      </p>

      <Form onSubmit={_onClickSearch} noValidate>
        <Row gutter={[16, 16]}>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <Item>
              {/* {location && ( */}
              <SearchLocation
                initialValue={
                  location &&
                  location.results &&
                  location.results[0].formatted_address
                }
                onSuccess={updatePropertyLocation}
              />
              {/* )} */}
              {searchForm.location.error ? (
                <div className="invalid-message">
                  {searchForm.location.errorComputedMessage}
                </div>
              ) : null}
            </Item>
          </Col>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <Item>
              <SelectBox {...searchForm.propertyFor} options={propertyFor} />
            </Item>
          </Col>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <Item>
              <SelectBox
                {...searchForm.propertyType}
                options={
                  searchForm.propertyFor.value &&
                  searchForm.propertyFor.value != ""
                    ? searchForm.propertyFor.value == "Rent"
                      ? rentPropertyType
                      : sellPropertyType
                    : []
                }
              />
            </Item>
          </Col>
          <Col xl={4} lg={4} md={8} sm={16} xs={16}>
            <Button
              title="Search"
              category="primary"
              type="submit"
              block={true}
              size="large"
              loading={loading}
            />
          </Col>
          <Col xl={2} lg={2} md={4} sm={8} xs={8}>
            <Button
              title="Filters"
              // block={true}
              category="primary"
              size="large"
              onClick={() => {
                setFilters({ value: !filters.value });
              }}
              className="filters-button"
            />
          </Col>
        </Row>
      </Form>
      <Filters {...searchForm} filters={filters.value} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchProperty: (property) => dispatch(SearchPropertyDispatch(property)),
  setOptions: (options) => dispatch(SearchOptionsDispatch(options)),
  setCount: (count) => dispatch(SearchPropertyCountDispatch(count)),
});

const connectedComponent = connect(null, mapDispatchToProps)(SearchForm);

export { connectedComponent as SearchForm };
