var game = null;

update = function(dt, newState){
    setGame(newState);
    
    
    //console.log(window.name);
    
    opener.window.recieveMsg(window.name/*This is where you send information to the main application!*/);
}

setGame = function(newGame){
    game = newGame;
}