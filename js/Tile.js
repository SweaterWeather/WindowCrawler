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
        this.x = x;
        this.y = y;
        
        this.gridX = this.x / this.w;
        this.gridY = this.y / this.h;
        
        switch(this.tileType){
            case "wall" :
                //if wall corners:
                if((this.gridX == 0 && this.gridY == 0)){
                   this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topLeft.png");
                    break; 
                } else if((this.gridX == 9 && this.gridY == 0)){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topRight.png");
                    break;   
                } else if((this.gridX == 0 && this.gridY == 9)){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomLeft.png");
                    break;
                } else if((this.gridX == 9 && this.gridY == 9)) {
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomRight.png");
                    break;
                //if solid wall:
                } else {
                    if(this.gridX == 0) {
                        this.sprite = new Sprite("../imgs/floor_layout/tile-wall-left.png");
                        break;
                    } else if(this.gridX == 9) {
                        this.sprite = new Sprite("../imgs/floor_layout/tile-wall-right.png");
                        break;
                    } else if(this.gridY == 0) {
                        this.sprite = new Sprite("../imgs/floor_layout/tile-wall-top.png");
                        break;
                    } else if(this.gridY == 9) {
                        this.sprite = new Sprite("../imgs/floor_layout/tile-wall-bottom.png");
                        break;
                    }
                }
            case "    " :
                this.sprite = new Sprite("../imgs/floor_layout/tile-floor.png");
                break;
            default :
                //if entryway
                if(this.gridX == 0 && this.gridY == 4){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-leftUp.png");
                    break;
                } else if(this.gridX == 0 && this.gridY == 5){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-leftDown.png");
                    break;
                } else if(this.gridX == 9 && this.gridY == 4){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-rightUp.png");
                    break;
                } else if(this.gridX == 9 && this.gridY == 5){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-rightDown.png");
                    break;
                } else if(this.gridX == 4 && this.gridY == 0){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-upLeft.png");
                    break;
                } else if(this.gridX == 5 && this.gridY == 0){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-upRight.png");
                    break;
                } else if(this.gridX == 4 && this.gridY == 9){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-downLeft.png");
                    break;
                } else if(this.gridX == 5 && this.gridY == 9){
                    this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-downRight.png");
                    break;
                } else {
                    this.sprite = new Sprite("../imgs/player/player-test.png");
                }
        } 
        
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