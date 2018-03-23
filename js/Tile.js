//This is the template for objects that will be held in local space.
function Tile(){
    this.x = 0;
    this.y = 0;
    this.gridX = 0;
    this.gridY = 0;
    this.w = 25;
    this.h = 25;
    this.color = "#000";
    this.win = null;
    this.sprite = null;
    
    this.tileType = "tile"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    
    this.init = function(x, y, color){
        switch(this.tileType){
            case "wall" :
                if((x == 0 && y == 0) || (x == 90 && y == 0) || (x == 0 && y == 90) || (x == 90 && y == 90)){
                   this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner.png");
                    break; 
                }
                this.sprite = new Sprite("../imgs/floor_layout/tile-wall.png");
                break;
            case "    " :
                this.sprite = new Sprite("../imgs/floor_layout/tile-floor.png");
                break;
            default :
                this.sprite = new Sprite("../imgs/player/player-test.png");
                break;
        } 
        console.log(this.sprite);
        this.x = x;
        this.y = y;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.color = color;
    };
    this.update = function(dt){
        
    };
    this.draw = function(gfx){
        this.sprite.draw(gfx);
        
    };
    this.replicate = function(other){
        this.x = other.x;
        this.y = other.y;
        this.w = other.w;
        this.h = other.h;
    };
    this.setWindow = function(win){
        this.win = win;
    };
}