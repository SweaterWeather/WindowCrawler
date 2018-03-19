//This is the template for objects that will be held in local space.
function Player(){
    this.x = 0;
    this.y = 0;
    this.gX = 0;
    this.gy = 0;
    this.w = 25;
    this.h = 50;
    this.currentRoom = "";
    this.color = "#000";
    this.win = null;
    this.init = function(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    };
    this.update = function(dt){
        
    };
    this.draw = function(gfx){
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