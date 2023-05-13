import React from "react";
import RouterDirections from "./router/RouterDirections";
import axios from "axios";

export default function App() {
    axios.defaults.withCredentials = true;
	return (
		<div className="App">
			<RouterDirections />
		</div>
	);
}
