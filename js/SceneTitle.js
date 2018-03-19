function SceneTitle(){
    
    this.title = new TextField("Dungeon Surfer", game.width/2, 100, 30);
    this.tag = new TextField("Press [ENTER] to play!", game.width/2, 150, 14);
    this.enablePop = new TextField("Please enable popups on this window.", game.width/2, 200, 10);
    this.enablePop2 = new TextField("This is a meta gamejam for games about genre subversion and breaking the fouth wall, you", game.width/2, 235, 10);
    this.enablePop3 = new TextField("should have expected at least one cheeky game about opening lots of windows.", game.width/2, 250, 10);
    this.init = function(){
        
    };
    this.update = function(dt){
        if(keyboard.onDown(keycode.enter)){
            return new ScenePlay();
        }
    };
    this.draw = function(gfx){
        game.clear();
        this.title.draw(gfx);
        this.tag.draw(gfx);
        this.enablePop.draw(gfx);
        this.enablePop2.draw(gfx);
        this.enablePop3.draw(gfx);
    };
} 