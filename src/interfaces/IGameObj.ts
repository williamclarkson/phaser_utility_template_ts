/**
 * allows us to pass a sprite,text or image
 * as an IGameObj
 */
export interface IGameObj
{
    visible:boolean;
    alpha:number;
    displayWidth:number;
    displayHeight:number;
    scaleX:number;
    scaleY:number;
    x:number;
    y:number;
}