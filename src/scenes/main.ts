import { SceneNames, SceneManager } from "./scene-manager";
import { GameScene } from "./game-scene";
import { StartButton } from "../components/buttons/button-start";

export class MainScene extends GameScene {
    private _startButton:StartButton;
    constructor(){
        super(SceneNames.main);
        this._startButton=new StartButton();
        this.addChild(this._startButton);
        this._startButton.on('pointerup',()=>{
            SceneManager.instance.switch(SceneNames.game);
        })
    }

}