import Character from "../sprites/Character";
import Mob from "../sprites/Mob";

export default interface SceneData {
    team: Character[],
    opponents: Mob[],
    location: string
}