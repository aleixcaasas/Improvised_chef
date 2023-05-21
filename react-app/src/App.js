import React from "react";
import axios from "axios";
import RouterDirections from "./router/RouterDirections";

export default function App() {
	axios.defaults.withCredentials = true;
	return (
		<div className="App">
			<RouterDirections />
		</div>
	);
}
