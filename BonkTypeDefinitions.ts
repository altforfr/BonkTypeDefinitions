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
* Skin shape ids for avatar layers
*/
export enum eAvatarShape {
    Alien1,
    Alien2,
    Alien3,
    Alien4,
    Alien5,
    Alien6,
    Barbedwire1,
    Barbedwire2,
    Barbedwire3,
    Barbedwire4,
    Barbedwire5,
    Barbedwire6,
    Circle,
    Crescent,
    Cross1,
    Cross2,
    Cross3,
    Cross4,
    Cross5,
    Cross6,
    Cross7,
    Face1,
    Face10,
    Face11,
    Face12,
    Face13,
    Face14,
    Face15,
    Face16,
    Face17,
    Face18,
    Face2,
    Face19,
    Face20,
    Face21,
    Face3,
    Face4,
    Face5,
    Face6,
    Face7,
    Face8,
    Face9,
    Flames1,
    Flames10,
    Flames2,
    Flames3,
    Flames4,
    Flames5,
    Flames6,
    Flames7,
    Flames8,
    Flames9,
    Skull1,
    Cross,
    Star1,
    Triangle,
    Grungecircle,
    Grungeheart1,
    Grungeheart2,
    Grungeleaf1,
    Grungeleaf2,
    Grungeleaf3,
    Skull2,
    Shoeprint,
    Handprint,
    Fingerprint,
    Print2,
    Grungelines1,
    Grungelines2,
    Splat,
    Pentagon,
    Rectangle1,
    Triangletall1,
    Rectangle2,
    Rectangle3,
    Rectanglefat,
    Semicircle,
    Roundedrectangle,
    Moon,
    Triangleeven,
    Triangletall2,
    Splat1,
    Splat2,
    Splat3,
    Square,
    Star2,
    Radioactive1,
    World,
    Signal,
    Skullcross,
    Skull3,
    Exclamation,
    Electricity,
    Chain,
    Scope1,
    Scope2,
    Radioactive2,
    Biohazard,
    Fire1,
    Fire2,
    Oxidiser,
    Ball,
    Atomic,
    Freeze,
    Whisp1,
    Whisp2,
    Whisp3,
    Whisp4,
    Whisp5,
    Whisp6,
    Whisp7,
    Whisp8,
    Whisp9,
    Whisp10,
    Whisp11
}

