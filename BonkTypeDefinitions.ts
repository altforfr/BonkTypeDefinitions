export enum team {
    Unknown = -1, //Why can team ever be -1 possibly set by a error fallback??
    Spectator = 0,
    FFA = 1,
    Red = 2,
    Blue = 3,
    Green = 4,
    Yellow = 5,
}

export interface playerInfo {
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
    * - On a football game, there are up to 4 items, with each one corresponding to a specific team,
    *   in the following order: 0 = unused in football, 1 = unused in football, 2 = Red, 3 = Blue.
    *   For example: scores[2] would be Team Red's amount of wins.
    *   And another example: scores[1] would be no teams's amount of wins as its unused.
    */
    scores: number[]
    /**
     * The Goal Height
     */
    goalHeight: number
    borderThickness: number
    borderThicknessXInner: number
    borderThicknessYInner: number
    /**
     * Likely stands for "pixels per meter". It determines the size of the map: bigger ppm, smaller map.
     * 
     * Despite the name, a ppm of 1 will not make every meter a screen pixel wide,
     * instead it will make them around 1.5 pixels wide due to an internal parameter called
     * "scale ratio" that assures an optimal resolution according to the client's display size. 
     */
    ppm: number
    /**
     * Likely stands for "last scored current round".
     * 
     * - On a football game, it indicates the team that just won the round: 0 = red, 1 = blue, 2 = green, 3 = yellow.
     * - However obviously only Red (0) and Blue (1) are the only used values in football
     * - When set to -1 it indicates a draw.
     */
    lscr: number
    seed: number
    /**
    * Stands for "no interpolation"
    * Setting this value to true will make the game not interpolate the player's movement until the next step. Useful for teleporting players without visible middle frames.
    */
    ni: boolean
    /**
     * Stands for "sounds this step"
     */
    sts: []
    /**
     * Array containing info about players
     */
    players: playerInfo[]
    /**
     * Stands for "frames to end"
     * 
     * It's a timer number that indicates how many steps are left until the round ends and the world gets reset.
     * 
     * When fte is greater than -1, a win screen appears and it starts counting down until it reaches 0,
     * and the round ends.
     * 
     * When fte equals -1, the timer is inactive: nothing happens.
     */
    fte: number
    /**
     * stands for "frames to unfreeze".
     * 
     * It's a timer number that indicates how many steps are left until the world unfreezes and the players can start moving.
     * 
     * On the first round, the name and author of the map will appear in a splash screen during this period.
     * 
     * On every other round, a "Game starts in" countdown will appear, showing the amount of seconds left until the timer is over.
     * 
     * When the timer reaches -1, it stops and the world unfreezes.
     */
    ftu: number
    discs: []
}
