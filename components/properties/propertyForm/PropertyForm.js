import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Typography, Row, Col, Form, Switch } from "antd";
import { useRouter } from "next/router";

import { TextBox, TextField, CheckBox, Button, SelectBox } from "../../html";
import { SearchLocation } from "../../pagePartial";
import notification from "../../../utils/services/alert";

import formValidator from "../../../utils/services/formValidator";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyArJOVVmBPjEuYiOyK6UtwvzA72uqghu5A");
const { Title } = Typography;
// import { useBeforeunload } from "react-beforeunload";
import { useBeforeUnload } from "react-use";
import "./PropertyForm.scss";
import {
  propertyFor,
  rentPropertyType,
  rentalTime,
  genderAllowed,
  sellPropertyType,
  requiredFieldForSell,
  requiredFieldForRent,
} from "../../../core/constants/data";

import { PropertyDispatch } from "../../../redux/actions/system";
import site from "../../../core/config/sitemap";
import {
  AddPropertyAction,
  UpdatePropertyAction,
  UpdateDraftAction,
  DraftPropertyAction,
} from "../../../redux/actions/property";
import { redirect } from "../../../utils/site";

import { PropertyFormImageUpload } from "../";

const manageForm = {
  rent: {
    room: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
    ],
    apartment: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    condominium: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    house: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    office: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    villa: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    land: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
    floor: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
    ],
    building: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "rooms",
      "bathrooms",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    cottage: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    store: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "internet",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    farm: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
    warehouse: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
  },
  sell: {
    room: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
    ],
    apartment: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    condominium: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    house: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    office: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    villa: [
      "rentalTime",
      "studentsAllowed",
      "genderAllowed",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    land: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
    floor: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
    ],
    building: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "rooms",
      "bathrooms",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    cottage: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "furniture",
      "internet",
      "smokingAllowed",
      "electricityBill",
      "waterBill",
      "rooms",
      "bathrooms",
      "kitchen",
      "carParking",
      "livingRoom",
    ],
    store: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "airConditioner",
      "internet",
      "carParking",
      "electricityBill",
      "waterBill",
    ],
    farm: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
    warehouse: [
      "rentalTime",
      "propertySize",
      "location",
      "address",
      "availableImidiately",
      "images",
      "propertyDetails",
      "electricityBill",
      "waterBill",
    ],
  },
};

