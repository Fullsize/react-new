import React, { Component } from 'react';
import routers from '@/route';
import { Route, Switch } from 'react-router-dom';
import AsyncComponent from '@/components/AsyncComponent';
import Footer from '@/components/Footer';
import 'normalize.css';
import 'antd/dist/antd.css';
class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					{routers.map((route: any, i: number) => (
						<Route
							key={i}
							exact={route?.exact}
							render={(props) => (
								<div>
									<AsyncComponent {...props} page={route.page} />
									{route.showFooter&&<Footer />}
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