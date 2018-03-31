import {Game, World} from 'phaser-ce'
import {PlayerData, CharacterData} from '../data/PlayerData';
import SceneData from "../data/SceneData";
import {ChallengeData, MobData} from "../data/ChallengeData";
import Character from "../sprites/Character";
import Mob from "../sprites/Mob";

export default class SceneBuilder {

    game: Game;
    world: World;

    constructor(game: Game, world: World) {
        this.game = game;
        this.world = world;
    }

    create(data: PlayerData, challenge: ChallengeData): SceneData {

        const team = data.team.map((characterData: CharacterData, i) => new Character({
            game: this.game,
            x: 48+i*64,
            y: this.world.centerY,
            asset: characterData.asset
        }));

        const opponents = challenge.opponents.map((mobData: MobData, i) => new Mob({
            game: this.game,
            x: 720-i*64,
            y: this.world.centerY,
            asset: mobData.asset
        }))

        return {
            team,
            opponents
        };
    }
}