export enum eBodyType {
    static = 's', // stationary = 's',
    kinematic = 's',
    dynamic = 'd',
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
    hidden: 1|0;
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

export interface lobbyPlayerInfo {
    /**
    * The Player ID of the player.
    */
    avatar: avatar;
    /**
    * Whether the player is a guest 
    */
    guest: boolean;
    level: number;
    ping: number;
    ready: boolean;
    /**
    * Whether the player is foccused on the tab 
    */
    tabbed: boolean;
    /**
    * The team the player is in (Team id)
    */
    team: eTeam;
    /**
    * The name of the player 
    */
    userName: string;
}

export interface discDeath {
    /**
    * Likely stands for "frames"
    * 
    * Frames till the player death? 
    */
    f: number;
    /**
    * The id of the "disc" that died 
    */
    i: number;
    /**
    * Unknown what this does, ranges from 1 to 4?
    * 
    * Gets set to "diedThisStep" within the code
    */
    m: number;
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
    * in a projectile's case its probably the timer that indicates how long until the arrow disappears / ends?
    */
    fte: number;
    /**
    * The Team ID of the player who launched/shot the projectile with the "ID" corresponding to a team
    * 
    * see eTeam enum for team ids
    */
    team: eTeam;
    /**
    * The projectile type 
    */
    type: eProjectileType;
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

export interface bonkGamestate {
    capZones: captureZone[];
    discDeaths: discDeath[];
    discs: disc[];
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
    * Likely stands for "last scored current round".
    * 
    * - On a Free For All game, it contains the ID of the player who just won the round.
    * - On a Teams game, it indicates the team that just won the round: 0 = red, 1 = blue, 2 = green, 3 = yellow.
    * - When set to -1 (both in FFA and Teams), it indicates a draw.
    */
    lscr: number;
    /**
    * Likely stands for "map metadata" 
    */
    mm: mapMetadata;
    /**
    * Likely stands for "map settings" 
    */
    ms: mapSettings;
    physics: physicsState;
    /**
    * Array containing info about players
    */
    players: (playerInfo|null)[];
    /**
    * Array that contains varied attributes for every projectile, such as their owner and position.
    * 
    * Ordered by projectile ID (projectile[0] is projectile with ID 0, projectile[2] is the projectile with ID 2, etc.)
    */
    projectiles: projectile[];
    /**
    * Likely stands for "round count". It indicates how many rounds have passed since the game started (when the host presses START).
    */
    rc: number;
    /**
    * Likely stands for "round length". It's the amount of steps that have happened since last round start.
    */
    rl: number;
    /**
    * Array containing the amount of wins for each player/team.
    * 
    * - On a Free For All game, these scores are ordered by player ID and each one of them corresponds
    *  public  to a player. For example: scores[10] would be player ID 10's amount of wins.
    * - On a Teams game, there are up to 4 items, each one corresponding to a specific team,
    *  public  in the following order: 0 = red, 1 = blue, 2 = green, 3 = yellow.
    *  public  For example: scores[2] would be Team Green's amount of wins.
    */
    scores: number[];
    seed: number;
    shk: dVector2;
    /**
    * Stands for "sounds this step"
    */
    sts: (soundsThisStep|number|undefined)[]|null;
    dontInterpolate?: boolean;
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
    sts: (soundsThisStep|number|undefined)[]|null;
    /**
    * Stands for "no interpolation"
    * Setting this value to true will make the game not interpolate the player's movement until the next step. Useful for teleporting players without visible middle frames.
    */
    ni: boolean;
    /**
    * Array containing info about players
    */
    players: (playerInfo|null)[];
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

/**
* Contains info about which keys are being pressed 
*/
export interface input {
    action: boolean;
    action2: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    up: boolean;
}

export interface soundsThisStep {
    i: any;
    v: number;
    p?: string;
    f: any;
}

export interface map {
    /**
    * Likely stands for "version" 
    * 
    * Map version ex, flash or bonk2
    */
    v: number;
    /**
    * Likely stands for "settings" 
    */
    s: mapSettings;
    /**
    * Likely stands for "metadata" 
    */
    m: mapMetadata;
    physics: physicsState;
    spawns: spawn[];
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
    /**
    * Likely stands for "credits"
    * 
    * Contains usernames 
    */
    cr?: string[];
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

export interface avatar {
    /**
    * The different "layers" of shapes on the skin
    * For a skin to be usable this must not be over 15 layers
    */
    layers: (avatarLayer|undefined)[];
    /**
    * Stands for "background colour"
    * 
    * The background colour of the skin
    */
    bc: number;
}

export interface avatarLayer { 
    /**
    * The shape id
    * 
    * Value minimum is 1 and maximum 115 otherwise it will be reverted back to 1
    */
    id: eAvatarShape;
    /**
    * The scale of the shape 
    * 
    * Value minimum is -9999 and maximum 9999 otherwise it will be reverted back to 0 
    */
    scale: number;
    /**
    * The angle of the shape in degrees 
    */
    angle: number;
    /**
    * x position of the shape 
    */
    x: number;
    /**
    * y position of the shape 
    */
    y: number;
    /**
    * Whether to flip the skin horizontally (x) 
    */
    flipX: boolean;
    /**
    * Whether to flip the skin vertically (y) 
    */
    flipY: number;
    /**
    * The shape colour
    * 
    * Value minimum is 0 and maximum 16777215 otherwise it will be reverted back to 0 
    */
    color: number;
}

export type joint = baseJoint & (revoluteJoint | distanceJoint | legacyPathJoint | legacySpringyJoint | pathJoint | softRodJoint | gearJoint);

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
        /**
        * Stands for "lower angle"
        */
        la: number;
        /**
        * Stands for "upper angle"
        */
        ua: number;
        /**
        * Stands for "max motor torque"
        */
        mmt: number;
        /**
        * Stands for "motor speed" 
        */
        ms: number;
        /**
        * Stands for "enable limit"
        */
        el: boolean;
        /**
        * Stands for "enable motor" 
        */
        em: boolean;
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
        /**
        * Probably stands for "begin fill"
        */
        bf: number;
        dl: boolean;
    };
    /**
    * Likely stands for "anchor a" or "attach a"  
    */
    aa: vector2;
    /**
    * Likely stands for "anchor b" or "attach b"  
    */
    ab?: vector2;
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
        /**
        * Likely Stands for "damping ratio"
        */
        dr: number;
        /**
        * Likely Stands for "frequency hz" 
        */
        fh: number;
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
        /**
        * Probably stands for "begin fill"
        */
        bf: number;
        dl: boolean;
    };
    /**
    * Likely stands for "anchor a" or "attach a"  
    */
    aa: vector2;
    /**
    * Likely stands for "anchor b" or "attach b"  
    */
    ab: vector2;
}

export interface legacyPathJoint {
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
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
        /**
        * Probably stands for "begin fill"
        */
        bf: number;
        dl: boolean;
    };
    /**
    * Probably stands for "path anchor x" or "path axis x"
    */
    pax: number;
    /**
    * Probably stands for "path anchor y" or "path axis y"
    */
    pay: number;
    /**
    * Stands for "path angle" 
    */
    pa: number;
    /**
    * Stands for "path force"
    */
    pf: number;
    pl: number;
    /**
    * Likely stands for "path upper"
    * 
    * This seems to be unused 
    */
    pu: number;
    /**
    * Likely Stands for "path length" but defined in the code as "path upper"
    */
    plen: number;
    /**
    * Stands for "path max speed" 
    */
    pms: number;
}

