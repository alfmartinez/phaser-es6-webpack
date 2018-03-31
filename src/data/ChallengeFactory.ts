import {ChallengeData} from "./ChallengeData";

export default class ChallengeFactory {
    static create(): ChallengeData {
        return {
            opponents: [{
                asset: 'amanite',
                initiative: 4
            },{
                asset: 'mushroom',
                initiative: 2
            }],
            location: 'bg_sous-bois'
        };
    }
}