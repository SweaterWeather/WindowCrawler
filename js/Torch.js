function Torch(){
    this.x = 0;
    this.y = 0;
    this.w = 25;
    this.h = 25;
    this.color = "#444240";
    this.win = null;
    this.lit = false;
    this.init = function(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    this.update = function(dt){
        
    }
    this.draw = function(gfx){
        gfx.fillStyle = this.color;
        gfx.translate(this.x - this.win.screenX, this.y - this.win.screenY);
        gfx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
        gfx.resetTransform();
        
    }
    this.replicate = function(other){
        this.x = other.x;
        this.y = other.y;
        this.w = other.w;
        this.h = other.h;
    }
    this.setWindow = function(win){
        this.win = win;
    }
    this.shouldLight = function(){
        
    }
}