export interface legacySpringyJoint {
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
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
        /**
        * Probably stands for "begin fill"
        */
        bf: number;
        dl: boolean;
    };
    /**
    * Stands for "springy anchor x"
    */
    sax: number;
    /**
    * Stands for "springy anchor y"
    */
    say: number;
    /**
    * Stands for "springy force"
    */
    sf: number;
    /**
    * Stands for "springy length" but its defined in the code as "springy upper"
    */
    slen: number;
}

export interface pathJoint {
    /**
    * The type of the joint
    */
    type: "p";
    /**
    * Likely stands for "anchor a" or "attach a"  
    */
    aa: vector2;
    /**
    * Likely stands for "anchor b" or "attach b"  
    */
    ab: vector2;
    /**
    * Stands for "axis a" 
    */
    axa?: vector2;
    d: {
        /**
        * Stands for "upper translation"
        */
        ut: number;
        /**
        * Stands for "lower translation"
        */
        lt: number;
        /**
        * Stands for "max motor force"
        */
        mmf: number;
        /**
        * Stands for "motor speed"
        */
        ms: number;
        /**
        * Stands for "enable limit"
        */
        el?: boolean;
        /**
        * Stands for "enable motor"
        */
        em?: boolean;
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc?: boolean;
    }
    /**
    * Likely stands for "change side" 
    * 
    * Controls the side of the motor
    */
    cs?: number;
}

export interface softRodJoint {
    /**
    * The type of the joint
    */
    type: "d";
    /**
    * Likely stands for "anchor a" or "attach a"  
    */
    aa: vector2;
    /**
    * Likely stands for "anchor b" or "attach b"  
    */
    ab: vector2;
    /**
    * Stands for "length"
    */
    len?: number;
    d: {
        /**
        * Stands for "damping ratio"
        */
        dr: number;
        /**
        * Stands for "frequency hz" 
        */
        fh: number;
        /**
        * Stands for "collideConnected"
        * 
        * Whether the joint collides with the connected
        */
        cc: boolean;
    }
}

export interface gearJoint {
    /**
    * The type of the joint
    */
    type: "g";
    /**
    * Stands for "joint a" its defined in the code as joint 1
    */
    ja?: any;
    /**
    * Stands for "joint b" its defined in the code as joint 2
    */
    jb?: any;
    d: {
        /**
        * Stands for "ratio"
        */
        r: number;
        cc?: boolean;
    }
}

export type shape = baseShape & (boxShape | circleShape | polyShape | chainShape);

export interface baseShape { 
    /**
    * The shape "type" 
    */
    type: string;
    /**
    * Likely stands for "coordinates"
    * 
    * Contains the position of the shape 
    */
    c?: vector2;
}

export interface boxShape {
    type: "bx";
    /**
    * Likely stands for "width"
    * 
    * The shapes width 
    */
    w: number;
    /**
    * Likely stands for "height"
    * 
    * The shapes height 
    */
    h: number;
    /**
    * Probably stands for "angle" 
    */
    a: number;
    sk: boolean;
}

export interface circleShape {
    type: "ci";
    r: number;
    sk: boolean;
}

export interface polyShape {
    type: "po";
    v: [];
    /**
    * Probably stands for "scale" 
    */
    s: number;
    /**
    * Probably stands for "angle" 
    */
    a: number;
}

//getNewChainShape
export interface chainShape {
    type: "ch";
    v: [];
    s: number;
    /**
    * Probably stands for "angle" 
    */
    a: number;
    l: boolean;
    sk: boolean;
}


