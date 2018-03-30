//This is the template for objects that will be held in local space.
function Player(){
    this.x = 0;
    this.y = 0;
    this.gX = 0;
    this.gy = 0;
    this.w = 25;
    this.h = 50;
    this.speed = 100;
    this.grid = [];
    this.gridY = [];
    this.gridMoveRequestTile = "";
    this.isMoving = false;
    this.currentRoom = "";
    this.color = "#000";
    this.win = null;
    this.init = function(x, y, color){
        this.x = x;
        this.y = y;
        this.gX = x/25;
        this.gY = y/25;
        this.color = color;
        this.currentRoom = "TRC1";
        this.grid = roomTemplates[this.currentRoom].grid;
    };
    this.update = function(dt){
        if(this.isMoving == false) {
            switch(true) {
                case keyboard.isDown(keycode.w):
                    this.gY--;
                    if(this.checkMove()) {
                        this.gY++;
                    } else {
                        this.isMoving = true;
                    }
                    break;
                case keyboard.isDown(keycode.a):
                    this.gX--;
                    if(this.checkMove()) {
                        this.gX++;
                    } else {
                        this.isMoving = true;
                    }
                    break;
                case keyboard.isDown(keycode.s):
                    this.gY++;
                    if(this.checkMove()) {
                        this.gY--;
                    } else {
                        this.isMoving = true;
                    }
                    break;
                case keyboard.isDown(keycode.d):
                    this.gX++;
                    if(this.checkMove()) {
                        this.gX--;
                    } else {
                        this.isMoving = true;
                    }
                    break;
            }
        } else if(this.isMoving == true) {
            switch(true) {
                case (this.gX * 25) > this.x:
                    this.x += dt * this.speed;
                    if((this.gX * 25) <= this.x) {
                        this.x = this.gX * 25;
                        this.isMoving = false;
                    }
                    break;
                case (this.gX * 25) < this.x:
                    this.x -= dt * this.speed;
                    if((this.gX * 25) >= this.x) {
                        this.x = this.gX * 25;
                        this.isMoving = false;
                    }
                    break;
                case (this.gY * 25) > this.y:
                    this.y += dt * this.speed;
                    if((this.gY * 25) <= this.y) {
                        this.y = this.gY * 25;
                        this.isMoving = false;
                    }
                    break;
                case (this.gY * 25) < this.y:
                    this.y -= dt * this.speed;
                    if((this.gY * 25) >= this.y) {
                        this.y = this.gY * 25;
                        this.isMoving = false;
                    }
                    break;
            }
        }
    };
    /*
    checks to see if the player can move to the requested tile 
    if the requested tile can be moved to, return false, if not, return true
    */
    this.checkMove = function() {
        // updates the player with the current grid if it hasn't already
        this.grid = roomTemplates[this.currentRoom].grid;
        // makes sure this is a valid array slot
        if(this.grid[this.gY] == undefined) return true;
        // stores the Yposition's array in a variable
        this.gridY = this.grid[this.gY];
        // makes sure this is a valid array slot
        if(this.gridY[this.gX] == undefined) return true;
        // stores the stores the tile the player is trying to move to in a variable
        this.gridMoveRequestTile = this.gridY[this.gX];
        // checks to see if the requested tile can be moved into
        switch (this.gridMoveRequestTile) {
            case "    ":
                return false;
                break;
            case "wall":
                return true;
                break;
            case "trch":
                return true;
                break;
        };
        return false;
    };
    this.draw = function(gfx){
        if(this.win.name != this.currentRoom) return;
        gfx.fillStyle = this.color;
        gfx.translate(this.x, this.y);
        gfx.strokeStyle = '#000';
        gfx.fillRect(0, -25, this.w, this.h);
        gfx.strokeRect(0, -25, this.w, this.h);
        gfx.resetTransform();
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