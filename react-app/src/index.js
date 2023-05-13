import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios"

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Improvised Chef";
axios.defaults.withCredentials = true;
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);