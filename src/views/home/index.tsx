import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
	color:white;
	font-size:20px;
	background-color:red;
`;
class Home extends React.Component {
	render() {
		return (
			<Title>
				hello world
			</Title>
		)
	}
}
export default Home;