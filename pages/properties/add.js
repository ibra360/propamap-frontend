import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";

import AppLayout from "../../layouts/AppLayout";

import "./styles/add.scss";

import { MapContainer } from "../../components/pagePartial";
import { PropertyForm } from "../../components/properties";

import site from "../../core/config/sitemap";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyArJOVVmBPjEuYiOyK6UtwvzA72uqghu5A");

const AddProperty = ({ property }) => {
  const [coord, setCoord] = useState({});
  const [address, setAddress] = useState("");
  const [newLocation, setNewLocation] = useState();
  const locationHref = window.location.href;
  let advertise = null;
  const urlLoc = locationHref && locationHref.split("?")[1];
  const paramId = urlLoc && urlLoc.split("=")[1];
  if (paramId) {
    advertise = JSON.parse(localStorage.getItem("Advertise"));
  }

  const [location, setLocation] = useState(
    property
      ? {
          lat: property.coord.lat,
          lng: property.coord.lon,
          location: { description: property.locationDescription },
        }
      : ""
  );

  const onSelectLocation = (data) => {
    console.log("----", data);
    setAddress(data);
  };

  const _onChangePropertyLocation = (value) => {
    const { lat, lng, location } = value;
    let newForm = location;
    newForm = { lat, lng, location };
    setLocation(newForm);
  };

  const _onMarkerDragEnd = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLocation({ lat, lng });
    setCoord({ lat, lng });
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        console.log(response.results[0].formatted_address);
        setAddress(response.results[0].formatted_address);
      },
      (error) => {
        setAddress("");
      }
    );
  };

  return (
    <div className="page-add-property">
      <Row gutter={[24, 24]}>
        <PropertyForm
          _onChangePropertyLocation={_onChangePropertyLocation}
          coord={coord}
          // address={address}
          property={advertise}
          geoLocation={address}
        />
        <Col xl={12} lg={12} md={24} sm={24}>
          <MapContainer
            showSearch={true}
            defaultLocation={location}
            defaultName={location.location ? location.location.description : ""}
            draggable={true}
            onDragend={_onMarkerDragEnd}
            onSelectLocation={onSelectLocation}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  property: UserReducer.Property,
});

AddProperty.getLayout = (page) => {
  return <AppLayout route={site.routes.addProperty}>{page}</AppLayout>;
};

export default connect(mapStateToProps, null)(AddProperty);
