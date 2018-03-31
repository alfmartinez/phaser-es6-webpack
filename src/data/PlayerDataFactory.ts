import {PlayerData} from "./PlayerData";

export default class PlayerDataFactory {
    static createInitial(): PlayerData {
        return {
            team: [{
                name: 'Lord Bollet',
                asset: 'paris',
                initiative: 5
            }]
        };
    }
}