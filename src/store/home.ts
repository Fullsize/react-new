import {observable,action,runInAction } from "mobx";
class HomeStore {
	constructor(stores?:any){

	}
	@observable init:number=1;
}

export default HomeStore;