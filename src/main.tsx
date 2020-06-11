import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router-dom';
import App from './App'
import { createBrowserHistory } from 'history';
render(
	<Router history={createBrowserHistory()}>
		<Route >
			<App />
		</Route>
	</Router>,
	document.getElementById('root')
)