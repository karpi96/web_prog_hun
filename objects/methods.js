//A metódok függvények amelyek az objektumban vannak definiálva és arra az objektumra vonatkoznak
let user = {
    name: "Roki",
    email: "roki@gmail.com",

    sayHi(){
        alert("hello");
    },

    /* alternatívan így is tudjuk deklarálni */

    sayHi1: function(){
        alert("hello");
    }
}

//kihívjuk
user.sayHi();


//kad u metodi hocemo da koristimo promenljive koje se nalaze u samom objektu moramo da koristimo kljucnu rec "this"
//amikor a metódban vagy fügvényben akarjuk használni a változókat amelyek az objektumban találhatóak, a this kulcsszóval tudunk hozzájuk férni.
let user1 = {
    name: "Roki",
    email: "roki@gmail.com",

    sayHiTo: function(someone){
        alert(this.name + " says hello to" + someone);
    }
}


user.sayHiTo("Rambo");