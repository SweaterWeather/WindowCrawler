function Room(name){
    
    var adLeft = null;
    var adRight = null;
    var adUp = null;
    var adDown = null;
    
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
        return this.grid[y][x];
    };
}