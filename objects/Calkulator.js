
//Csinálj számológépet a klasszikus {..} szintakszissal és konstruktorral is
//Két számot kell tartalmazzon
//3 metódot kell tartalmazzon: olvasd be a számokat prompt segítségével
//add össze a két számot és küld vissza az eredményt és szorozd be a két számot

let calculator1 = {

    a: 0,
    b: 0,
    read: function(){
        this.a = Number(prompt("first number: "));
        this.b = Number(prompt("second number "));
    },

    sum: function(){
        return this.a+this.b;
    },

    mul: function(){
        return  this.a*this.b;
    },
};


function calculator(){
    this.a = 0;
    this.b = 0;

    this.read = function(){
        this.a = Number(prompt("first number: "));
        this.b = Number(prompt("second number "));
    };

    this.sum= function(){
        return this.a+this.b;
    };

    this.mul= function(){
        return  this.a*this.b;
    };
};


let calculator2 = new calculator();




calculator1.read();
calculator2.read();
console.log("sum1: " + calculator1.sum());
console.log("mul1: " + calculator1.mul());
console.log("sum2: " + calculator2.sum());
console.log("mul2: " + calculator2.mul());