export interface fixture {
    sh: number;
    /**
    * The fixture name 
    */
    n: string;
    /**
    * Likely stands for "friction" 
    */
    fr: number;
    /**
    * Likely stands for "friction players" 
    */
    fp?: boolean;
    /**
    * Likely stands for "Restitution"
    * Controls the fixture's "Bounciness" 
    */
    re: number;
    /**
    * Likely stands for "density" 
    */
    de: number;
    f: number;
    /**
    * Likely stands for "death"
    * 
    * Controls whether the fixture is deathly / will kill you when you touch it 
    */
    d: boolean;
    /**
    * Likely stands for "no physics" 
    */
    np: boolean;
    /**
    * Likely stands for "no grapple" 
    */
    ng: boolean;
}

export interface physicsState {
    bodies: (body|undefined)[];
    bro: number[];
    fixtures: (fixture|undefined)[];
    joints: (joint|undefined)[];
    /**
    * Likely stands for "pixels per meter". It determines the size of the map: bigger ppm, smaller map.
    * 
    * Despite the name, a ppm of 1 will not make every meter a screen pixel wide,
    * instead it will make them around 1.5 pixels wide due to an internal parameter called
    * "scale ratio" that assures an optimal resolution according to the client's display size. 
    */
    ppm: number;
    shapes: (shape|undefined)[];
}

//      infO:             ["IsFixedRotation"]();
//add info for body
export interface body {
    /**
    * The body type 
    */
    type: eBodyType;
    /**
    * Stands for "name"
    * 
    * The body name
    */
    n: string;
    /**
    * Stands for "position"
    * 
    * The position of the body 
    */
    p: vector2;
    /**
    * Stands for "angle"
    */
    a: number;
    /**
    * Likely stands for "friction" 
    */
    fric: number;
    /**
    * Likely stands for "friction players" 
    */
    fricp: boolean;
    /**
    * Likely stands for "Restitution"
    * Controls the Body's "Bounciness" 
    */
    re: number;
    /**
    * Likely stands for "density" 
    */
    de: number;
    /**
    * Stands for "linear velocity"
    */
    lv: vector2;
    /**
    * Stands for "angular velocity" 
    */
    av: number;
    /**
    * Stands for "linear damping" 
    */
    ld: number;
    /**
    * Stands for "angular damping" 
    */
    ad: number;
    /**
    * Stands for "fixed rotation"
    * 
    * Whether rotation is fixed
    */
    fr: boolean;
    /**
    * Stands for "bullet"
    * 
    * Whether the body is a bullet"??
    */
    bu: boolean;
    /**
    * Likely stands for "constant force"
    */
    cf: {
        /**
        * How much Constant force in the x axis 
        */
        x: number;
        /**
        * How much Constant force in the y axis 
        */
        y: number;
        w: boolean;
        /**
        * Likely stands for "constant torque" 
        */
        ct: number;
    };
    fx: number[];
    /**
    * Probably stands for "filter collision" 
    */
    f_c: number;
    f_p: boolean;
    /**
    * Likely stands for "filter 1" 
    */
    f_1: boolean;
    /**
    * Likely stands for "filter 2" 
    */
    f_2: boolean;
    /**
    * Likely stands for "filter 3" 
    */
    f_3: boolean;
    /**
    * Likely stands for "filter 4" 
    */
    f_4: boolean;
    bg?: any; //Likely a boolean
}

export interface spawn {
    /**
    * The spawn name 
    */
    n: string;
    x: number;
    y: number;
    xv: number;
    yv: number;
    priority: number;
    r: boolean;
    f: boolean;
    b: boolean;
    gr?: boolean;
    ye?: boolean;
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
    o?: number;
    /**
    * Likely stands for "owner team"
    * 
    * Owner eTeam id (after capture)
    */
    ot?: (eTeam|undefined);
    /**
    * Likely stands for "power"
    * 
    * The Power / Capture completion
    */
    p?: number;
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
    wl: number;
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

/**
* not in real bonk from modded client 
* also not to be confused with "data" object
*/
export interface dataCustom {
    footballGamestate: footballGameState;
    bonkGamestate: bonkGamestate;
    d: any;
    map: map;
    lobby: {
        room: roomInfo;
        playerArray: lobbyPlayerInfo;
    }
    screen: vector2;
}

declare type vector2 = [number, number]; //x,y, don't add x: or y: as TSNamedTupleMember isnt supported
declare type vector3 = [number, number, number]; //x,y,z don't add x: or y: or z: as TSNamedTupleMember isnt supported
declare type dVector2 = {x:number, y:number};
declare type dVector3 = {x:number, y:number, z:number};
