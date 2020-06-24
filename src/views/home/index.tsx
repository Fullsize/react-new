import React from 'react';
import { inject} from 'mobx-react';
import styled from 'styled-components';
import { Button } from 'antd';
import Natural from '@/img/jpg/natural.jpg';
const Title = styled.h1`
	color:white;
	font-size:20px;
	background-color:red;
	padding:0;
	margin:0;
	text-align:center;
`;
const Img = styled.img`
width:50%;
`;
interface Props {
	init: number;
}
function Home(props: Props) {
	return (
		<>
			<Title>hello,world</Title>
			<Img src={Natural} />
			{props.init}
		</>
	)
}
export default inject((stores: any) => ({
	init: stores.HomeStore.init
}))(Home)