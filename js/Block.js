function Block(){
    this.x = 0;
    this.y = 0;
    this.w = 500;
    this.h = 10;
    this.init = function(x, y){
        this.x = x;
        this.y = y;
    }
    this.update = function(dt){
        
    }
    this.draw = function(gfx){
        gfx.fillStyle = "#000";
        gfx.translate(this.x - window.screenX, this.y - window.screenY);
        gfx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
        gfx.resetTransform();
        
    }
    this.replicate = function(other){
        this.x = other.x;
        this.y = other.y;
        this.w = other.w;
        this.h = other.h;
    }
}