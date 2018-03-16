const canvas = document.getElementById("myCanvas");
const gfx = canvas.getContext("2d");

const keycode = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
    left: 37,
    up:38,
    right:39,
    down:40,
    space:32,
    enter:13,
    escape:27
};

const keyboard = {
    keys:[],
    prev:[],
    isDown:function(keyCode){
        return this.keys[keyCode] || false; // if the value is undefined, it will return false instead...
    },
    onDown:function(keyCode){
        return (this.isDown(keyCode) && (this.prev[keyCode] || false) == false);
    },
    update:function(){
        this.prev = this.keys.slice(0); // copy the array
    },
    updateKey: function(keyCode, value){
        //console.log(keyCode + (value ? " down" : " up"));
        this.keys[keyCode] = value;
    },
    setup: function(){
        document.addEventListener("keydown", (e)=>this.updateKey(e.keyCode, true));
        document.addEventListener("keyup", (e)=>this.updateKey(e.keyCode, false));
    }
};

const mouse = {
    x: 0,
    y: 0,
    setup: function(){
        canvas.addEventListener("mousemove", (e)=>{
            this.x = e.offsetX;
            this.y = e.offsetY;
        });
    }
};

const game = {
    timePrev: 0,
    dt: 0,
    begin:function(){
        mouse.update();
        keyboard.setup();
        this.update(0);
    },
    calcDeltaTime:function(time){
        if(time === undefined) time = 0;
        this.dt = (time - this.timePrev) / 1000;
        this.timePrev = time;
    },
    update:function(time){
        this.calcDeltaTime(time);
        
        if(keyboard.onDown(keycode.w)){
            console.log("W pressed!");
        }
        
        keyboard.update();
        requestAnimationFrame((time) => this.update(time));
    }
};

function Sprite(url){
    
    this.img = new Image();
    this.img.src = url;
    this.img.addEventListener("load", ()=>{
        this.anchor.x = this.img.width/2;
        this.anchor.y = this.img.height/2;
    });
    
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.scale = 1;
    this.anchor = {x:0, y:0};
    
    this.draw = function(gfx){
        gfx.translate(this.x, this.y);
        gfx.rotate(0);
        gfx.scale(this.scale, this.scale);
        gfx.drawImage(this.img, -this.anchor.x, -this.anchor.y);
        gfx.resetTransform();
    };
}

game.begin();
