import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Typography, Divider } from 'antd'
import Link from 'next/link'

import './ForgotPasswordForm.scss'

import { TextBox, Button } from '../../../html'

import formValidator from '../../../../utils/services/formValidator'
import notification from '../../../../utils/services/alert'
import accountValidations from '../../../../utils/validations/accountValidations'
import { ForgotPassword } from '../../../../redux/actions/user'

const { Item } = Form
const { Title } = Typography

const ForgotPasswordForm = ({ onUpdate, onSuccess, visible }) => {
  const initialForm = {
    email: {
      label: 'Email address',
      placeholder: 'Email address',
      showLabel: false,
      value: '',
      autoFocus: true,
      errorMessage: 'Enter valid email',
      validator: email => accountValidations.validateEmail(email),
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      required: true,
      id: 'email',
      type: 'text',
      onChange: event => _onChange(event)
    }
  }

  const [saveLoading, setSaveLoading] = useState(false)
  const [forgotPasswordForm, setForgotPasswordForm] = useState(initialForm)

  useEffect(() => {
    console.log('------initial chala-----')
    let newForm = forgotPasswordForm
    newForm['email'].value = ''
    setForgotPasswordForm({ ...newForm })
  }, [visible])
  // Events

  const _onChange = event => {
    let newForm = forgotPasswordForm
    newForm[event.target.name].value = event.target.value
    newForm[event.target.name].error = false
    setForgotPasswordForm({ ...newForm })
  }

  const _onClickLogin = () => {
    onUpdate('login')
  }

  const _onClickForgotPassword = async event => {
    event.preventDefault()
    const { isValid, form } = formValidator(forgotPasswordForm)

    setForgotPasswordForm({ ...form })

    if (isValid) {
      setSaveLoading(true)
      try {
        const user = {
          email: forgotPasswordForm.email.value
        }
        await forgotPassword(user)
      } catch (err) {}
      setSaveLoading(false)
    }
  }

  // Utils

  const forgotPassword = async user => {
    let res = await ForgotPassword(user)
    if (res.result) {
      notification.success(res.body || 'Email Sent Successful.')
      onSuccess()
    } else {
      notification.error(res.message || 'Error!')
    }
  }

  return (
    <div className='cmp-forgotpassword-form'>
      <Title level={4}>Forgot Password</Title>
      <Row>
        <Col span={24}>
          <Form onSubmit={_onClickForgotPassword} noValidate>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Item>
                  <TextBox {...forgotPasswordForm.email} />
                </Item>
              </Col>
              <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                <Item>
                  <Button
                    title={'Submit'}
                    block={true}
                    category='primary'
                    size='large'
                    type='submit'
                    loading={saveLoading}
                  />
                </Item>
              </Col>
              <Col
                xl={{ offset: 5, span: 9 }}
                lg={{ offset: 5, span: 9 }}
                md={{ offset: 5, span: 9 }}
                sm={24}
                xs={24}
              >
                <Item>
                  Back to&nbsp;
                  <span onClick={_onClickLogin}>
                    <Link>
                      <a>Login</a>
                    </Link>
                  </span>
                </Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export { ForgotPasswordForm }
