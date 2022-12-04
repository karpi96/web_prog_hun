
//objekat je skup informacija koju gledamo kao jednu celinu
//objekat se pravi na sledeci nacin:

//Az objektum az információk csoportosítása
let user = {
    name: "Roki", //tulajdonságok(változók amelyek az objektumban vannak definiálva)
    email: "roki@gmail.com"
}

//az adatokat amelyek a tulajdonságokban vannak tárolva a következőképpen tudjuk előhívni.
console.log(user.name); 
console.log(user["name"]);

//utólag hozzáadott tulajdonság
user.age = 25;
//tulajdonság törlése
delete user.email;
//az egész objektum kiírása konzolban
console.log(user);


//az összes tulajdonság kiolvasása
for(let key in user){
    console.log(key + ": "  + user["key"]);
}

//az objektum másolása
let copy = {};
Object.assign(copy,user);
console.log(copy);




