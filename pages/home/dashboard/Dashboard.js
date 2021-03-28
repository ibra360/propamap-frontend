import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { connect } from "react-redux";
import AppLayout from "../../../layouts/AppLayout";

import "./styles/Dashboard.scss";

import { PropertyCards } from "../../../components/properties";
import { MapContainer, CardSlider } from "../../../components/pagePartial";
import { SearchForm } from "../../../components/home";

import site from "../../../core/config/sitemap";
import { addFavourite, removeFavourite } from "../../../redux/actions/property";

const { Title } = Typography;

const Dashboard = (props) => {
  const [defaultLocation, setLocation] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(pos);
        console.log("LOCATION", pos);
      });
    }
  }, []);

  return (
    <div className="page-dashboard">
      <SearchForm loc={defaultLocation} />
      <div className="find-properties">
        <MapContainer showCardOnly={false} defaultLocation={defaultLocation} />
      </div>
      <div className="recommended-properties">
        <Title level={4}>Recommended for you</Title>
        <PropertyCards />
      </div>
      <div className="trending-properties">
        {/* <Title level={4}>Newly Listed</Title> */}
        <CardSlider
          showMeta={true}
          addFavourite={() => props.addFavourite()}
          removeFavourite={() => props.removeFavourite()}
        />
      </div>
    </div>
  );
};

Dashboard.getLayout = (page) => {
  return <AppLayout route={site.routes.dashboard}>{page}</AppLayout>;
};

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (id) => dispatch(addFavourite(id)),
  removeFavourite: (id) => dispatch(removeFavourite(id)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
