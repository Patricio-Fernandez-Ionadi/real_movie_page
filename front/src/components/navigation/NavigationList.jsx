import { makeStyles } from "@mui/styles"
import React from "react"

import { routes } from "../../constant"
import { useMenuContext } from "../../context"
import { NavigationLink } from "./NavigationLink"

const useStyles = makeStyles({
	listContainer: {
		display: "flex",
		flexDirection: " column",
		listStyle: "none",
		margin: 0,
		paddingTop: "10px",
	},
})

export const NavigationList = () => {
	const { closeMenu } = useMenuContext()
	const { listContainer } = useStyles()

	return (
		<ul onClick={closeMenu} className={listContainer}>
			<hr />
			{routes.map((_) => (
				<NavigationLink key={_.id} route={_} />
			))}
		</ul>
	)
}
