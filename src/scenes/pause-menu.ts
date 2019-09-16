import { SceneNames } from "./scene-manager";
import { GameScene } from "./game-scene";

export class PauseScene extends GameScene {
    constructor(){
        super(SceneNames.pause);
    }
}