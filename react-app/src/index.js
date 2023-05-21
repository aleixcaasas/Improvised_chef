import './index.css';
import App from './App';
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Improvised Chef";
axios.defaults.withCredentials = true;
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);