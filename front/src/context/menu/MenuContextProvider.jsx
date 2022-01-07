import React, { useEffect, useState } from "react"
import { useReducer } from "react"

import { MenuContext, menuReducuer } from ".."

export const MenuContextProvider = ({ children }) => {
	const [isOpenMenu, setMenuState] = useState(false)
	const [activeRouteState, setActiveRouteState] = useState(0)

	const [{ isOpen, activeRoute }, dispatch] = useReducer(menuReducuer, {
		isOpen: isOpenMenu,
		activeRoute: activeRouteState,
	})

	const handleMenu = () => dispatch({ type: "turnMenu" })
	const closeMenu = () => dispatch({ type: "closeMenu" })

	const setActiveRoute = (routeId) => {
		dispatch({ type: "setRouteById", payload: routeId })
	}

	useEffect(() => {
		setMenuState(isOpen)
		setActiveRouteState(activeRoute)
	}, [isOpen, activeRoute])

	return (
		<MenuContext.Provider
			value={{
				handleMenu,
				closeMenu,
				setActiveRoute,
				activeRoute,
				isOpen,
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}
