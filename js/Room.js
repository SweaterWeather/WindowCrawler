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
                
                var type = roomTemplates[this.name].grid[index][int];
                switch(type){
                    case 'wall':
                        color = '#900';
                        break;
                    case '    ':
                        color = '#090';
                        break;
                    default:
                        color = '#009';
                        break;
                }
                x.push(this.mb(int, index, color, type));
                int++;
            }
        });
    };
    this.mb = function(x, y, color, type){
        var b = new Tile();
        b.tileType = type;
        b.init(x * 25, y * 25, color);
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