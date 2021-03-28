import React, { useState, useEffect } from 'react'
import AppLayout from '../../layouts/AppLayout';
import site from '../../core/config/sitemap';
import { Col, Row, Divider } from 'antd';
import './styles/Favourites.scss'
import Title from 'antd/lib/typography/Title';
import { Button } from '../../components/html';
import { ContactDetailsCard } from '../../components/favourites/contactDetailsCard/ContactDetailsCard';
import { HorizontalCard } from '../../components/favourites/horizontalCard/HorizontalCard';
import { getFavouriteProperty, removeFavouriteProperty } from '../../redux/actions/property';
import { connect } from 'react-redux';
import notification from '../../utils/services/alert';


const Favourites = (props) => {

  const [properties, setProperties] = useState([])

  useEffect(() => {
    getProperties()
  }, [])

  const getProperties = async () => {
    try {
      const res = await getFavouriteProperty()
      setProperties(res.favorite)
    }
    catch (e) {
      console.log('Error fetch plans', e)
    }
  }

  const onremoveFav = async (id) => {
    try {
      if (props.user) {
        const res = await removeFavouriteProperty({ propertyId: id });
        notification.success("Property removed from favourites");
        getProperties();
      }
      else {
        notification.error("Signin to continue")
      }
    } catch (e) {
      console.log(e);
    }
  };


  const property = {
    address: "Sarthana Nature Park And Zoo",
    agent: {
      email: "pankaj@gmail.com",
      first_name: "Pankaj",
      last_name: "Pankaj",
      mobile_number: "919033930083",
      profile_picture: "https://firebasestorage.googleapis.com/v0/b/propamap-1.appspot.com/o/content%2Fattachments%2FPropamap1591005758258.jpg?alt=media&token=090ca20c-f78a-4f34-98a9-79dfd8c3df82",
      user_name: "Pankaj",
      _id: "5ed4d24aff1b500017f7c2b4"
    },
    avaialable_immediately: true,
    chatroom_count: 3,
    coord: { lat: 21.230320526956024, lon: 72.89876773953438 },
    createdAt: "2020-06-10T07:52:46.880Z",
    description: "Green City is a residential project by Dharmadev Infrastructure Ltd located at Kamrej 1 in Surat. The key amenities of the project include Landscaped Garden, Gymnasium, Swimming Pool, 24x7 Security and Children's Play Area. Owing to its location, facilities such as schools, hospitals, ATMs, and markets are available at a close distance from Dharmadev Swaminarayan Green City. An extensive network of public transports in the close vicinity makes the project accessible.",
    features: {
      air_condition: true,
      bath_rooms: 2,
      bed_rooms: 4,
      car_parking: true,
      furnished: true,
      internet: true,
      kitchen: true,
      living_room: false,
      smoking_allowed: false,
    },
    gender_allowed: "female",
    images: (4)["https://firebasestorage.googleapis.com/v0/b/propam…=media&token=184a95d4-bc3e-48f7-bc76-3aae8f887195", "https://firebasestorage.googleapis.com/v0/b/propam…=media&token=330de7f6-4c2e-45d5-88a7-8425c573b904", "https://firebasestorage.googleapis.com/v0/b/propam…=media&token=a3c1e297-fd7a-4549-b425-94e0663624ee", "https://firebasestorage.googleapis.com/v0/b/propam…=media&token=bdb74ea3-0faf-493f-a8ac-812c3700f5de"],
    includes: { electricity: true, water: true },
    price: 5000000,
    property_for: "sell",
    property_type: "flat",
    rental_time: "monthly",
    space: 515786,
    student_only: true,
    title: "Green City",
    unread_chatrooms: 1,
    updatedAt: "2020-06-25T15:12:43.996Z",
    __v: 0,
    _id: "5ee0914e6d50390017651639",
  }
  return (
    <div className="favourites">
      <Row gutter={[24, 24]} justify="space-between" style={{ width: "100%" }} >
        <Col xl={6} md={6} sm={24}>
          <ContactDetailsCard {...props.user} profile={true} />
          <div className="about-card">
            <Title level={4}>About</Title>
            <p>
              {props.user.aboutMe}
            </p>
          </div>
        </Col>
        <Col xl={18} md={18} sm={24}>
          <Title level={4}>Favourites <span className="comments-count">{`(${properties.length || 0})`}</span></Title>
          <Divider />
          {!!properties.length && properties.map((item) => (<>
            <HorizontalCard {...item} onremoveFav={onremoveFav} color="#e34c6b"/>
            <Divider /></>))}
        </Col>
      </Row>
    </div>
  )
}

Favourites.getLayout = page => {
  return <AppLayout route={site.routes.Favourites}>{page}</AppLayout>;
};
const mapStateToProps = ({ UserReducer }) => ({
  user: UserReducer.User,
});


export default connect(mapStateToProps, null)(Favourites)

