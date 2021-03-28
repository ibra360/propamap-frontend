import React, { useState, useEffect } from "react";
import { Card as AntCard, Skeleton } from "antd";
import ScrollMenu from "react-horizontal-scrolling-menu";
import notification from "../../../utils/services/alert";
import "./CardSlider.scss";

import { Card } from "../../pagePartial";

import {
  GetTrendingPropertiesAction,
  addFavouriteProperty,
  removeFavouriteProperty,
} from "../../../redux/actions/property";
import { COOKIE_ID } from "../../../core/constants/auth";
import cookie from "../../../utils/services/cookie";

const CardSlider = (props) => {
  const MenuItem = (params) => (
    <div className={`menu-item`}>
      <Card
        {...params}
        slider={true}
        showMeta={params.showMeta}
        onAddFav={params.onAddFav}
        onremoveFav={params.onremoveFav}
      />
    </div>
  );

  const Menu = (properties, props) =>
    console.log("PROPS FRROM CARD SLIDER", properties, props);

  // {
  //   properties &&
  //     properties.map((property, key) => (
  //       <MenuItem
  //         {...property}
  //         showMeta={props.showMeta}
  //         key={key}
  //         onAddFav={onAddFav}
  //         onremoveFav={onremoveFav}
  //       />
  //     ));
  // }
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(Menu([], props));

  useEffect(() => {
    const didMount = async () => {
      let res = await GetTrendingPropertiesAction();
    console.log("sss",res);
      
      if (res.body) {
        setMenu(Menu(res.body.data, props));
        setLoading(false);
      }
    };
    didMount();
  }, []);

  const onAddFav = async (id) => {
    const USER_DATA = cookie.get(COOKIE_ID);
    try {
      if (USER_DATA) {
        const res = await addFavouriteProperty({ propertyId: id });
        props.addFavourite(id);
        let response = await GetTrendingPropertiesAction();
        if (response.result) {
          setMenu(Menu(response.body, props));
        }
        notification.success("Property Added to favourites");
      } else {
        notification.error("Signin to continue");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onremoveFav = async (id) => {
    try {
      const res = await removeFavouriteProperty({ propertyId: id });
      props.removeFavourite(id);
      notification.success("Property removed from favourites");
      let response = await GetTrendingPropertiesAction();
      if (response.result) {
        setMenu(Menu(response.body, props));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const _onSelect = (key) => {
    console.log(key);
  };

  return (
    <div className="cmp-card-slider">
      {loading ? (
        <AntCard>
          <Skeleton loading={true} avatar active />
        </AntCard>
      ) : (
        <ScrollMenu data={menu} onSelect={_onSelect} alignCenter={false} />
      )}
    </div>
  );
};

export { CardSlider };
