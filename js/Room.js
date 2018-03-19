function Room(){
    this.win = null;
    this.grid = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    this.init = function(){
        this.grid.forEach((x, index) =>{
            var int = 0;
            while (int < 10){
                x.push(this.mb(int, index));
                int++;
            }
        });
    };
    this.mb = function(x, y){
        var b = new Tile();
        b.init(x * 25, y * 25, '#'+''+x+''+x+''+y+''+y+''+x+''+y+'55');
        return b;
    };    
    this.setWindow = function(win){
        this.win = win;
        this.grid.forEach((y) =>{
            y.forEach((x) =>{
                x.setWindow(win);
            });
        }); 
    };
    this.draw = function(gfx){
        this.grid.forEach((y) =>{
            y.forEach((x) =>{
                x.draw(gfx);
            });
        });        
    };
    this.update = function(dt){
        
    };
}