
update = function(dt, newState){
    game.update(dt, newState);
}

//This remote mini game borrows heavily from Nick's base JS game platform.
const game = {
    gfx:undefined,
    width:500,
    height:400,
    state: null,
    begin:function(id){
        
        const canvas = document.getElementById(id);
        if(canvas == undefined) return;
        this.gfx = canvas.getContext("2d");
        if(this.gfx == undefined) return;
        this.width = canvas.width;
        this.height = canvas.height;
        
        keyboard.setup();
    },
    update:function(dt, newState){
        this.setState(newState);
    
        this.demoBlockUpdate();//temporary for demo purposes
        
        console.log(dt);
        ///////////////////////////// LATE UPDATE:
        keyboard.update();
    },
    demoBlockUpdate:function(){
        
        this.clear();

        this.state.renderQ.forEach((q, index) =>{
            //
            q.setWindow(window);
            q.draw(this.gfx);
        });
    },
    setState:function(newState){
        this.state = newState;
    },
    //only use this to send keyboard info
    send:function(){
        opener.window.recieveMsg(/*This is where you send information to the main application!*/);
    },
    clear:function(){
        this.gfx.clearRect(0, 0, this.width, this.height); // clear screen
    }
};

game.begin("myCanvas");
