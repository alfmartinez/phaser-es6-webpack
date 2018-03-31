export interface CharacterData {
    name: string,
    asset: string,
    initiative: number
}

export interface PlayerData {
    team: CharacterData[]
}