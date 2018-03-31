/* globals __DEV__ */
import * as Phaser from 'phaser-ce'
import Mushroom from '../sprites/Mushroom'
import SceneFactory from '../scenes/SceneFactory';
import PlayerData from '../data/PlayerData';

declare var __DEV__: boolean;

export default class extends Phaser.State {

    team: Mushroom[];

    init(playerData: PlayerData) {
        const sceneMaker = new SceneFactory(this.game, this.world)
        const {team} = sceneMaker.create(playerData)
        this.team = team;
    }

    preload() {
    }

    create() {

        this.team.forEach(item => this.game.add.existing(item))

    }

    render() {
        if (__DEV__) {
            this.team.forEach((item, i) =>
                this.game.debug.spriteInfo(item, 32, 32 + 100 * i)
            )
        }
    }
}
