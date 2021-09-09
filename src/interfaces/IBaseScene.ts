
//import Phaser from "phaser";
import { AlignGrid } from "../util/alignGrid";

export interface IBaseScene
{
    getW():number;
    getH():number;
    getScene():Phaser.Scene;
    getGrid():AlignGrid;
    makeGrid(r:number,c:number);
    ch:number;
    cw:number;
    cd:number;
    resetSize(w:number,h:number);
}
export default IBaseScene