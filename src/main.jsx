import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { API_URL } from './_config';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.scss';

// axios.defaults.baseURL = `${API_URL}/api`; // FIXME

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
