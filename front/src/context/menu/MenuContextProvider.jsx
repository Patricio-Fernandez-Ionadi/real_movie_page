import React, { useEffect, useState } from "react"
import { useReducer } from "react"
import { MenuContext, menuReducuer } from ".."

export const MenuContextProvider = ({ children }) => {
	const [isOpenMenu, setMenuState] = useState(false)
	const [{ isOpen }, dispatch] = useReducer(menuReducuer, {
		isOpen: isOpenMenu,
	})

	const handleMenu = () => dispatch({ type: "turnMenu" })
	const closeMenu = () => dispatch({ type: "closeMenu" })

	useEffect(() => {
		setMenuState(isOpen)
	}, [isOpen])

	return (
		<MenuContext.Provider
			value={{
				handleMenu,
				closeMenu,
				isOpen,
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}
