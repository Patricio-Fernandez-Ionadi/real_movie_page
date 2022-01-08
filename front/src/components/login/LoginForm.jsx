import React from "react"
import { FormElement } from "./FormElement"
import { FormInput } from "./FormInput"
import { FormContainer } from "./FormContainer"
import { getFormData, validateLogin, validateRegister } from "../../helpers"

export const LoginForm = () => {
	const handleRegister = (e) => {
		e.preventDefault()
		let childrens = [
			...Array.from(e.target),
			{ name: "form", value: "register" },
		]
		let form = getFormData(childrens)

		validateRegister(form)
	}
	const handleLogin = (e) => {
		e.preventDefault()
		let childrens = [...Array.from(e.target), { name: "form", value: "login" }]
		let form = getFormData(childrens)
		validateLogin(form)
	}

	return (
		<FormContainer>
			<FormElement buttonlabel='Registrarme' onevent={handleRegister}>
				<FormInput name='name' type='text' placeholder='Name' />
				<FormInput name='lastname' type='text' placeholder='Lastname' />
				<FormInput name='email' type='email' placeholder='Email' />
				<FormInput name='username' type='text' placeholder='Username' />
				<FormInput name='password' type='password' placeholder='Password' />
				<FormInput
					name='password_confirm'
					type='password'
					placeholder='Confirm Password'
				/>
				<FormInput name='credit_card' type='text' placeholder='Credit card(?' />
			</FormElement>

			<FormElement buttonlabel='Iniciar Sesión' onevent={handleLogin}>
				<FormInput name='username' type='text' placeholder='username...' />
				<FormInput name='password' type='password' placeholder='password...' />
			</FormElement>
		</FormContainer>
	)
}
