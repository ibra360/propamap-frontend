import React, { useEffect, useState } from "react";
import { Col, Card as AntCard, Skeleton, Row } from "antd";
import { Card } from "../../pagePartial";
import {
  addFavourite,
  GetRecommendedPropertiesAction,
  removeFavourite,
  removeFavouriteProperty,
} from "../../../redux/actions/property";
import { addFavouriteProperty } from "../../../redux/actions/property";
import notification from "../../../utils/services/alert";
import { connect } from "react-redux";

import "./PropertyCards.scss";

const PropCards = (props) => {
  console.log(props, "props360");
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const didMount = async () => {
      let res = await GetRecommendedPropertiesAction();
      console.log("Recomm", res);

      if (res.body) {
        if (res.body) setProperties(res.body);
        setLoading(false);
      }
    };
    didMount();
  }, []);

  const onAddFav = async (id) => {
    try {
      if (props.user) {
        const res = await addFavouriteProperty({ propertyId: id });
        props.addFavourite(id);
        let index = properties.findIndex((item) => item._id === id);
        let newProperties = [...properties];
        newProperties[index].favorite = true;
        setProperties(newProperties);
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
      let index = properties.findIndex((item) => item._id === id);
      let newProperties = [...properties];
      newProperties[index].favorite = false;
      setProperties(newProperties);
      notification.success("Property removed from favourites");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cmp-property-cards">
      <Row gutter={[16, 16]}>
        <div className="properties-container">
          {loading ? (
            <Col xl={6} lg={6} md={8} sm={24} xs={24}>
              <AntCard>
                <Skeleton loading={true} avatar active />
              </AntCard>
            </Col>
          ) : (
            !!properties.length &&
            properties.map((property, key) => (
              <Col key={key} xl={6} lg={6} md={8} sm={24} xs={24}>
                <Card
                  {...property}
                  onAddFav={onAddFav}
                  onremoveFav={onremoveFav}
                />
              </Col>
            ))
          )}
        </div>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ CommentReducer, UserReducer }) => ({
  comments: CommentReducer.comments,
  user: UserReducer.User,
});

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (id) => dispatch(addFavourite(id)),
  removeFavourite: (id) => dispatch(removeFavourite(id)),
});

const PropertyCards = connect(mapStateToProps, mapDispatchToProps)(PropCards);

export { PropertyCards };
