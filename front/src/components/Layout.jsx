import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
// import TrendingsSelect from "./TrendingsSelect"

const Layout = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	)
}
export default Layout
