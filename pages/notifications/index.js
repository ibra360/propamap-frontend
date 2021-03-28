import React from 'react'
import AppLayout from '../../layouts/AppLayout';
import site from '../../core/config/sitemap';
import { Col, Row } from 'antd';
import './styles/Notifications.scss'
import Title from 'antd/lib/typography/Title';



const Notifications = () => {


  return (
    <div className="notifications-screen">
      <Row gutter={[24, 24]} justify="space-between" style={{ width: "100%" }} >

        <Col span={24}>
          <Title level={4}>Notifications</Title>
        </Col>
        <Col span={24}>
          <div className="notification">
            <div className="img">
              <img src="/images/tick.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="img">
              <img src="/images/alarm.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="img">
              <img src="/images/tick.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="img">
              <img src="/images/alarm.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="img">
              <img src="/images/tick.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="img">
              <img src="/images/alarm.png" alt="" />
            </div>
            <div className="body">
              <div className="text">Your advertise "Amazing property in Malaysia" got Approved</div>
              <div className="time">10h ago</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Notifications.getLayout = page => {
  return <AppLayout route={site.routes.Notifications}>{page}</AppLayout>;
};

export default Notifications

