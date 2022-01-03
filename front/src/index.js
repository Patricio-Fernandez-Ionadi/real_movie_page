import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { MovieApp } from "./MovieApp"

ReactDOM.render(
	<BrowserRouter>
		<MovieApp />
	</BrowserRouter>,
	document.getElementById("root")
)
