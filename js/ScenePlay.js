function ScenePlay(){
    this.windows = [];
    this.activeWindow = null;
    
    this.init = function(){
        this.addWindow();
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
    this.addWindow = function(){
        //This is where you open up new windows!
        this.windows.push(window.open('win2.html', 'floor' + this.windows.length, 'width=215,height=210,left=100,top=100'));
    }
} 

recieveMsg = function(msg){
    //This is where you recieve information from the smaller windows!
    console.log(msg);
}