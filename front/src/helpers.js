export const validateRegister = (newUser) => {
	console.log(newUser)
}

export const validateLogin = (user) => {
	console.log(user)
}

export const getFormData = (array) => {
	let infoToSend = {}
	array.forEach(
		(each) => each.name !== "" && (infoToSend[each.name] = each.value)
	)
	return infoToSend
}
