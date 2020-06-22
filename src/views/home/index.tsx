import React from 'react';
import {inject,observer} from 'mobx-react';
import styled from 'styled-components';
import {Button} from 'antd';
import Natural from '@/img/jpg/natural.jpg';
const Title = styled.h1`
	color:white;
	font-size:20px;
	background-color:red;
	padding:0;
	margin:0;
`;
const Img = styled.img`
width:50%;
`;
interface Props{
	init:number;
}
@inject((stores:any)=>({
	init:stores.HomeStore.init
}))
@observer
class Home extends React.Component<Props>{
	render() {
		return (
			<>
				<Title>
					hello world
				</Title>
				<Img src={Natural} alt="" />
				<Button>123</Button>
				{this.props.init}
			</>
		)
	}
}
export default Home;