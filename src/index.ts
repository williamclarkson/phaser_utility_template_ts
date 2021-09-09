//import Phaser = require("phaser");
import Phaser from 'phaser';
import { SceneMain } from "./scenes/SceneMain";
import { GM } from "./classes/GM";

let gm: GM = GM.getInstance();

let isMobile = navigator.userAgent.indexOf("Mobile");
let isTablet = navigator.userAgent.indexOf("Tablet");
let isIpad = navigator.userAgent.indexOf("iPad");

//set a default desktop size
let w = 480;
let h = 640;



//is our game on a tablet?
if (isTablet != -1 || isIpad != -1) {
    gm.isTablet = true;
    isMobile = 1;
}

//
//is our game on a phone?
//
if (isMobile != -1) {
    gm.isMobile = true;

}
//check if we are starting in portrait or landscape mode
if (w < h) {
    gm.isPort = true;
}
//
//take away the if statement to use full screen on desktop
//
if (gm.isMobile==true || gm.isTablet==true) {

    w = window.innerWidth;
    h = window.innerHeight;
}
const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    backgroundColor: 'cccccc',
    parent: 'phaser-game',
    scene: [SceneMain]
};

new Phaser.Game(config);