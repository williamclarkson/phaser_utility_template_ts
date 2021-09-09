import Align from "../util/align";
import { BaseScene } from "./BaseScene";

export class SceneMain extends BaseScene {
    constructor() {
        super("SceneMain");
    }
    preload() {
        this.load.image("face", "./assets/face.png");
    }
    create() {
        //call the create function in the base scene
        super.create();

        //create a grid for alignment
        this.makeGrid(11,11);

        //add an image to the canvas
        let face:Phaser.GameObjects.Image=this.add.image(0, 0, "face");

        //scale the face to 25% of the game's width
        Align.scaleToGameW(face,0.25,this);

        //show the align grid numbers
        this.grid.showNumbers();

        //place the face on square 60
        this.grid.placeAtIndex(60,face);
    }
}