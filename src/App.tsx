import React, { Component } from 'react';
import routers from '@/route/index';
import { Route, Switch } from 'react-router-dom';
import AsyncComponent from '@/components/AsyncComponent'
class App extends Component {
	render() {
		return (
			<div>
				<Switch>
				{routers.map((route:any, i:number) => (
					<Route
						key={i}
						exact={route?.exact}
						render={(props) => (
							<div>
								<AsyncComponent {...props} page={route.page} />
							</div>
						)}
					/>
				))}
			</Switch>
			</div>
		)
	}
}
export default App;