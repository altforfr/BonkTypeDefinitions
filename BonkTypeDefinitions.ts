/**
* The different types of modes in bonk.io
*/
export enum eMode {
    Arrows = "ar",
    ArrowsDeath = "ard",
    Classic = "b", //Likely stands for "bonk" Also a """game engine"""
    Simple = "bs", //Likely stands for "bonk simple"
    Football = "f", //Also a """game engine"""
    Grapple = "sp", //Probably stands for "swing proximity"
    VTOL = "v",
}

/**
* The different types of team ids and what they correspond to in bonk.io
*/
export enum eTeam {
    Unknown = -1, //Why can team ever be -1?
    Spectator = 0,
    FFA = 1,
    Red = 2,
    Blue = 3,
    Green = 4,
    Yellow = 5,
}

/**
* The different types of projectiles currently in bonk.io 
* However currently there is only one that is:
* - "arrow"
*/
export enum eProjectileType {
    arrow = "arrow"
}

/**
* Enum for custom client  / mod not in bonk.io
*/
export enum ePermissionLevel {
    None,
    Info,
    Friendly,
    Toxic,
    Admin,
    All,
}

/**
* Contains info about the current roomInfo
*/
export interface roomInfo { //implemented?
    /**
    * Whether the room is hidden/unlisted 
    * 1 meaning the room is hidden/unlisted 
    * 0 meaning the room is visible/listed
    */
    hidden: 1 | 0;
    /**
    * The maximum level allowed for a player to be able to enter the room room
    */
    maxLevel: number;
    /**
    * The minimum level needed for a player to be able to enter the room room
    */
    minLevel: number;
    /**
    * The max amount of players that can enter the room
    */
    maxPlayers: number;
    /**
    * The room password
    */
    password: string;
    /**
    * The room name
    */
    roomName: string;
}

export interface playerInfo { //Likely real name is playerState
    /**
    * The Player ID of the player.
    */
    id: number;
    /**
    * The Team ID of the player with the "ID" corresponding to a team
    * 
    * see eTeam enum for team ids
    */
    team: eTeam;
}

export interface disc {
    /**
    * Position x
    */
    x: number;
    /**
    * Position y
    */
    y: number;
    /**
    * Velocity X
    */
    xv: number;
    /**
    * Velocity Y
    */
    yv: number;
    /**
    * Spawn Position X
    */
    sx?: number;
    /**
    * Spawn Position Y
    */
    sy?: number;
    /**
    * Spawn Velocity X
    */
    sxv?: number;
    /**
    * Spawn Velocity Y
    */
    syv?: number;
    /**
    * stands for "angle"
    */
    a?: number;
    /**
    * Likely stands for "angular velocity"
    */
    av?: number;
    /**
    *Stands for "action 1 ammo"
    */
    a1a?: number;
    team?: eTeam;
    /**
    *Stands for "action 1"
    */
    a1?: boolean;
    /**
    *Stands for "draw strength"
    */
    ds?: number;
    /**
    *Stands for "draw angle"
    */
    da?: number;
    /**
    * Likely unused
    */
    tcd?: number;
    /**
    * Stands for "no interpolation"
    * Setting this value to true will make the game not interpolate the player's movement until the next step. Useful for teleporting players without visible middle frames.
    */
    ni?: boolean;
    /**
    * Likely stands for "action 2"
    */
    a2?: boolean;
    radius?: number;
    swing?: swingState;
    /**
    * Probably stands for "last hit time"
    */
    lht?: number;
    /**
    * Likely stands for "last hit id"
    */
    lhid?: number;
    /**
    * Whether a player in football can kick the ball yet
    */
    kickReady?: boolean;
    extraVelX?: number;
    extraVelY?: number;
}

export interface swingState {
    /**
    * Body?
    */
    b: number;
    /**
    * Length
    */
    l: number;
    /**
    * Point
    */
    p: vector2;
}

export interface projectile {
    /**
    * Likely stands for "angle"
    * 
    * Angle in degrees of the arrow.
    */
    a: number;
    /**
    * Likely stands for "angular velocity"
    * 
    * Angular velocity of the arrow.
    */
    av: number;
    /**
    * The player id of the player who launched/shot this projectile
    */
    did: number;
    /**
    * Stands for "frames to end"
    * 
    * in a projectiles case its probably the timer that indicates how long until the arrow disappears / ends?
    */
    fte: number;
    /**
    * The Team ID of the player who launched/shot the projectile with the "ID" corresponding to a team
    * 
    * see eTeam enum for team ids
    */
    team: eProjectileType;
    /**
    * The projectile type 
    * 
    * only one I know of is "arrow"
    */
    type: string;
    /**
    * Position x
    */
    x: number;
    /**
    * Position y
    */
    y: number;
    /**
    * Velocity X
    */
    xv: number;
    /**
    * Velocity Y
    */
    yv: number;
    /**
    * Stands for "no interpolation"
    */
    ni?: boolean;
}

