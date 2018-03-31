import * as Phaser from 'phaser-ce'
import {centerGameObjects} from '../utils'

export default class extends Phaser.State {

    loaderBg: Phaser.Sprite;
    loaderBar: Phaser.Sprite;

    init() {}

    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
        centerGameObjects([this.loaderBg, this.loaderBar])

        this.load.setPreloadSprite(this.loaderBar)
        //
        // load your assets
        //
        this.load.image('mushroom', 'assets/images/mushroom2.png')
        this.load.image('paris', 'assets/images/paris.png')
        this.load.image('amanite', 'assets/images/amanite.png')

        this.load.image('bg_sous-bois', 'assets/images/sous-bois.png')

    }

    create() {
        const playerData = {
            team: [{
                name: 'Lord Bollet',
                asset: 'paris'
            }]
        };

        const challengeData = {
            opponents: [{
                asset: 'amanite'
            }],
            location: 'bg_sous-bois'
        };

        this.state.start('Game', true, false, playerData, challengeData)
    }
}
