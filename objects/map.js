
//Csinálj 2d térkép objektumot konsztruktor segítségével
//Két változót kell tartalmazzon, az x és y koordinátát.
//Öt metódja kell legyen: menny fel, le , balra , jobbra és írd ki a jelenlegi koordinátát.
function Map(){
    this.x = 0;
    this.y = 0;

    this.goUp = function(){
        this.y++;
    }

    this.goDown = function(){
        this.y--;
    }

    this.goLeft = function(){
        this.x--;
    }

    this.goRight = function(){
        this.x++;
    }

    this.printPosition = function(){
        console.log("your posiiton on the map is:   x: " + this.x + "  y: " + this.y)
    }
}

let map = new Map();

map.goRight();
map.goUp();
map.goUp();

map.printPosition();