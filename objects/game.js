function Player(name){
    this.name = name;
    this.hp = 100;
    this.ap = 20;

    this.attack=function(enemy){
        enemy.hp-=this.ap;
        enemy.printStatus();
    };

    this.printStatus = function(){
        console.log(this.name +  "has  hp: " + this.hp + "  ap: " + this.ap);
    }
}

function Npc(name,hp,ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;

    this.attack=function(enemy){
        enemy.hp-=this.ap;
        enemy.printStatus();
    };

    this.printStatus = function(){
        console.log(this.name +  "has  hp: " + this.hp + "  ap: " + this.ap);
    }
}


let name = prompt("Give a name for your character: ");
let player = new Player(name);

let goblin = new Npc("goblin",20,5);
let orc = new Npc("orc", 40, 10);

player.attack(goblin);

