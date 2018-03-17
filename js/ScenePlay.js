function ScenePlay(){
    this.windows = [];
    this.activeWindow = null;
    this.roomWidth = 215;
    this.roomHeight = 210;
    
    this.init = function(){
        var temp = 0;
        while (temp < 10){
            this.addWindow(temp * 150, temp * 50);
            temp++;
        }
    }
    
    this.update = function(dt){
        //console.log(this.windows[0].window.closed);
        //console.log(this.windows[0].window.screenX);
        
        this.windows.forEach((window2) =>{
            if(!window2.window.closed && window2.update)window2.update(dt, this);
        });
    };
    this.draw = function(gfx){
        game.clear();
        
    };
    this.addWindow = function(x, y){
        //This is where you open up new windows!
        this.windows.push(window.open('win2.html', 'floor' + this.windows.length, 'width=' + this.roomWidth + ',height=' + this.roomHeight + ',left=' + x + ',top=' + y + ''));
    }
} 

recieveMsg = function(msg){
    //This is where you recieve information from the smaller windows!
    console.log(msg);
}