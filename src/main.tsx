import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from "mobx-react"
import { Route, Router } from 'react-router-dom';
import App from './App';
import Store from './store';
import { createBrowserHistory } from 'history';
render(
	<Provider {...new Store()}>
		<Router history={createBrowserHistory()}>
			<Route >
				<App />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)