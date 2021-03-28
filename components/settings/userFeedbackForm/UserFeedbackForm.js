import React from 'react'
import { Row, Col, Form } from 'antd';
import { TextBox, TextField, Button } from '../../html';

const UserFeedbackForm = (props) => {

  return (
    <div>
      <Col xl={18} lg={18} md={24} sm={24}>
        <Row gutter={[16, 16]}>
          <Form onSubmit={props.onFbSubmit} noValidate>
            <Col span={24}>
              <TextField label="Feedback" placeholder="Give feedback ..." onChange={props.onChangeFbAbout} value={props.fbAbout} />
            </Col>

            <Col sm={24} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
              <Button
                type='submit'
                title='Submit'
                size='large'
                category='primary'
                disabled={props.fbAbout.length === 0}
              />
            </Col>

          </Form>
        </Row>
      </Col>

    </div>
  )
}

export default UserFeedbackForm
