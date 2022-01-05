export const menuReducuer = (state, action) => {
	switch (action?.type) {
		case "turnMenu":
			return { ...state, isOpen: !state.isOpen }
		case "closeMenu":
			return { ...state, isOpen: false }
		case "setRoute":
			return { ...state, activeRoute: action.payload }
		default:
			return state
	}
}
