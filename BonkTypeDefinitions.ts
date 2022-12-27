export enum team {
    Unknown = -1, //Why can team ever be -1 possibly set by a error fallback??
    Spectator = 0,
    FFA = 1,
    Red = 2,
    Blue = 3,
    Green = 4,
    Yellow = 5,
}

export interface player {
    /**
    * The Player ID of the player.
    */
    id: number
    /**
     * The Team ID of the player with the "ID" corresponding to a team
     */
    team: team
}

export interface footballGameState {
    /**
    *  Array containing the amount of wins for each team.
    * 
    * - On Every game, there are up to 4 items, with each one corresponding to a specific team,
    *   in the following order: 0 = unused in football, 1 = unused in football, 2 = Red, 3 = Blue.
    *   For example: scores[2] would be Team Red's amount of wins.
    *   And another example: scores[1] would be no teams's amount of wins as its unused.
    */
    scores: []
    goalHeight: number
    borderThickness: number
    borderThicknessXInner: number
    borderThicknessYInner: number
    ppm: number
    lscr: number
    seed: number
    ni: boolean
    sts: []
    players: player[]
    fte: number
    ftu: number
    discs: []
}