export interface footballGameState {
    /**
    *  Array containing the amount of wins for each team.
    *  This item does not have to be a number although the game always does set it with numbers
    * 
    * - On a football game, there are up to 4 items, with each one corresponding to a specific team,
    *   in the following order: 0 = unused in football, 1 = unused in football, 2 = Red, 3 = Blue.
    *   For example: scores[2] would be Team Red's amount of wins.
    *   And another example: scores[1] would be no teams's amount of wins as its unused.
    */
    scores: any[];
    /**
    * The Goal Height
    */
    goalHeight: number;
    borderThickness: number;
    borderThicknessXInner: number;
    borderThicknessYInner: number;
    /**
    * Likely stands for "pixels per meter". It determines the size of the map: bigger ppm, smaller map.
    * 
    * Despite the name, a ppm of 1 will not make every meter a screen pixel wide,
    * instead it will make them around 1.5 pixels wide due to an internal parameter called
    * "scale ratio" that assures an optimal resolution according to the client's display size. 
    */
    ppm: number;
    /**
    * Likely stands for "last scored current round".
    * 
    * - On a football game, it indicates the team that just won the round: 0 = red, 1 = blue, 2 = green, 3 = yellow.
    * - However obviously only Red (0) and Blue (1) are the only used values in football
    * - When set to -1 it indicates a draw.
    */
    lscr: number;
    seed: number;
    /**
    * Stands for "sounds this step"
    */
    sts: [] | null;
    /**
    * Stands for "no interpolation"
    * Setting this value to true will make the game not interpolate the player's movement until the next step. Useful for teleporting players without visible middle frames.
    */
    ni: boolean;
    /**
    * Array containing info about players
    */
    players: (playerInfo | null)[];
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
    fte: number;
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
    ftu: number;
    /**
    * Array that contains varied attributes for every disc currently alive.
    * 
    * Ordered by disc/player ID (discs[0] is disc with ID 0, discs[2] is disc with ID 2, etc.)
    * in football this usually only has the keys x,y,xv,yv,team,kickReady
    */
    discs: disc[];
}

//todo add spawns capzones / more info
export interface map {
    /**
     * Map version ex, flash or bonk2
     */
    v: number;
    s: mapSettings;
    m: mapMetadata;
    physics: physics;
    spawns: any;
    capZones: captureZone[];
}

export interface mapSettings {
    /** Corresponds to the "Respawn on death" option in the map editor. 
    * It specifies whether discs can respawn on death or not. 
    */
    re: boolean;
    /**
    * Likely stands for "no collision"
    * 
    * Corresponds to the "Players don't collide" option in the map editor. 
    * It specifies whether discs can collide with each other (false) or not (true).
    */
    nc: boolean;
    /** Corresponds to the "Complex physics" option in the map editor. 
    * For some reason, it's not a boolean, but a number:
    * - When pq == 1 << 1, complex physics are used.
    * - When pq != 1 << 1, normal physics are used. 
    */
    pq: number;
    /**
    * Probably stands for "grid dimension"
    * 
    * Map editor grid size. This property has no effect whatsoever on the game. 
    */
    gd: number;
    /** Corresponds to the "Players can fly" option in the map editor. 
    * It specifies whether discs can "fly" (like in fly maps) or not. 
    */
    fl: boolean;
}

export interface mapMetadata { //most are rarely optional
    /**
    * Likely stands for "author"
    * 
    * Map Author's username
    */
    a: string;
    /**
    *Likely stands for "name"
    * 
    * Map Name
    */
    n: string;
    /**
    * Likely stands for "database version"
    * 
    * Maps published in flash bonk.io will have dbv 1, while maps published in current bonk.io will have dbv 2.
    */
    dbv: number;
    /**
    * Likely stands for "database id"
    */
    dbid: number;
    /**
    * The "auth id"
    */
    authid?: number;
    date?: string;
    rxid?: number;
    /** 
    * Original map name. 
    * This is only present in edited maps. 
    * In completely original maps, it gets set to "" (an empty string). 
    */
    rxn: string;
    /** 
    * Original map author's username. 
    * This is only present in edited maps. 
    * In completely original maps, it gets set to "" (an empty string). 
    */
    rxa: string;
    /** Original database version 
     * (refer to `dbv`'s description). 
     * This is only present in edited maps. 
     * In completely original maps, it gets set to 1. 
    */
    rxdb: number;
    cr?: [];
    /**
    * Likely stands for "published"
    * 
    * This will tell you whether the map is published. 
    * when its set to true the map is published otherwise false
    */
    pub?: boolean;
    /** Recommended mode for this map.
     * see eMode enum for different types of modes
    */
    mo: string;
    /** 
    * Likely stands for "votes up"
    * 
    * The amount of upvotes the map received. 
    */
    vu?: number;
    /** 
    * Likely stands for "votes down"
    * 
    * The amount of downvotes the map received. 
    */
    vd?: number;
}

