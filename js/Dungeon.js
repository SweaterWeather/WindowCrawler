//This is the template for objects that will be held in local space.
function Dungeon(){
    this.x = 0;
    this.y = 0;
    this.w = 25;
    this.h = 25;
    this.color = "#000";
    this.win = null;
    this.rooms = {};
    this.init = function(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    };
    this.update = function(dt){
        
    };
    this.draw = function(gfx){
        this.rooms[this.win.name].draw(gfx);        
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
    //When we have an algorithm for scripted rooms, put it here!
    this.addRoom = function(room){
        if(!this.rooms[room]){
            var newroom  = new Room(room);
            
            this.rooms[room] = newroom;
            newroom.init(parseInt(Math.random()*10).toString() + '5');
        }
    };
}