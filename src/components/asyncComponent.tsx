import React from 'react';
import Loadable from 'react-loadable';

interface Props{
	page:string;
}
class MyComponent extends React.Component<Props> {
	render() {
		const LoadableBar = Loadable({
			loader: () => import(`../views/${this.props.page}`),
			loading: ()=>null,
		});
		return <LoadableBar {...this.props} />
	}
}

export default MyComponent;