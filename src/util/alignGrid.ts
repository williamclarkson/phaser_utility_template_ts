import { GameObjects } from "phaser";
import { PosVo } from "../dataObjs/PosVo";
import IBaseScene from "../interfaces/IBaseScene";
import { IGameObj } from "../interfaces/IGameObj";

/*jshint esversion: 6 */
export class AlignGrid {
  private rows: number = 0;
  private cols: number = 0;
  public cw: number = 0;
  public ch: number = 0;
  public cd: number = 0;
  private scene: IBaseScene;
  private graphics!: Phaser.GameObjects.Graphics;
  private width: number;
  private height: number;
  private rscene: Phaser.Scene;
  private numberArray:GameObjects.Text[]=[];
  
  constructor(
    scene: IBaseScene,
    cols: number = 11,
    rows: number = 11,
    width: number = -1,
    height: number = -1
  ) {
    if (height === -1) {
      height = scene.getH();
    }
    if (width === -1) {
      width = scene.getW();
    }
    this.rows = rows;
    this.cols = cols;
    this.scene = scene;

    //cell width
    this.cw = width / this.cols;
    //cell height
    this.ch = height / this.rows;

    //d = √(l² + w²)
    this.cd = Math.sqrt(this.cw * this.cw + this.ch * this.ch);

    this.height = height;
    this.width = width;
    this.rscene = this.scene.getScene();

  }

  show() {

    this.graphics = this.scene.getScene().add.graphics();
    this.graphics.lineStyle(2, 0xff0000, 0.5);

    for (let i = 0; i < this.width; i += this.cw) {
      this.graphics.moveTo(i, 0);
      this.graphics.lineTo(i, this.height);
    }

    for (let i = 0; i < this.height; i += this.ch) {
      this.graphics.moveTo(0, i);
      this.graphics.lineTo(this.width, i);
    }

    this.graphics.strokePath();
  }
  placeAt(xx: number, yy: number, obj: IGameObj) {
    //calc position based upon the cellwidth and cellheight
    let x2 = this.cw * xx + this.cw / 2;
    let y2 = this.ch * yy + this.ch / 2;

    obj.x = x2;
    obj.y = y2;
  }
  placeAt2(xx: number, yy: number, obj: IGameObj) {
    let x2 = this.cw * (xx - 1) + this.cw;
    let y2 = this.ch * (yy - 1) + this.ch;

    obj.x = x2;
    obj.y = y2;
  }
  placeAtIndex(index: number, obj: IGameObj, useCenter = true) {
    let yy = Math.floor(index / this.cols);
    let xx = index - yy * this.cols;
    if (useCenter === true) {
      this.placeAt(xx, yy, obj);
    } else {
      this.placeAt2(xx, yy, obj);
    }
  }
  showNumbers() {
    this.show();
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let numText = this.scene
          .getScene()
          .add.text(0, 0, count.toString(), { color: "#ff0000" });
        numText.setOrigin(0.5, 0.5);
        this.numberArray.push(numText);
        this.placeAtIndex(count, numText);
        count++;
      }
    }
  }
  showPos() {
    this.show();
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let numText = this.scene
          .getScene()
          .add.text(0, 0, j + "\n" + i, { color: "#ff0000" });
        numText.setOrigin(0.5, 0.5);
        this.numberArray.push(numText);
        this.placeAtIndex(count, numText);

        count++;
      }
    }
  }
  findNearestIndex(xx: number, yy: number) {
    let row = Math.floor(yy / this.ch);
    let col = Math.floor(xx / this.cw);
    let index = row * this.cols + col;
    return index;
  }
  findNearestGridXY(xx: number, yy: number) {
    let row = Math.floor(yy / this.ch);
    let col = Math.floor(xx / this.cw);
    return {
      x: col,
      y: row,
    };
  }
  hide()
  {
    if (this.graphics)
    {
      this.graphics.clear();
    }
   
    this.numberArray.forEach((t:Phaser.GameObjects.Text)=>{t.destroy()});
  }
  getPosByXY(xx: number, yy: number) {
    let index = this.findNearestIndex(xx, yy);
    return this.getPosByIndex(index);
  }
  getRealXY(xx: number, yy: number) {
    let x1: number = xx * this.cw;
    let y1: number = yy * this.ch;
    return new PosVo(x1, y1);
  }
  getRealMiddleBotton(xx:number,yy:number)
  {
    let x1: number = (xx * this.cw)+this.cw/2;
    let y1: number = (yy + 1) * this.ch;
    y1+=this.ch;
    return new PosVo(x1, y1);
  }
  getRealBottom(xx: number, yy: number) {
    let x1: number = xx * this.cw;
    let y1: number = (yy + 1) * this.ch;
    y1+=this.ch;
    return new PosVo(x1, y1);
  }
  getPosByIndex(index: number) {
    let yy = Math.floor(index / this.cols);
    let xx = index - yy * this.cols;
    let x2 = this.cw * xx + this.cw / 2;
    let y2 = this.ch * yy + this.ch / 2;
    return new PosVo(x2, y2);
  }
}
