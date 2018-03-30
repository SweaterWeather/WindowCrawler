function Room(name){
    
    this.adLeft = null;
    this.adRight = null;
    this.adUp = null;
    this.adDown = null;
    
    this.leftDoor = null;
    this.rightDoor = null;
    this.upDoor = null;
    this.downDoor = null;
    
    this.win = null;
    this.name = name;
    this.grid = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    this.init = function(value){
        this.grid.forEach((x, index) =>{
            var int = 0;
            while (int < 10){
                var color = '';
                
                
                x.push(this.mb(int, index));
                x[int].init(int * 25, index * 25, this.name);
                int++;
            }
        });
        
        if(roomTemplates[this.name].dL)this.leftDoor = roomTemplates[this.name].dL;
        if(roomTemplates[this.name].dR)this.rightDoor = roomTemplates[this.name].dR;
        if(roomTemplates[this.name].dU)this.upDoor = roomTemplates[this.name].dU;
        if(roomTemplates[this.name].dD)this.downDoor = roomTemplates[this.name].dD;
    };
    this.mb = function(x, y){
        var b = new Tile();
        return b;
    };    
    this.setWindow = function(win){
        this.win = win;
        this.grid.forEach((y) =>{
            y.forEach((x) =>{
                x.setWindow(win);
            });
        }); 
    };
    this.draw = function(gfx){
        this.grid.forEach((y) =>{
            y.forEach((x) =>{
                x.draw(gfx);
            });
        });        
    };
    this.update = function(dt){
        
    };
    this.getTile = function(x, y){
        return grid[y][x];
    };
}