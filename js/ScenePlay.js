function ScenePlay(){
    this.windows = {};
    this.rooms = [];
    this.activeWindow = null;
    this.roomWidth = 265;
    this.roomHeight = 260;
    this.dungeon;
    
    this.renderQ = [];
    
    //This init function is my stand-in for the constructor.  in this case its contents are placeholder, as the spawning of two windows and a single block is not our desired end goal.
    this.init = function(){
        this.dungeon = new Dungeon();
        this.renderQ.push(this.dungeon);
        
        //TEMPORARY TEST CODE
        var temp = 0;
        this.addWindow(temp * 150, temp * 50);
        //END TEMP
    }
    
    this.update = function(dt){
        
        for(var key in this.windows){
            var win = this.windows[key];
            if(!win.window.closed && win.update)win.update(dt, this);
            //console.log(win.document.hasFocus()); //this is how you check if a window has focus or not.
        }
        
    };
    this.draw = function(gfx){
        game.clear();
    };
    
    //This function opens up a new remote window and adds it to the windows array.
    this.addWindow = function(x, y){
        //This is where you open up new windows!
        var newWin = window.open('win2.html', dungeonTemplates["demoDungeon"].firstRoom, 'width=' + this.roomWidth + ',height=' + this.roomHeight + ',left=' + x + ',top=' + y + '');
        
        this.dungeon.addRoom(newWin.name);
        
        this.windows[newWin.name] = newWin;
    }
    this.roomCollision = function(win1, win2){
        
        var up1 = win1.window.screenY;
        var down1 = win1.window.screenY + this.roomHeight;
        var right1 = win1.window.screenX + this.roomWidth;
        var left1 = win1.window.screenX;
        
        var up2 = win2.window.screenY;
        var down2 = win2.window.screenY + this.roomHeight;
        var right2 = win2.window.screenX + this.roomWidth;
        var left2 = win2.window.screenX;
        
        if(up1 > down2)return false;
        if(up2 > down1)return false;
        if(left1 > right2)return false;
        if(left2 > right1)return false;
        
        return true;
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