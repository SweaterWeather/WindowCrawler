function ScenePlay(){
    this.windows = {};
    this.rooms = [];
    this.activeWindow = '';
    this.roomWidth = 275;
    this.roomHeight = 270;
    this.dungeon;
    this.currentDungeon = '';
    this.player = null;
    this.tick = 0;
    
    this.renderQ = [];
    
    //This init function is my stand-in for the constructor.  in this case its contents are placeholder, as the spawning of two windows and a single block is not our desired end goal.
    this.init = function(){
        this.dungeon = new Dungeon();
        this.renderQ.push(this.dungeon);
        this.currentDungeon = "demoDungeon";
        
        this.player = new Player();
        this.renderQ.push(this.player);
        this.player.init(50, 50, "#000");
        
        //TEMPORARY TEST CODE
        var sW = document.documentElement.clientWidth / 2 - this.roomWidth / 2;
        var sH = document.documentElement.clientHeight / 2 - this.roomHeight / 2;
        this.addWindow(sW + window.screenX, sH + window.screenY, dungeonTemplates[this.currentDungeon].firstRoom);
        //END TEMP
    }
    
    this.update = function(dt){
        
        for(var key in this.windows){
            var win = this.windows[key];
            if(win.window && !win.window.closed && win.update && key == this.activeWindow || win.document.hasFocus() && win.update)win.update(dt, this);
            else if(win.window && !win.window.closed && win.update && this.tick%15 === 0)win.update(dt, this);
            else if(win.window.closed){
                if(key == dungeonTemplates[this.currentDungeon].firstRoom){
                    var sW = document.documentElement.clientWidth / 2 - this.roomWidth / 2;
                    var sH = document.documentElement.clientHeight / 2 - this.roomHeight / 2;
                    this.addWindow(sW + window.screenX, sH + window.screenY, dungeonTemplates[this.currentDungeon].firstRoom);

                }
            }
            if(this.player.currentRoom == key)this.activeWindow = key;
            
            if(win.window){
                for (var key2 in this.windows){
                    var win2 = null;
                    if(key2 != key) win2 = this.windows[key2];
                    if(win2 != null && win2.window){
                        this.roomProximalCollison(win, win2, "left");
                        this.roomProximalCollison(win, win2, "right");
                        this.roomProximalCollison(win, win2, "up");
                        this.roomProximalCollison(win, win2, "down");
                    }
                }
            }
        }
        if(this.windows[this.activeWindow] && this.windows[this.activeWindow].window.closed){
            this.activeWindow = dungeonTemplates[this.currentDungeon].firstRoom;
            this.player.currentRoom = dungeonTemplates[this.currentDungeon].firstRoom;
            this.player.isMoving = false;
            keyboard.keys = [];
            keyboard.prev = [];
        } 
        
        this.player.update(dt);
        this.tick++;
    };
    this.draw = function(gfx){
        game.clear();
    };
    
    //This function opens up a new remote window and adds it to the windows array.
    this.addWindow = function(x, y, code){
        //This is where you open up new windows!
        var newWin = window.open('win2.html', code, 'width=' + this.roomWidth + ',height=' + this.roomHeight + ',left=' + x + ',top=' + y + '');
        
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
    this.roomProximalCollison = function(win1, win2, win1side){
        var collider1 = {};
        var collider2 = {};
        
        if(!this.dungeon.rooms[win1.name] || !this.dungeon.rooms[win2.name])return false;
        
        
        switch(win1side){
            case "left":
                collider1 = {up:win1.window.screenY + 50, down:win1.window.screenY + this.roomHeight - 50, left:win1.window.screenX - 25, right:win1.window.screenX + 10};
                collider2 = {up:win2.window.screenY + 50, down:win2.window.screenY + this.roomHeight - 50, right:win2.window.screenX + this.roomWidth + 25, left:win2.window.screenX + this.roomWidth - 10};
                if(this.dungeon.rooms[win1.name].adLeft == win2.name)this.dungeon.rooms[win1.name].adLeft = null;
                break;
            case "right":
                collider2 = {up:win2.window.screenY + 50, down:win2.window.screenY + this.roomHeight - 50, left:win2.window.screenX - 25, right:win2.window.screenX + 10};
                collider1 = {up:win1.window.screenY + 50, down:win1.window.screenY + this.roomHeight - 50, right:win1.window.screenX + this.roomWidth + 25, left:win1.window.screenX + this.roomWidth - 10};
                if(this.dungeon.rooms[win1.name].adRight == win2.name)this.dungeon.rooms[win1.name].adRight = null;
                break;
            case "down":
                collider2 = {left:win2.window.screenX + 50, right:win2.window.screenX + this.roomWidth - 50, up:win2.window.screenY - 25, down:win2.window.screenY + 10};
                collider1 = {left:win1.window.screenX + 50, right:win1.window.screenX + this.roomWidth - 50, down:win1.window.screenY + this.roomHeight + 25, up:win1.window.screenY + this.roomHeight - 10};
                if(this.dungeon.rooms[win1.name].adDown == win2.name)this.dungeon.rooms[win1.name].adDown = null;
                break;
            case "up":
                collider1 = {left:win1.window.screenX + 50, right:win1.window.screenX + this.roomWidth - 50, up:win1.window.screenY - 25, down:win1.window.screenY + 10};
                collider2 = {left:win2.window.screenX + 50, right:win2.window.screenX + this.roomWidth - 50, down:win2.window.screenY + this.roomHeight + 25, up:win2.window.screenY + this.roomHeight - 10};
                if(this.dungeon.rooms[win1.name].adUp == win2.name)this.dungeon.rooms[win1.name].adUp = null;
                break;
        }
        
        if(win1.window.closed || win2.window.closed)return false;
        
        
        if(collider1.up > collider2.down || collider2.up > collider1.down || collider1.left > collider2.right || collider2.left > collider1.right){
            return false;
        }
        
        //console.log(win1side);
        switch(win1side){
            case "left":
                this.dungeon.rooms[win1.name].adLeft = win2.name;
                //if(win1.document.hasFocus())console.log("collided left");
                //this.dungeon.rooms[win2.name].adRight = win1.name;
                break;
            case "right":
                //this.dungeon.rooms[win2.name].adLeft = win1.name;
                this.dungeon.rooms[win1.name].adRight = win2.name;
                //if(win1.document.hasFocus())console.log("collided right");
                break;
            case "down":
                this.dungeon.rooms[win1.name].adDown = win2.name;
                //if(win1.document.hasFocus())console.log("collided down");
                //this.dungeon.rooms[win2.name].adUp = win1.name;
                break;
            case "up":
                //this.dungeon.rooms[win2.name].adDown = win1.name;
                this.dungeon.rooms[win1.name].adUp = win2.name;
                //if(win1.document.hasFocus())console.log("collided up");
                break;
            default:
                return false;
                break;
        }
        
        //if(win1.document.hasFocus())console.log(this.dungeon.rooms[win1.name].adLeft + " left " + this.dungeon.rooms[win1.name].adRight + " right " + this.dungeon.rooms[win1.name].adUp + " up " + this.dungeon.rooms[win1.name].adDown + " down ");
        
        return true;
    }
    this.moveRoom = function(neoRoom){
        var newRoom = neoRoom;
        
        var dunX = 0;
        var dunY = 0;
        var block = true;
        dungeonTemplates[this.currentDungeon].grid.forEach((y) =>{
            y.forEach((x) => {
               if(x === this.activeWindow){
                   dunX = y.indexOf(x);
                   dunY = dungeonTemplates[this.currentDungeon].grid.indexOf(y);
               } 
            });
        });
        
        if(this.dungeon.rooms[this.activeWindow].adUp != null && this.dungeon.rooms[this.dungeon.rooms[this.activeWindow].adUp].downDoor != undefined 
           && this.dungeon.rooms[this.activeWindow].upDoor != undefined && newRoom == dungeonTemplates[this.currentDungeon].grid[dunY - 1][dunX]){
            
            newRoom = this.dungeon.rooms[this.activeWindow].adUp;
            block = false;
        }
        if(this.dungeon.rooms[this.activeWindow].adDown != null && this.dungeon.rooms[this.dungeon.rooms[this.activeWindow].adDown].upDoor != undefined 
           && this.dungeon.rooms[this.activeWindow].downDoor != undefined && newRoom == dungeonTemplates[this.currentDungeon].grid[dunY + 1][dunX]){
            
            newRoom = this.dungeon.rooms[this.activeWindow].adDown;
            block = false;
        }
        if(this.dungeon.rooms[this.activeWindow].adLeft != null && this.dungeon.rooms[this.dungeon.rooms[this.activeWindow].adLeft].rightDoor != undefined 
           && this.dungeon.rooms[this.activeWindow].leftDoor != undefined && newRoom == dungeonTemplates[this.currentDungeon].grid[dunY][dunX - 1]){
            
            newRoom = this.dungeon.rooms[this.activeWindow].adLeft;
            block = false;
        }
        if(this.dungeon.rooms[this.activeWindow].adRight != null && this.dungeon.rooms[this.dungeon.rooms[this.activeWindow].adRight].leftDoor != undefined 
           && this.dungeon.rooms[this.activeWindow].rightDoor != undefined && newRoom == dungeonTemplates[this.currentDungeon].grid[dunY][dunX + 1]){
            
            newRoom = this.dungeon.rooms[this.activeWindow].adRight;
            block = false;
        }
        if(!this.windows[newRoom] || !this.windows[newRoom].window || this.windows[newRoom].window.closed) this.addWindow(0,0,newRoom);
        else if(block) return true;
        //else console.log(this.dungeon.rooms[this.activeWindow].adUp)
        this.player.currentRoom = newRoom;
        this.activeWindow = newRoom;
        return false;
    }
    this.incomingKeyboard = function(keys){
        keyboard.keys = keys[0].slice(0);
        keyboard.prev = keys[1].slice(0);
    }
} 

//This is where we will recieve keyboard inputs from the remote windows.  Ideally this should be the ONLY msg info we recieve.  You do not need to send the remote windows positions using this, you can access those easily with "*insertWindow*.window.screenX".  Same goes for on close logic, you can check any window to see if it is closed.
recieveMsg = function(msg){
    //This is where you recieve information from the smaller windows!
    if(game.scene.incomingKeyboard)game.scene.incomingKeyboard(msg);
}

/*TODO: 
+ Add grid system in each remote window.
+ Create player class.
+ Give windows AABB (handle those calculations here, not remote).
+ Make player able to move from window to window but only if they are adjacent.
+ Change window naming convention from "floor0" to "x00_y00" to represent their layout in our eventual spawn grid system (that is to say the pre-built map we will use to generate the floor layout of the dungeon).
+ Fill out this list and add these issues to the issue tracker.
*/