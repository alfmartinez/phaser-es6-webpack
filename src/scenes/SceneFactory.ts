import {Game, World} from 'phaser-ce'
import Mushroom from "../sprites/Mushroom";

interface Scene {
    team: any[]
}

interface PlayerData {

}

export default class SceneFactory {

    game: Game;
    world: World;

    constructor(game: Game, world: World) {
        this.game = game;
        this.world = world;
    }

    create(data: PlayerData): Scene {
        const mushroom = new Mushroom({
            game: this.game,
            x: this.world.centerX,
            y: this.world.centerY,
            asset: 'mushroom'
        });

        const mushroom2 = new Mushroom({
            game: this.game,
            x: this.world.centerX+64,
            y: this.world.centerY,
            asset: 'mushroom'
        });

        return {
            team: [mushroom, mushroom2]
        };
    }
}