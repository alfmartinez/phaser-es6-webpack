/* globals __DEV__ */
import {State} from 'phaser-ce'
import SceneFactory from '../scenes/SceneBuilder';
import SceneData from '../data/SceneData';
import Character from '../sprites/Character';
import Mob from '../sprites/Mob';
import {PlayerData} from "../data/PlayerData";
import {ChallengeData} from "../data/ChallengeData";

declare var __DEV__: boolean;

export default class extends State {

    scene: SceneData;

    init(playerData: PlayerData, challengeData: ChallengeData) {

        const sceneMaker = new SceneFactory(this.game, this.world);
        this.scene = sceneMaker.create(playerData, challengeData);

    }

    preload() {}

    create() {
        console.log('Set background', this.scene.location)
        this.game.add.image(0,0,this.scene.location);
        this.scene.team.forEach((item: Character) => this.game.add.existing(item));
        this.scene.opponents.forEach((item: Mob) => this.game.add.existing(item));

    }

    render() {
        if (__DEV__) {
            this.scene.team.forEach((item: Character, i) =>
                this.game.debug.spriteInfo(item, 32, 32 + 100 * i)
            )

            this.scene.opponents.forEach((item: Mob, i) =>
                this.game.debug.spriteInfo(item, 32, 64 + 100 * (i+2))
            )
        }
    }
}