/**
 * Implement everything below fully into codebase
 */
//todo add info for joints
//search ["enableMotor"] = true to find info
export type joint = baseJoint & (revoluteJoint | distanceJoint | lPJJoint | lSJJoint)

export interface baseJoint {
    /**
    * The type of the joint
    */
    type: string;
    /**
    * Stands for "body b" (id)
    */
    bb: number;
    /**
    * Stands for "body a" (id)
    */
    ba: number;
    /**
    * Probably stands for drawing
    * 
    * contains extra info about the joint for drawing
    */
    d: {
        /**
         * Probably stands for "begin fill"
         */
        bf?: number;
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
        dl?: boolean;
    }
}

export interface revoluteJoint {
    /**
    * The type of the joint
    */
    type: "rv";
    /**
    * Probably stands for drawing
    * 
    * contains extra info about the joint for drawing
    */
    d: {
        la: any;
        ua: any;
        mmt: any;
        ms: any;
        el: any;
        em: any;
        cc: any;
        bf: any;
        dl: any;
    },
    ba: number;
    bb: number;
    aa: vector2
}

export interface distanceJoint {
    /**
    * The type of the joint
    */
    type: "d";
    /**
    * Probably stands for drawing
    * 
    * contains extra info about the joint for drawing
    */
    d: {
        fh: any;
        dr: any;
        cc: any;
        bf: any;
        dl: any
    };
    ba: number;
    bb: number;
    aa: vector2;
    ab: vector2;
}

export interface lPJJoint { //name could be legacyPathJoint
    /**
    * The type of the joint
    */
    type: "lpj";
    /**
    * Probably stands for drawing
    * 
    * contains extra info about the joint for drawing
    */
    d: {
        cc: any;
        bf: any;
        dl: any;
    };
    ba: number;
    bb: number;
    pax: any;
    pay: any;
    pa: any;
    pf: any;
    pl: any;
    pu: any;
    plen: any;
    pms: any;
}

export interface lSJJoint { //name could be legacySpringJoint
    /**
    * The type of the joint
    */
    type: "lpj";
    /**
    * Probably stands for drawing
    * 
    * contains extra info about the joint for drawing
    */
    d: {
        cc: any;
        bf: any;
        dl: any;
    };
    ba: any;
    bb: any;
    sax: any;
    say: any;
    sf: any;
    slen: any;
}

export interface physics {
    brodies: any;
    bro: any;
    fixtures: any;
    joints: (joint|undefined)[];
    /**
    * Likely stands for "pixels per meter". It determines the size of the map: bigger ppm, smaller map.
    * 
    * Despite the name, a ppm of 1 will not make every meter a screen pixel wide,
    * instead it will make them around 1.5 pixels wide due to an internal parameter called
    * "scale ratio" that assures an optimal resolution according to the client's display size. 
    */
    ppm: number;
    shapes: any;
}

export interface captureZone {
    /**
    * Stands for "name"
    * 
    * The name of the capture zone
    */
    n: string;
    ty: number;
    /**
    * Likely stands for "length"
    * 
    * Capture Length (seconds in map form, frames in physics interface form)
    */
    l: number;
    /**
    * Likely Stands for "index"
    * 
    * The fixture index
    */
    i: number;
    /**
     * Final countdown -- Jumps to 20 upon capture, decreases by one per frame, on zero, win is executed.
     */
    f: number;
    /**
     * Likely stands for "owner"
     * 
     * The player id of the owner (after capture)
     */
    o?:number;
    /**
     * Likely stands for "owner team"
     * 
     * Owner eTeam id (after capture)
     */
    ot?:(eTeam|undefined);
    /**
    * Likely stands for "power"
    * 
    * The Power / Capture completion
    */
    p?:number;
}

export interface gameSettings {
    /**
    * The map data
    */
    map?: map;
    gt?: number;
    /**
    * Likely Stands for "win / loses"
    * 
    * Amount of rounds to win.
    */
    wl: any;
    /**
    * Likely stands for "quickplay"
    * 
    * Whether "quickplay" is enabled
    */
    q?: boolean;
    /**
    * Likely stands for "teamlock"
    * 
    * true if teams are locked, otherwise false.
    */
    tl: boolean;
    /**
    * true if teams are on, otherwise false.
    */
    tea: boolean;
    /**
    * Likely stands for "game"
    * 
    * The "game engine" currently selected. Which controls how to draw and which classes to use.
    * 
    * The options are: 
    * - "f" for football
     * - "b" for bonk / classic
    */
    ga?: string;
    /**
    * Likely stands for "mode"
    * The game-mode currently selected.
    * 
    * see eMode enum for different types of modes
    */
    mo: string;
    /**
    * Likely stands for "balance"
    * 
    * Array that contains the balance (nerf/buff) of each player. Ordered by player ID.
    */
    bal: any[];
}

declare type vector2 = [x: number, y: number];
declare type vector3 = [x: number, y: number, z: number];
