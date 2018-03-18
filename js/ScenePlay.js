function ScenePlay(){
    this.windows = [];
    this.activeWindow = null;
    this.roomWidth = 215;
    this.roomHeight = 210;
    
    this.blocks = [];
    
    //This init function is my stand-in for the constructor.  in this case its contents are placeholder, as the spawning of two windows and a single block is not our desired end goal.
    this.init = function(){
        var temp = 0;
        while (temp < 2){
            this.addWindow(temp * 150, temp * 50);
            temp++;
        }
        var block = new Block();
        block.init(500, 200);
        this.blocks.push(block);
    }
    
    this.update = function(dt){
        
        this.windows.forEach((win) =>{
            if(!win.window.closed && win.update)win.update(dt, this);
        });
    };
    this.draw = function(gfx){
        game.clear();
    };
    
    //This function opens up a new remote window and adds it to the windows array.
    this.addWindow = function(x, y){
        //This is where you open up new windows!
        this.windows.push(window.open('win2.html', 'floor' + this.windows.length, 'width=' + this.roomWidth + ',height=' + this.roomHeight + ',left=' + x + ',top=' + y + ''));
    }
} 

//This is where we will recieve keyboard inputs from the remote windows.  Ideally this should be the ONLY msg info we recieve.  You do not need to send the remote windows positions using this, you can access those easily with "*insertWindow*.window.screenX".  Same goes for on close logic, you can check any window to see if it is closed.
recieveMsg = function(msg){
    //This is where you recieve information from the smaller windows!
    console.log(msg);
}

/*TODO: 
+ Add grid system in each remote window.
+ Create player class.
+ Give windows AABB (handle those calculations here, not remote).
+ Make player able to move from window to window but only if they are adjacent.
+ Change window naming convention from "floor0" to "x00_y00" to represent their layout in our eventual spawn grid system (that is to say the pre-built map we will use to generate the floor layout of the dungeon).
+ Fill out this list and add these issues to the issue tracker.
*/