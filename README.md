# phaser_utility_template_ts

This is a Typscript version of the Phaser Utility Template

It adds a few extra scaling features for using Phaser on Mobile devices

## setting up

### Clone the directory
`https://github.com/williamclarkson/phaser_utility_template_ts`

### install the dependecies

`npm install`

### run the game

`npm start`

### build the game

`npm run-script build`

# Classes

## BaseScene

A class that extends Phaser.Scene

This adds a few extra properties to the scene

-gw game width
-gh game height
-cw cell width of the alignGrid
-ch cell height of the alignGrid
-cd diagonal cell distance of the alignGrid

### usage

extend your scene with the BaseScene class istead of Phaser.Scene
and call super.create(); in your create function

```export class SceneMain extends BaseScene {
    constructor() {
        super("SceneMain");
    }

    create()
    {
        super.create();
    }
}
```

## AlignGrid

Creates a grid that will allow positioning by percentage

### usage

```this.grid = new AlignGrid(scene, number_of_cols, number_of_rows);
this.grid.show();
this.grid.placeAt(col,row,myImage);
```

### alterantive usage 

```this.grid = new AlignGrid(scene, number_of_cols, number_of_rows);
//numbers the cells from 0-number of cells
this.grid.showNumbers();
this.grid.placeAtIndex(25,myImage);```

### alternative usage 2
When using the baseScene you can call:

```this.makeGrid(11,11);
this.grid.placeAt(5,5,myImage);
```

## Align

Used for centering and scaling game objects

### center an image
`Align.center(IBaseScene,myImage);`

### scale an image
`Align.scaleToGameWidth(myImage,0.25,IBaseScene);`

## interfaces
There are a couple of interaces referenced in the code

IBaseScene - used for Scenes that extendsd BaseScene
IGameObj - used for Sprites, Images, Container or other Game Objects