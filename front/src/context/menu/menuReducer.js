export const menuReducuer = (state, action) => {
	switch (action?.type) {
		case "turnMenu":
			return { isOpen: !state.isOpen }
		case "closeMenu":
			return { isOpen: false }
		default:
			return state
	}
}
