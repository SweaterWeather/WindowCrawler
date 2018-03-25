//Any dungeons should be added to this associative array with unique keycodes.  To access them, set ScenePlay.currentDungeon equal to the keycode of this dungeon.
const dungeonTemplates = {};

dungeonTemplates["demoDungeon"] = {
    firstRoom: "TRC1",
    grid: [
        ["    ", "    ", "TRU2", "    ", "    "],
        ["    ", "    ", "TRU1", "    ", "    "],
        ["TRL2", "TRL1", "TRC1", "TRR1", "TRR2"],
        ["    ", "    ", "TRD1", "    ", "    "],
        ["    ", "    ", "TRD2", "    ", "    "],
    ]
};