const PropertyForm = ({
  setProperty,
  property,
  user,
  _onChangePropertyLocation,
  coord,
  geoLocation,
}) => {
  window.onbeforeunload = function () {
    _onDraft();
    return "Are you sure";
  };
  // useBeforeUnload( 'You have unsaved changes, are you sure?');
  // useBeforeunload(() => _onDraft());
  console.log("GEO LOCATION", geoLocation);
  console.log("PROPERTY", property);
  const router = useRouter();
  //const locationAddress = property && property.coord && getLocation(property.coord);
  const initialForm = {
    adTitle: {
      label: "Ad title",
      placeholder: "Add property title",
      value: property ? property.title : "",
      id: "adTitle",
      type: "text",
      onChange: (event) => _onChange(event),
    },
    propertyFor: {
      label: "Property For",
      placeholder: "Propery For",
      value: property ? property.property_for : "rent",
      size: "large",
      required: true,
      id: "propertyFor",
      type: "text",
      onSelect: (event) => _onSelect(event, "propertyFor"),

      crossHidden: true,
    },
    propertyType: {
      label: "Property Type",
      placeholder: "Add property type",
      value: property ? property.property_type : "room",
      searchable: true,
      size: "large",
      id: "propertyType",
      type: "text",
      onSelect: (event) => _onSelect(event, "propertyType"),

      crossHidden: true,
    },
    propertyPrice: {
      label: "Price",
      placeholder: "Add property price",
      min: 1,
      formatter: (value) => `RM ${value}`,
      parser: (value) => value.replace(/R|M|\s?|(,*)/g, ""),
      value: property ? property.price : "",
      id: "propertyPrice",
      type: "number",
      onChange: (event) => _onChange(event),
    },
    propertySize: {
      label: "Area (Sq. ft.)",
      placeholder: "Property Size",
      value: property ? property.space : "",
      min: 1,
      id: "propertySize",
      required: true,
      type: "number",
      onChange: (event) => _onChange(event),
    },
    rentalTime: {
      label: "Rental Time",
      placeholder: "Rental Time",
      value: property
        ? JSON.stringify(property.rental_time[0])
        : JSON.stringify(),
      searchable: true,
      size: "large",
      id: "rentalTime",
      type: "text",
      onSelect: (event) => _onSelect(event, "rentalTime"),
    },
    studentsAllowed: {
      label: "Students only",
      title: "Allowed",
      value: property
        ? property.student_only
          ? property.student_only
          : false
        : false,
      id: "studentsAllowed",
      onChange: (event) => _onChangeCheckbox(event),
    },
    location: {
      label: "Location",
      value: property
        ? {
            lat: property.coord.lat,
            lng: property.coord.lon,
            location: { description: property.locationDescription },
          }
        : "",
      id: "location",
    },
    address: {
      label: "Address",
      placeholder: "Type Property Address",
      value: "",
      id: "address",
      type: "text",
      onChange: (event) => _onChange(event),
      // disabled: true
    },
    availableImidiately: {
      title: "Available imidiately",
      value: property ? property.avaialable_immediately : false,
      id: "availableImidiately",
    },
    genderAllowed: {
      label: "Gender Allowed",
      placeholder: "Gender",
      value: property ? property.gender_allowed : "all",
      searchable: true,
      size: "large",
      id: "genderAllowed",
      type: "text",
      onSelect: (event) => _onSelect(event, "genderAllowed"),
    },
    images: {
      label: "Image",
      value: property ? property.images : [],
      id: "images",
      required: false,
    },
    propertyDetails: {
      label: "Property Details",
      placeholder: "Type property details",
      value: property ? property.description : "",
      id: "propertyDetails",
      type: "text",
      onChange: (event) => _onChange(event),
    },
    rooms: {
      label: "Rooms",
      value: property ? property.features.bed_rooms : 1,
      id: "rooms",
      onChange: (event) => _onChange(event),
    },
    bathrooms: {
      label: "Bathrooms",
      value: property ? property.features.bath_rooms : 1,
      id: "bathrRooms",
      onChange: (event) => _onChange(event),
    },
    kitchen: {
      title: "Kitchen",
      value: property ? property.features.kitchen : false,
      id: "kitchen",
      onChange: (event) => _onChangeCheckbox(event),
    },
    airConditioner: {
      title: "Air Conditioner",
      value: property ? property.features.air_condition : false,
      id: "airConditioner",
      onChange: (event) => _onChangeCheckbox(event),
    },
    internet: {
      title: "Internet",
      value: property
        ? property.features.internet
          ? property.features.internet
          : false
        : false,
      id: "internet",
      onChange: (event) => _onChangeCheckbox(event),
    },
    furniture: {
      title: "Furniture",
      value: property ? property.features.furnished : false,
      id: "furniture",
      onChange: (event) => _onChangeCheckbox(event),
    },
    carParking: {
      title: "Car Parking",
      value: property ? property.features.car_parking : false,
      id: "carParking",
      onChange: (event) => _onChangeCheckbox(event),
    },
    smokingAllowed: {
      title: "Smoking Allowed",
      value: property
        ? property.features.smoking_allowed
          ? property.features.smoking_allowed
          : false
        : false,
      id: "smokingAllowed",
      onChange: (event) => _onChangeCheckbox(event),
    },
    livingRoom: {
      title: "Living Room",
      value: property ? property.features.living_room : false,
      id: "livingRoom",
      onChange: (event) => _onChangeCheckbox(event),
    },
    electricityBill: {
      title: "Electricity Bill",
      value: property ? property.includes.electricity : false,
      id: "electricityBill",
      onChange: (event) => _onChangeCheckbox(event),
    },
    waterBill: {
      title: "Water Bill",
      value: property ? property.includes.water : false,
      id: "waterBill",
      onChange: (event) => _onChangeCheckbox(event),
    },
    acceptTermAndPolicy: {
      title: "I accept privacy policy and terms of use.",
      errorMessage: "You have to accept terms and privacy policy.",
      value: property ? true : false,
      id: "acceptTermAndPolicy",
      onChange: (event) => _onChangeCheckbox(event),
    },
  };

  const [propertyForm, setPropertyForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);

  // Events

  useEffect(() => {
    let newForm = propertyForm;
    newForm["location"].value = geoLocation && geoLocation.description;
    newForm["location"].lat = geoLocation && geoLocation.lat;

    newForm["location"].lng = geoLocation && geoLocation.lng;

    delete propertyForm["location"].error;
    setPropertyForm({ ...newForm });
    console.log("NEW FORMMMM===>", newForm);
  }, [geoLocation]);

  const _onSelect = (event, name) => {
    console.log("object", event, name);
    let newForm = propertyForm;
    newForm[name].value = event;
    newForm[name].error = false;
    setPropertyForm({ ...newForm });
  };

  const _onChange = (event) => {
    let newForm = propertyForm;
    if (event.target.name === "propertyFor") {
      let propertyType = "room";
      if (propertyForm.propertyFor.value === "rent") {
        propertyType = "apartment";
      }
      if (propertyForm.propertyFor.value === "sell") {
        if (!newForm.genderAllowed.value) {
          newForm["genderAllowed"].value = "all";
        }
      }
      newForm["propertyType"].value = propertyType;
    }
    newForm[event.target.name].value = event.target.value;
    setPropertyForm({ ...newForm });
    delete propertyForm[event.target.name].error;
  };

  const _onChangeCheckbox = (event) => {
    let newForm = propertyForm;
    newForm[event.target.name].value = !event.target.value;
    setPropertyForm({ ...newForm });
    delete propertyForm[event.target.name].error;
  };

  const _onChangeFeatures = (event) => {
    let newForm = propertyForm;
    let features = propertyForm.features.value;
    let value = parseInt(event.target.id, 10);
    let index = features.indexOf(value);
    if (index != -1) {
      features.splice(index, 1);
    } else {
      features = [...features, value];
    }
    newForm.features.value = features;
    setPropertyForm({ ...newForm });
  };

  const _onSubmit = async (eve) => {
    eve.preventDefault();

    console.log("INITIAL FORM ON SUBMIT======>", initialForm);
    //   if (
    //     !initialForm.adTitle.value ||
    //     !initialForm.propertyPrice.value ||
    //     !initialForm.rentalTime.value ||
    //     !initialForm.address.value ||
    //     !initialForm.propertyDetails.value ||
    //     !initialForm.acceptTermAndPolicy.value
    //   ) {
    //     console.log("HEHE BOI",initialForm.adTitle.value,initialForm.propertyPrice.value,initialForm.rentalTime.value,initialForm.address.value,initialForm.propertyDetails.value,initialForm.acceptTermAndPolicy.value)
    //     setFormError(true);
    //   console.log("TRUE WALA CHAL RAHA HAI BHAYYA")

    // } else {
    //   console.log("FALSEEEEE")
    //     setFormError(false);
    //   }
    if (coord.lat) {
      updatePropertyLocation({
        lat: coord.lat,
        lng: coord.lng,
        location: {
          description: propertyForm.location.value,
        },
      });
    }
    if (!user) {
      notification.error("Login First!");
    } else if (user && !user.email_verified) {
      notification.error("Confirm your account first");
    } else {
      let newForm = propertyForm;
      for (const field in propertyForm) {
        if (field !== "propertyFor") newForm[field].required = false;
      }
      await setPropertyForm({ ...newForm });
      if (propertyForm.propertyFor.value == "rent") {
        let newForm = propertyForm;
        for (const field of requiredFieldForRent) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      } else if (propertyForm.propertyFor.value == "sell") {
        let newForm = propertyForm;
        for (const field of requiredFieldForSell) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      }
      const { isValid, form } = formValidator(propertyForm);
      console.log(isValid, form, "isValid, formisValid, form");
      setPropertyForm({ ...form });
      if (isValid) {
        if (propertyForm.propertyFor.value == "rent") {
          const property = {
            title: propertyForm.adTitle.value,
            description: propertyForm.propertyDetails.value,
            property_for: propertyForm.propertyFor.value,
            property_type: propertyForm.propertyType.value,
            price: propertyForm.propertyPrice.value,
            rental_time: propertyForm.rentalTime.value,
            student_only: propertyForm.studentsAllowed.value,
            space: propertyForm.propertySize.value,
            coord: {
              lat: propertyForm.location.lat,
              lon: propertyForm.location.lng,
            },
            address: propertyForm.address.value,
            avaialable_immediately: propertyForm.availableImidiately.value,
            gender_allowed: propertyForm.genderAllowed.value,
            features: {
              bed_rooms: propertyForm.rooms.value,
              bath_rooms: propertyForm.bathrooms.value,
              living_room: propertyForm.livingRoom.value,
              air_condition: propertyForm.airConditioner.value,
              furnished: propertyForm.furniture.value,
              internet: propertyForm.internet.value,
              kitchen: propertyForm.kitchen.value,
              car_parking: propertyForm.carParking.value,
              smoking_allowed: propertyForm.smokingAllowed.value,
            },
            includes: {
              electricity: propertyForm.electricityBill.value,
              water: propertyForm.waterBill.value,
            },
            images: propertyForm.images.value,
          };
          saveProperty(property);
        } else {
          const property = {
            title: propertyForm.adTitle.value,
            description: propertyForm.propertyDetails.value,
            property_for: propertyForm.propertyFor.value,
            property_type: propertyForm.propertyType.value,
            address: propertyForm.address.value,
            price: propertyForm.propertyPrice.value,
            avaialable_immediately: propertyForm.availableImidiately.value,
            features: {
              bed_rooms: propertyForm.rooms.value,
              bath_rooms: propertyForm.bathrooms.value,
              living_room: propertyForm.livingRoom.value,
              air_condition: propertyForm.airConditioner.value,
              furnished: propertyForm.furniture.value,
              kitchen: propertyForm.kitchen.value,
              car_parking: propertyForm.carParking.value,
            },
            includes: {
              electricity: propertyForm.electricityBill.value,
              water: propertyForm.waterBill.value,
            },
            space: propertyForm.propertySize.value,
            coord: {
              lat: propertyForm.location.lat,
              lon: propertyForm.location.lng,
            },
            images: propertyForm.images.value,
          };
          saveProperty(property);
        }
      } else {
        notification.error("Fill all the fields");
      }
    }
  };
  const _onDraft = async (eve) => {
    // eve.preventDefault();

    console.log("INITIAL FORM ON Draft======>", initialForm);
    //   if (
    //     !initialForm.adTitle.value ||
    //     !initialForm.propertyPrice.value ||
    //     !initialForm.rentalTime.value ||
    //     !initialForm.address.value ||
    //     !initialForm.propertyDetails.value ||
    //     !initialForm.acceptTermAndPolicy.value
    //   ) {
    //     console.log("HEHE BOI",initialForm.adTitle.value,initialForm.propertyPrice.value,initialForm.rentalTime.value,initialForm.address.value,initialForm.propertyDetails.value,initialForm.acceptTermAndPolicy.value)
    //     setFormError(true);
    //   console.log("TRUE WALA CHAL RAHA HAI BHAYYA")

    // } else {
    //   console.log("FALSEEEEE")
    //     setFormError(false);
    //   }
    if (coord.lat) {
      updatePropertyLocation({
        lat: coord.lat,
        lng: coord.lng,
        location: {
          description: propertyForm.location.value,
        },
      });
    }
    if (!user) {
      notification.error("Login First!");
    } else if (user && !user.email_verified) {
      notification.error("Confirm your account first");
    } else {
      let newForm = propertyForm;
      for (const field in propertyForm) {
        if (field !== "propertyFor") newForm[field].required = false;
      }
      await setPropertyForm({ ...newForm });
      if (propertyForm.propertyFor.value == "rent") {
        let newForm = propertyForm;
        for (const field of requiredFieldForRent) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      } else if (propertyForm.propertyFor.value == "sell") {
        let newForm = propertyForm;
        for (const field of requiredFieldForSell) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      }
      const { isValid, form } = formValidator(propertyForm);
      console.log(isValid, form, "isValid, formisValid, form");
      setPropertyForm({ ...form });
      // if (isValid) {
      if (propertyForm.propertyFor.value == "rent") {
        const property = {
          title: propertyForm.adTitle.value,
          description: propertyForm.propertyDetails.value,
          property_for: propertyForm.propertyFor.value,
          property_type: propertyForm.propertyType.value,
          price: propertyForm.propertyPrice.value,
          rental_time: propertyForm.rentalTime.value,
          student_only: propertyForm.studentsAllowed.value,
          space: propertyForm.propertySize.value,
          coord: {
            lat: propertyForm.location.lat,
            lon: propertyForm.location.lng,
          },
          address: propertyForm.address.value,
          avaialable_immediately: propertyForm.availableImidiately.value,
          gender_allowed: propertyForm.genderAllowed.value,
          features: {
            bed_rooms: propertyForm.rooms.value,
            bath_rooms: propertyForm.bathrooms.value,
            living_room: propertyForm.livingRoom.value,
            air_condition: propertyForm.airConditioner.value,
            furnished: propertyForm.furniture.value,
            internet: propertyForm.internet.value,
            kitchen: propertyForm.kitchen.value,
            car_parking: propertyForm.carParking.value,
            smoking_allowed: propertyForm.smokingAllowed.value,
          },
          includes: {
            electricity: propertyForm.electricityBill.value,
            water: propertyForm.waterBill.value,
          },
          images: propertyForm.images.value,
        };
        draftProperty(property);
      } else {
        const property = {
          title: propertyForm.adTitle.value,
          description: propertyForm.propertyDetails.value,
          property_for: propertyForm.propertyFor.value,
          property_type: propertyForm.propertyType.value,
          address: propertyForm.address.value,
          price: propertyForm.propertyPrice.value,
          avaialable_immediately: propertyForm.availableImidiately.value,
          features: {
            bed_rooms: propertyForm.rooms.value,
            bath_rooms: propertyForm.bathrooms.value,
            living_room: propertyForm.livingRoom.value,
            air_condition: propertyForm.airConditioner.value,
            furnished: propertyForm.furniture.value,
            kitchen: propertyForm.kitchen.value,
            car_parking: propertyForm.carParking.value,
          },
          includes: {
            electricity: propertyForm.electricityBill.value,
            water: propertyForm.waterBill.value,
          },
          space: propertyForm.propertySize.value,
          coord: {
            lat: propertyForm.location.lat,
            lon: propertyForm.location.lng,
          },
          images: propertyForm.images.value,
        };
        draftProperty(property);
      }
    }
  };

  const _onPreview = async (eve) => {
    eve.preventDefault();
    console.log("PREVIEW BUTTON======>", propertyForm);

    if (coord.lat) {
      updatePropertyLocation({
        lat: coord.lat,
        lng: coord.lng,
        location: {
          description: propertyForm.location.value,
        },
      });
    }
    if (!user) {
      notification.error("Login First!");
    } else if (user && !user.email_verified) {
      notification.error("Confirm your account first");
    } else {
      let newForm = propertyForm;
      for (const field in propertyForm) {
        if (field !== "propertyFor") newForm[field].required = false;
      }
      await setPropertyForm({ ...newForm });
      if (propertyForm.propertyFor.value == "rent") {
        let newForm = propertyForm;
        for (const field of requiredFieldForRent) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      } else if (propertyForm.propertyFor.value == "sell") {
        let newForm = propertyForm;
        for (const field of requiredFieldForSell) {
          newForm[field].required = true;
        }
        await setPropertyForm({ ...newForm });
      }

      const { isValid, form } = formValidator(propertyForm);
      setPropertyForm({ ...form });
      if (isValid) {
        if (propertyForm.propertyFor.value == "rent") {
          const property = {
            title: propertyForm.adTitle.value,
            description: propertyForm.propertyDetails.value,
            property_for: propertyForm.propertyFor.value,
            property_type: propertyForm.propertyType.value,
            price: propertyForm.propertyPrice.value,
            rental_time: propertyForm.rentalTime.value,
            student_only: propertyForm.studentsAllowed.value,
            address: propertyForm.address.value,
            locationDescription: propertyForm.location.value,
            space: propertyForm.propertySize.value,
            coord: {
              lat: propertyForm.location.lat,
              lon: propertyForm.location.lng,
            },
            avaialable_immediately: propertyForm.availableImidiately.value,
            gender_allowed: propertyForm.genderAllowed.value,
            features: {
              bed_rooms: propertyForm.rooms.value,
              bath_rooms: propertyForm.bathrooms.value,
              living_room: propertyForm.livingRoom.value,
              air_condition: propertyForm.airConditioner.value,
              furnished: propertyForm.furniture.value,
              internet: propertyForm.internet.value,
              kitchen: propertyForm.kitchen.value,
              car_parking: propertyForm.carParking.value,
              smoking_allowed: propertyForm.smokingAllowed.value,
            },
            includes: {
              electricity: propertyForm.electricityBill.value,
              water: propertyForm.waterBill.value,
            },
            images: propertyForm.images.value,
          };
          previewProperty(property);
        } else {
          const property = {
            title: propertyForm.adTitle.value,
            description: propertyForm.propertyDetails.value,
            property_for: propertyForm.propertyFor.value,
            property_type: propertyForm.propertyType.value,
            price: propertyForm.propertyPrice.value,
            address: propertyForm.address.value,
            avaialable_immediately: propertyForm.availableImidiately.value,
            locationDescription: propertyForm.location.value,
            features: {
              bed_rooms: propertyForm.rooms.value,
              bath_rooms: propertyForm.bathrooms.value,
              living_room: propertyForm.livingRoom.value,
              air_condition: propertyForm.airConditioner.value,
              furnished: propertyForm.furniture.value,
              kitchen: propertyForm.kitchen.value,
              car_parking: propertyForm.carParking.value,
            },
            includes: {
              electricity: propertyForm.electricityBill.value,
              water: propertyForm.waterBill.value,
            },
            space: propertyForm.propertySize.value,
            coord: {
              lat: propertyForm.location.value.lat,
              lon: propertyForm.location.value.lng,
            },
            images: propertyForm.images.value,
          };
          previewProperty(property);
        }
      } else {
        notification.error("Fill all the fields");
      }
    }
  };

  const saveProperty = async (propertyDetail) => {
    console.log("PROP DETAIL", propertyDetail);

    setLoading(true);
    if (property && property._id) {
      const res = await UpdatePropertyAction(propertyDetail, property._id);
      console.log("Update PROPERTY RES", res);

      if (res.result) {
        setProperty(null);
        notification.success("Property Updated.");
        redirect("/myadvertisements");
      } else {
        notification.error("Fail to update property!");
      }
    } else {
      const res = await AddPropertyAction(propertyDetail);
      console.log("ADD PROPERTY RES", res);
      if (res.result) {
        setProperty(null);
        notification.success("Property Added.");
        redirect(site.routes.viewProperty.route + res.body._id);
      } else {
        notification.error("Failed to submit property!");
      }
    }
    setLoading(false);
  };
  const draftProperty = async (propertyDetail) => {
    console.log("PROP DETAIL in draft", propertyDetail);

    setLoading(true);
    if (property && property._id) {
      const res = await UpdateDraftAction(propertyDetail, property._id);
      console.log("Update Draft RES", res);

      if (res.result) {
        setProperty(null);
        notification.success("Property Updated.");
        redirect("/myadvertisements");
      } else {
        notification.error("Fail to update property!");
      }
    } else {
      const res = await DraftPropertyAction(propertyDetail);
      console.log("ADD PROPERTY RES", res);
      if (res.result) {
        setProperty(null);
        notification.success("Property Saved in Draft.");
        redirect("/myadvertisements");

        // redirect(site.routes.viewProperty.route + res.body._id);
      } else {
        notification.error("Failed to draft property!");
      }
    }
    setLoading(false);
  };

  const previewProperty = (property) => {
    setPreviewLoading(true);
    setProperty(property);
    setPreviewLoading(false);
    redirect(site.routes.previewAdd.path);
  };

  const updateFeatures = (name, value) => {
    if (value > 0) {
      propertyForm.rooms.onChange({
        target: {
          name: name,
          value: propertyForm[name].value + value,
        },
      });
    } else if (value < 0) {
      if (propertyForm[name].value > 0)
        propertyForm.rooms.onChange({
          target: {
            name: name,
            value: propertyForm[name].value + value,
          },
        });
    }
  };

  const updatePropertyLocation = (value) => {
    delete propertyForm["location"].error;
    const { lat, lng, location } = value;
    let newForm = propertyForm;
    newForm.location.value = { lat, lng, location };
    _onChangePropertyLocation(value);
    setPropertyForm({ ...newForm });
  };

  const renderFormElement = (key, component) => {
    let formElementPermission =
      manageForm[propertyForm.propertyFor.value][
        propertyForm.propertyType.value
      ];
    if (formElementPermission && formElementPermission.indexOf(key) !== -1) {
      return component;
    }
  };

  const renderIncluding = () => {
    let formElementPermission =
      manageForm[propertyForm.propertyFor.value][
        propertyForm.propertyType.value
      ];
    if (
      formElementPermission &&
      (formElementPermission.includes("electricityBill") ||
        formElementPermission.includes("waterBill"))
    ) {
      return (
        <Col span={24} className="marginBottom">
          <h4 className="features-title">Including</h4>
        </Col>
      );
    } else return null;
  };

  const renderFeature = () => {
    let featureArray = [
      "rooms",
      "bathrooms",
      "kitchen",
      "airConditioner",
      "furniture",
      "carParking",
      "internet",
      "smokingAllowed",
      "livingRoom",
    ];
    let formElementPermission =
      manageForm[propertyForm.propertyFor.value][
        propertyForm.propertyType.value
      ];
    let difference = featureArray.filter((x) =>
      formElementPermission.includes(x)
    );
    if (difference.length) {
      return (
        <Col span={24}>
          <h4 className="features-title">Features</h4>
        </Col>
      );
    } else return null;
  };

  console.log(propertyForm, "propertyForm");
  return (
    <div className="cmp-property-form">
      <Col xl={12} lg={12} md={24} sm={24}>
        <Row gutter={[16, 16]}>
          <Form onSubmit={_onSubmit} noValidate>
            <Col span={24}>
              <Title level={4}>Add property details</Title>
            </Col>
            <Col span={24} className="marginBottom">
              <TextBox {...propertyForm.adTitle} />
            </Col>
            <Col span={24} className="marginBottom">
              <SelectBox {...propertyForm.propertyFor} options={propertyFor} />
            </Col>

            <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
              <SelectBox
                {...propertyForm.propertyType}
                options={
                  propertyForm.propertyFor.value &&
                  propertyForm.propertyFor.value != ""
                    ? propertyForm.propertyFor.value == "rent"
                      ? rentPropertyType
                      : sellPropertyType
                    : []
                }
              />
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
              <TextBox {...propertyForm.propertyPrice} />
            </Col>
            {renderFormElement(
              "propertySize",
              <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
                <TextBox {...propertyForm.propertySize} />
              </Col>
            )}
            {propertyForm.propertyFor.value &&
              propertyForm.propertyFor.value != "" &&
              propertyForm.propertyFor.value == "rent" && (
                <>
                  {renderFormElement(
                    "rentalTime",
                    <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
                      <SelectBox
                        {...propertyForm.rentalTime}
                        options={rentalTime}
                      />
                    </Col>
                  )}

                  {renderFormElement(
                    "studentsAllowed",
                    <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
                      <label>{propertyForm.studentsAllowed.label}</label>
                      <CheckBox
                        {...propertyForm.studentsAllowed}
                        className="students-checkbox"
                      />
                    </Col>
                  )}

                  {renderFormElement(
                    "genderAllowed",
                    <Col xl={8} lg={8} md={8} sm={24} className="marginBottom">
                      <SelectBox
                        {...propertyForm.genderAllowed}
                        options={genderAllowed}
                      />
                    </Col>
                  )}
                </>
              )}
            {/* {renderFormElement(
              "location",
              <Col span={24} className="marginBottom">
                <label>Location</label>
                <SearchLocation
                  initialValue={
                    property
                      ? propertyForm.location.value.location.description
                      : ""
                  }
                  onSuccess={updatePropertyLocation}
                />
                {propertyForm.location.error ? (
                  <div className="invalid-message">
                    {propertyForm.location.errorComputedMessage}
                  </div>
                ) : null}
              </Col>
            )} */}
            {renderFormElement(
              "address",
              <Col span={24} className="marginBottom">
                <TextBox {...propertyForm.address} />
              </Col>
            )}
            {renderFormElement(
              "availableImidiately",
              <Col span={24} className="marginBottom">
                <label>Available Immediately </label>
                <div className="switch-button">
                  <Switch
                    id="availableImidiately"
                    onChange={(event) => {
                      const eve = {
                        target: {
                          name: "availableImidiately",
                          value: !event,
                        },
                      };
                      _onChangeCheckbox(eve);
                    }}
                    defaultChecked={propertyForm.availableImidiately.value}
                  />
                </div>
              </Col>
            )}
            {renderFormElement(
              "images",
              <>
                <Col span={24} className="marginBottom">
                  <label>Images</label>
                  <span className="text-secondary">
                    <i className="text-secondary">
                      First image is your property thumbnail image
                    </i>
                  </span>
                </Col>
                {/* <br />
                <br /> */}
                <PropertyFormImageUpload
                  onChange={_onChange}
                  value={propertyForm.images.value}
                />
              </>
            )}

            {renderFormElement(
              "propertyDetails",
              <Col span={24} className="marginBottom">
                <TextField {...propertyForm.propertyDetails} />
              </Col>
            )}
            {renderFeature()}
            <Col xl={12} lg={12} md={12} sm={24} className="marginBottom">
              {renderFormElement(
                "rooms",
                <div className="feature-option">
                  <div className="feature-label">
                    <p>Rooms</p>
                  </div>
                  <div className="feature-input">
                    <Button
                      icon="minus"
                      inline={true}
                      shape="circle"
                      category="secondary"
                      className="feature-btn"
                      onClick={() => updateFeatures("rooms", -1)}
                    />
                    <span className="feature-value">
                      {propertyForm.rooms.value}
                    </span>
                    <Button
                      inline={true}
                      icon="plus"
                      shape="circle"
                      category="secondary"
                      // className='feature-btn'
                      onClick={() => updateFeatures("rooms", +1)}
                    />
                  </div>
                </div>
              )}
              {propertyForm.rooms.error ? (
                <div className="invalid-message">
                  {propertyForm.rooms.errorComputedMessage}
                </div>
              ) : null}
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} className="marginBottom">
              {renderFormElement(
                "bathrooms",
                <div className="feature-option">
                  <div className="feature-label">
                    <p>Bathrooms</p>
                  </div>
                  <div className="feature-input">
                    <Button
                      icon="minus"
                      inline={true}
                      shape="circle"
                      category="secondary"
                      className="feature-btn"
                      onClick={() => updateFeatures("bathrooms", -1)}
                    />
                    <span className="feature-value">
                      {propertyForm.bathrooms.value}
                    </span>
                    <Button
                      inline={true}
                      icon="plus"
                      shape="circle"
                      category="secondary"
                      onClick={() => updateFeatures("bathrooms", +1)}
                    />
                  </div>
                </div>
              )}
              {propertyForm.bathrooms.error ? (
                <div className="invalid-message">
                  {propertyForm.bathrooms.errorComputedMessage}
                </div>
              ) : null}
            </Col>
            {renderFormElement(
              "kitchen",
              <Col xl={8} lg={12} md={12} sm={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.kitchen}
                />
              </Col>
            )}
            {renderFormElement(
              "airConditioner",
              <Col xl={8} lg={12} md={12} sm={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.airConditioner}
                />
              </Col>
            )}
            {renderFormElement(
              "furniture",
              <Col xl={8} lg={12} md={12} sm={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.furniture}
                />
              </Col>
            )}
            {renderFormElement(
              "carParking",
              <Col xl={8} lg={12} md={12} sm={12} className="marginBottom">
                <CheckBox
                  {...propertyForm.carParking}
                  className="feature-checkbox"
                />
              </Col>
            )}
            {propertyForm.propertyFor.value &&
              propertyForm.propertyFor.value != "" && (
                <>
                  {renderFormElement(
                    "internet",
                    <Col
                      xl={8}
                      lg={12}
                      md={12}
                      sm={12}
                      className="marginBottom"
                    >
                      <CheckBox
                        {...propertyForm.internet}
                        className="feature-checkbox"
                      />
                    </Col>
                  )}
                  {renderFormElement(
                    "smokingAllowed",
                    <Col
                      xl={8}
                      lg={12}
                      md={12}
                      sm={12}
                      className="marginBottom"
                    >
                      <CheckBox
                        className="feature-checkbox"
                        {...propertyForm.smokingAllowed}
                      />
                    </Col>
                  )}
                </>
              )}
            {renderFormElement(
              "livingRoom",
              <Col xl={8} lg={12} md={12} sm={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.livingRoom}
                />
              </Col>
            )}
            {renderIncluding()}
            {renderFormElement(
              "electricityBill",
              <Col span={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.electricityBill}
                />
              </Col>
            )}
            {renderFormElement(
              "waterBill",
              <Col span={12} className="marginBottom">
                <CheckBox
                  className="feature-checkbox"
                  {...propertyForm.waterBill}
                />
              </Col>
            )}
            <Col span={24} className="marginBottom">
              <CheckBox
                {...propertyForm.acceptTermAndPolicy}
                className="privacy-policy-checkbox"
              />
            </Col>
            <Col
              sm={24}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
              className="marginBottom"
            >
              {geoLocation ? (
                <Button
                  type="submit"
                  loading={loading}
                  onClick={_onSubmit}
                  title={
                    property && property._id
                      ? "UPDATE PROPERTY"
                      : "SUBMIT PROPERTY"
                  }
                  size="large"
                  category="primary"
                  className="property-submit-btn"
                />
              ) : (
                <Button
                  type="submit"
                  disabled={true}
                  loading={loading}
                  onClick={_onSubmit}
                  title={
                    property && property._id
                      ? "UPDATE PROPERTY"
                      : "SUBMIT PROPERTY"
                  }
                  size="large"
                  category="primary"
                  className="property-submit-btn"
                />
              )}
            </Col>
            <Col
              sm={24}
              md={{ span: 8, offset: 8 }}
              lg={{ span: 8, offset: 8 }}
              xl={{ span: 8, offset: 8 }}
              className="marginBottom"
            >
              {geoLocation ? (
                <Button
                  onClick={_onPreview}
                  title="PREVIEW PROPERTY"
                  size="large"
                  category="primary"
                  className="property-submit-btn"
                  loading={previewLoading}
                />
              ) : (
                <Button
                  onClick={_onPreview}
                  disabled={true}
                  title="PREVIEW PROPERTY"
                  size="large"
                  category="primary"
                  className="property-submit-btn"
                  loading={previewLoading}
                />
              )}
            </Col>
            <Col
              span={24}
              // md={{ span: 8, offset: 8 }}
              // lg={{ span: 8, offset: 8 }}
              // xl={{ span: 8, offset: 8 }}
              // className="marginBottom"
            >
              {!geoLocation && (
                <p>
                  <i>
                    Please select your property location from map search bar
                  </i>{" "}
                </p>
              )}
              <Button
                onClick={_onDraft}
                title="Save as Draft"
                size="small"
                category="primary"
                className="property-submit-btn"
                loading={previewLoading}
              />
            </Col>
          </Form>
        </Row>
      </Col>
    </div>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  propertyOld: UserReducer.Property,
  user: UserReducer.User,
});

const mapDispatchToProps = (dispatch) => ({
  setProperty: (property) => dispatch(PropertyDispatch(property)),
});

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyForm);

export { connectedComponent as PropertyForm };
