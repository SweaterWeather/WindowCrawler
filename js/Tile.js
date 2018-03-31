//This is the template for objects that will be held in local space.
function Tile(){
    this.x = 0;
    this.y = 0;
    this.gridX = 0;
    this.gridY = 0;
    this.w = 25;
    this.h = 25;
    this.room = "";
    this.win = null;
    this.sprite = null;
    
    this.tileType = "tile"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    //this.adUP = "null"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    //this.adDOWN = "null"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    //this.adLEFT = "null"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    //this.adRIGHT = "null"; //tile(floor), door code(insert the name of the room this door leads to), or wall for now
    
    this.init = function(x, y, room){
        this.x = x;
        this.y = y;
        
        this.gridX = this.x / this.w;
        this.gridY = this.y / this.h;
        
        var adUP = "null";
        var adDOWN = "null";
        var adLEFT = "null";
        var adRIGHT = "null";
        var adUR = "null";
        var adUL = "null";
        var adDL = "null";
        var adDR = "null";
        
        var door = /^(wall|    )$/;
        
        if(game.scene.dungeon)this.tileType = roomTemplates[room].grid[this.gridY][this.gridX];
        if(game.scene.dungeon && this.gridY != 0)adUP = roomTemplates[room].grid[this.gridY - 1][this.gridX];
        if(game.scene.dungeon && this.gridY != 9)adDOWN = roomTemplates[room].grid[this.gridY + 1][this.gridX];
        if(game.scene.dungeon && this.gridX != 0)adLEFT = roomTemplates[room].grid[this.gridY][this.gridX - 1];
        if(game.scene.dungeon && this.gridX != 9)adRIGHT = roomTemplates[room].grid[this.gridY][this.gridX + 1];
        
        if(game.scene.dungeon && this.gridY != 0 && this.gridX != 0)adUL = roomTemplates[room].grid[this.gridY - 1][this.gridX - 1];
        if(game.scene.dungeon && this.gridY != 9 && this.gridX != 0)adDL = roomTemplates[room].grid[this.gridY + 1][this.gridX - 1];
        if(game.scene.dungeon && this.gridY != 0 && this.gridX != 9)adUR = roomTemplates[room].grid[this.gridY - 1][this.gridX + 1];
        if(game.scene.dungeon && this.gridY != 9 && this.gridX != 9)adDR = roomTemplates[room].grid[this.gridY + 1][this.gridX + 1];
        //console.log(this.tileType);
        
        switch(this.tileType){
            case "wall" :
                        //if wall corners:
                if(!adUP.match(door)) adUP = "wall";
                if(!adDOWN.match(door)) adDOWN = "wall";
                if(!adLEFT.match(door)) adLEFT = "wall";
                if(!adRIGHT.match(door)) adRIGHT = "wall";
                
                     if(adDR == "    " && adDOWN == "wall" && adRIGHT == "wall")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topLeft.png"); //inner-corners
                else if(adDL == "    " && adDOWN == "wall" && adLEFT == "wall")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topRight.png");
                else if(adUR == "    " && adUP == "wall" && adRIGHT == "wall")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomLeft.png");
                else if(adUL == "    " && adUP == "wall" && adLEFT == "wall")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomRight.png");
                else if(adDR == "    " && adDOWN == "    " && adRIGHT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topLeft-flip.png"); //outer-corners
                else if(adDL == "    " && adDOWN == "    " && adLEFT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-topRight-flip.png");
                else if(adUR == "    " && adUP == "    " && adRIGHT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomLeft-flip.png");
                else if(adUL == "    " && adUP == "    " && adLEFT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-corner-bottomRight-flip.png");
                else if(adUP == "wall" && adDOWN == "wall" && adRIGHT == "    ") this.sprite = new Sprite("../imgs/floor_layout/tile-wall-left.png"); //flat walls
                else if(adUP == "wall" && adDOWN == "wall" && adLEFT == "    ") this.sprite = new Sprite("../imgs/floor_layout/tile-wall-right.png");
                else if(adDOWN == "    " && adLEFT == "wall" && adRIGHT == "wall") this.sprite = new Sprite("../imgs/floor_layout/tile-wall-top.png");
                else if(adUP == "    " && adLEFT == "wall" && adRIGHT == "wall") this.sprite = new Sprite("../imgs/floor_layout/tile-wall-bottom.png");
                else if(adUP == "wall" && adLEFT == "wall" && adRIGHT == "wall" && adDOWN == "wall") this.sprite = new Sprite("../imgs/floor_layout/tile-wall-solid.png");
                else this.sprite = new Sprite("../imgs/player/player-test.png");
                break;
            case "    " :
                this.sprite = new Sprite("../imgs/floor_layout/tile-floor.png");
                break;
            case "null":
                break;
            default :
                //if entryway
                     if(!adDOWN.match(door) && adRIGHT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-leftUp.png");
                else if(!adUP.match(door) && adRIGHT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-leftDown.png");
                else if(!adDOWN.match(door) && adLEFT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-rightUp.png");
                else if(!adUP.match(door) && adLEFT == "    ")this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-rightDown.png");
                else if(adDOWN == "    " && !adLEFT.match(door))this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-upRight.png");
                else if(adDOWN == "    " && !adRIGHT.match(door))this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-upLeft.png");
                else if(adUP == "    " && !adLEFT.match(door))this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-downRight.png");
                else if(adUP == "    " && !adRIGHT.match(door))this.sprite = new Sprite("../imgs/floor_layout/tile-wall-entry-downLeft.png");
                else this.sprite = new Sprite("../imgs/player/player-test.png");
                break;
        } 
        
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        
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