import React from 'react';
import styled from 'styled-components';
import Natural from '@/img/jpg/natural.jpg'
const Title = styled.h1`
	color:white;
	font-size:20px;
	background-color:red;
	padding:0;
	margin:0;
`;
const Img = styled.img`
width:100%;
`;
class Home extends React.Component {
	render() {
		return (
			<>
				<Title>
					hello world
				</Title>
				<Img src={Natural} alt="" />
			</>
		)
	}
}
export default Home;