import React, { useState, useEffect } from 'react'
import AppLayout from '../../layouts/AppLayout'
import site from '../../core/config/sitemap'
import { Col, Row, Form } from 'antd'
import './styles/ResetPassword.scss'
import notification from '../../utils/services/alert'
import formValidator from '../../utils/services/formValidator'
import { TextBox, Button } from '../../components/html'
import { setPasswordAction } from '../../redux/actions/settings'
import { redirect } from '../../utils/site'
import cookie from '../../utils/services/cookie'
import { COOKIE_ID } from '../../core/constants/auth'

const { Item } = Form

const ResetPassword = () => {
	const initialForm = {
		password: {
			label: 'New Password',
			placeholder: 'Type New Password',
			showLabel: false,
			value: '',
			autoFocus: true,
			errorMessage: 'Password must be 8 characters with 1 capital letter',
			required: true,
			id: 'password',
			type: 'password',
			minLength:8,
			regex: '^(?=.*[A-Z])(?=.{8,})',
			onChange: event => _onChange(event)
		},
		confirmPassword: {
			label: 'Confirm Password',
			placeholder: 'Confirm Password',
			showLabel: false,
			value: '',
			autoFocus: true,
			errorMessage: 'Passwords do not match.',
			required: true,
			id: 'confirmPassword',
			type: 'password',
			minLength:8,
			validator: (password) => password == initialForm.password.value,
			onChange: event => _onChange(event)
		}
	}

	const [saveLoading, setSaveLoading] = useState(false)
	const [resetPasswordForm, setResetPasswordForm] = useState(initialForm)

	useEffect(() => {
		console.log('------initial chala-----')
		const USER_DATA = cookie.get(COOKIE_ID)
		if (USER_DATA) {
			redirect('/')
		}
		let newForm = resetPasswordForm
		newForm['password'].value = ''
		setResetPasswordForm({ ...newForm })
	}, [])
	// Events

	const _onChange = event => {
		let newForm = resetPasswordForm
		newForm[event.target.name].value = event.target.value
		newForm[event.target.name].error = false
		setResetPasswordForm({ ...newForm })
	}

	const _onClickResetPassword = async event => {
		event.preventDefault()
		const { isValid, form } = formValidator(resetPasswordForm)

		setResetPasswordForm({ ...form })

		if (isValid) {
			setSaveLoading(true)
			try {
				const user = {
					password: resetPasswordForm.password.value
				}
				await resetPassword(user)
			} catch (err) {}
			setSaveLoading(false)
		}
	}

	// Utils

	const resetPassword = async user => {
		let token = window.location.href.split('?').slice(-1)[0]
		const res = await setPasswordAction(user, token)
		if (res.result) {
			notification.success('Password has been updated successfully')
			redirect('/')
		} else {
			notification.error(res.message || 'Error!')
		}
	}

  return (
    <div className='resetpassword-screen'>
        <Row >
            <Col span={8} xs={24} sm={12}>
                <Form onSubmit={_onClickResetPassword} noValidate>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                    <Item>
                        <TextBox {...resetPasswordForm.password} />
                    </Item>
                    </Col>
					<Col span={24}>
						<Item>
							<TextBox {...resetPasswordForm.confirmPassword} />
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
                </Row>
                </Form>
            </Col>
        </Row>

    </div>
  )
}

ResetPassword.getLayout = page => {
  return <AppLayout route={site.routes.ResetPassword}>{page}</AppLayout>
}

export default ResetPassword
