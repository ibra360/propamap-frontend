import React from 'react'
import { Row, Col, Form, Space } from 'antd';
import { TextBox, Button } from '../../html';

const PasswordSettingsForm = (props) => {


  return (
    <div>
      <Col xl={18} lg={18} md={24} sm={24}>
        <Row gutter={[16, 16]}>
          <Form onSubmit={props.onPasswordSubmit} noValidate>
            <Row gutter={[16, 16]}>
              <Col xl={24} lg={24} md={24} sm={24}>
                <label>Change Password</label>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
              <Col xl={12} lg={12} md={24} sm={24}>
                <TextBox label="Old Password" placeholder="old password" type="password" onChange={props.onChangeOldPassword} value={props.oldPassword} />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
              <Col xl={12} lg={12} md={24} sm={24}>
                <TextBox label="New Password" placeholder="new password" type="password" onChange={props.onChangeNewPassword} value={props.newPassword} />
              </Col>
              <Col xl={12} lg={12} md={24} sm={24}>
                <TextBox label="Confirm Password" placeholder="confirm password" type="password" onChange={props.onChangeConfirmPassword} value={props.confirmPassword} />
              </Col>
            </Row>

            <Col sm={24} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
              <Button
                type='submit'
                title='SAVE CHANGES'
                size='large'
                category='primary'
                disabled={props.oldPassword.length === 0 || props.newPassword.length === 0 || props.confirmPassword.length === 0}
              />
            </Col>
          </Form>
        </Row>
      </Col>

    </div>
  )
}

export default PasswordSettingsForm
