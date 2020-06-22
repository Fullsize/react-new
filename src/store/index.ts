import HomeStore from './home';
class Stores {
	[x: string]: any;
	constructor(){
		this.HomeStore=new HomeStore();
	}
}
export default Stores;