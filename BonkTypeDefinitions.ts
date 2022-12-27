//todo: move constants.js to here and implement eMode


export enum eMode {
    Arrows = "ar",
    DeathArrows = "ard",
    Classic = "b", //Also a """game engine"""
    Simple = "bs",
    Football = "f", //Also a """game engine"""
    Grapple = "sp",
    VTOL = "v",
}

export enum eTeam {
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
    team: eTeam
}


/**
* todo add info
*/

/**
 * maybe add diff discs for diff "engines / gamestates (would the type definitions work well?????????????)"?
*/
export interface disc {
    /**
     * Position x
    */
    x: number
    /**
     * Position y
    */
    y: number
    /**
     * Velocity X
    */
    xv: number
    /**
     * Velocity Y
    */
    yv: number
    /**
     * Spawn Position X
    */
    sx?: number
    /**
     * Spawn Position Y
    */
    sy?: number
    /**
     * Spawn Velocity X
    */
    sxv?: number
    /**
     * Spawn Velocity Y
    */
    syv?: number
    /**
     * stands for "angle"
    */
    a?: number 
    /**
     * Likely stands for "angular velocity"
    */
    av?: number
    /**
     *Stands for "action 1 ammo"
    */
    a1a?: number
    team?: eTeam
    /**
     *Stands for "action 1"
    */
    a1?: boolean
    /**
     *Stands for "draw strength"
    */
    ds?: number
    /**
     *Stands for "draw angle"
    */
    da?: number
    tcd?: number
    /**
    * Stands for "no interpolation"
    * Setting this value to true will make the game not interpolate the player's movement until the next step. Useful for teleporting players without visible middle frames.
    */
    ni?: boolean
    /**
     * Likely stands for "action 2"
    */
    a2?: boolean
    radius?: number
    swing?: swingState
    /**
     * Probably stands for "last hit time"
    */
    lht?: number
    /**
     * Likely stands for "last hit id"
    */
    lhid?: number
    kickReady?:boolean
}

export interface swingState {
    /**
     * Body?
    */
    b: number
    /**
     * Length
     */
    l: number
    /**
     * Point
    */
    p: vector2
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
    /**
    * Array that contains varied attributes for every disc currently alive.
     * 
     * Ordered by disc/player ID (discs[0] is disc with ID 0, discs[2] is disc with ID 2, etc.)
     * in football this usually only has the keys x,y,xv,yv,team,kickReady
    */
    discs: disc[]
}

/**
 * todo: add info and implement into codebase (which implementng is a pain)
 */
export interface map {

}

/**
 * todo: add info and implement into codebase (which implementng is a pain)
 */
export interface mapMetadata {
    /**
     * Map Author's username
     */
    a: string
}

/**
 * todo: add info and implement into codebase (which implementng is a pain)
 */
export interface gameSettings {
        map: map
        gt: number
        wl: any
        q: boolean
        tl: boolean
        tea: boolean
        ga: string
        mo: string
        bal: any[]
}
declare type vector2 = [x: number, y: number]
