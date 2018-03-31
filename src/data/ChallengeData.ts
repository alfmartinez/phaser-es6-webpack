export interface MobData {
    asset: string,
    initiative: number
}

export interface ChallengeData {
    opponents: MobData[],
    location: string
}