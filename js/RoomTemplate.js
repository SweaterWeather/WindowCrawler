//This associative array stores ALL rooms to be loaded.  It is VITAL that you add new rooms to this array with some kind of unique keycode.  Room keycodes MUST be unique, even if the room layouts are identical.
const roomTemplates = {};

roomTemplates["TRC1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRU1", "TRU1", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "icbl", "trch", "icbl", "icbl", "trch", "icbl", "    ", "wall"],
        ["wall", "    ", "trch", "    ", "    ", "    ", "    ", "trch", "    ", "wall"],
        ["TRL1", "    ", "icbl", "    ", "    ", "tchl", "    ", "icbl", "    ", "TRR1"],
        ["TRL1", "    ", "icbl", "    ", "    ", "    ", "    ", "icbl", "    ", "TRR1"],
        ["wall", "    ", "trch", "    ", "    ", "    ", "    ", "trch", "    ", "wall"],
        ["wall", "    ", "icbl", "trch", "icbl", "icbl", "trch", "icbl", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRD1", "TRD1", "wall", "wall", "wall", "wall"]
    ],
    dL: "TRL1",
    dR: "TRR1",
    dU: "TRU1",
    dD: "TRD1"
};
roomTemplates["TRU1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRU2", "TRU2", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRC1", "TRC1", "wall", "wall", "wall", "wall"]
    ],
    dU: "TRU2",
    dD: "TRC1"
};
roomTemplates["TRU2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "TRU1", "TRU1", "wall", "wall", "wall", "wall"]
    ],
    dD: "TRU1"
};
roomTemplates["TRD1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRC1", "TRC1", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "TRD2", "TRD2", "wall", "wall", "wall", "wall"]
    ],
    dU: "TRC1",
    dD: "TRD2"
};
roomTemplates["TRD2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRD1", "TRD1", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "wall", "    ", "    ", "    ", "    ", "    ", "    ", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ],
    dU: "TRD1"
};
roomTemplates["TRL1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRL2", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRC1"],
        ["TRL2", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRC1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ],
    dL: "TRL2",
    dR: "TRC1"
};
roomTemplates["TRL2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRL1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRL1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ],
    dR: "TRL1"
};
roomTemplates["TRR1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRC1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRR2"],
        ["TRC1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRR2"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ],
    dL: "TRC1",
    dR: "TRR2"
};
roomTemplates["TRR2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "wall", "wall", "wall", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRR1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRR1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ],
    dL: "TRR1"
};
