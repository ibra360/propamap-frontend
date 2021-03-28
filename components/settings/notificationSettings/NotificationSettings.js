import React from 'react'
import { Row, Col } from 'antd';
import { CheckBox } from '../../html';
import './NotificationSettings.scss';

const NotificationSettings = (props) => {


  return (
    <div>
      <Col xl={18} lg={18} md={24} sm={24}>
        <Row gutter={[16, 16]}>
          <Col xl={18} lg={18} md={24} sm={24}>
            <div className="notification">
              <div>abcd</div>
              <div>
                <CheckBox
                  title=''
                  value={true}
                />
              </div>
            </div>
          </Col>
          <Col xl={18} lg={18} md={24} sm={24}>
            <div className="notification">
              <div>abcd</div>
              <div>
                <CheckBox
                  title=''
                  value={true}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Col>

    </div>
  )
}

export default NotificationSettings
