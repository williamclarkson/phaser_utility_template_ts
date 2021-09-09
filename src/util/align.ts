import { IBaseScene } from "../interfaces/IBaseScene";
import { IGameObj } from "../interfaces/IGameObj";

/*jshint esversion: 6 */
export class Align {
	static scaleToGameW(obj:IGameObj, per:number, scene:IBaseScene) {
		
		let w:number=scene.getW();
		obj.displayWidth =  w* per;
		obj.scaleY = obj.scaleX;
	}
	static scaleToGameH(obj:IGameObj, per:number, scene:IBaseScene) {
		
		let h:number=scene.getH();
		obj.displayHeight =  h* per;
		obj.scaleX = obj.scaleY;
	}
	static centerH(obj:IGameObj, scene:IBaseScene) {
		obj.x = scene.getW() / 2 - obj.displayWidth / 2;
	}
	
	static centerV(obj:IGameObj, scene:IBaseScene) {
		obj.y = scene.getH()/ 2 - obj.displayHeight / 2;
	}
	static center2(obj:IGameObj, scene:IBaseScene) {
		obj.x = scene.getW() / 2 - obj.displayWidth / 2;
		obj.y = scene.getH()/ 2 - obj.displayHeight / 2;
	}
	static center(obj:IGameObj, scene:IBaseScene) {
		obj.x = scene.getW() / 2;
		obj.y = scene.getH()/ 2;
	}
	static getYPer(per:number, scene:IBaseScene) {
		return scene.getH()* per;
	}
	static getXPer(per:number, scene:IBaseScene) {
		return scene.getW() * per;
	}
	static centerToObj(obj1:IGameObj,obj2:IGameObj)
	{		
		obj1.x=obj2.displayWidth/2-obj1.displayWidth/2;
		obj1.y=obj2.displayHeight/2-obj1.displayHeight/2;
	}
}
export default Align;