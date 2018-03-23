function Sprite(url){
    
    this.img = new Image();
    this.img.src = url;
    this.img.addEventListener("load", ()=>{
        
        this.anchor.x = 0;
        this.anchor.y = (this.img.height > 10)? 10 : 0;
    });
    
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.scale = 2.5;
    this.anchor = {x:0, y:0};
    
    this.draw = function(gfx){
        gfx.translate(this.x, this.y);
        gfx.rotate(0);
        gfx.scale(this.scale, this.scale);
        gfx.drawImage(this.img, -this.anchor.x, -this.anchor.y);
        gfx.resetTransform();
    };
} 