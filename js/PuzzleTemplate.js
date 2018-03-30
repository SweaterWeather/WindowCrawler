const puzzTemplates = {};

puzzTemplates["TRC1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRU1", "TRU1", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "wall", "wall", "    ", "    ", "wall", "wall"],
        ["TRL1", "    ", "    ", "wall", "wall", "wall", "wall", "    ", "TRR1", "wall"],
        ["TRL1", "    ", "    ", "wall", "wall", "wall", "wall", "    ", "TRR1", "wall"],
        ["wall", "    ", "    ", "    ", "wall", "wall", "    ", "    ", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRD1", "TRD1", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRU1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRU2", "TRU2", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRC1", "TRC1", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRU2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRU1", "TRU1", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRD1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRC1", "TRC1", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "TRD2", "TRD2", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRD2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "TRD1", "TRD1", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRL1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRL2", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRC1"],
        ["TRL2", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRC1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRL2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRL1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRL1"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRR1"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRC1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRR2"],
        ["TRC1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "TRR2"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ]
};
puzzTemplates["TRR2"] = {
    grid: [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRR1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["TRR1", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ]
};
