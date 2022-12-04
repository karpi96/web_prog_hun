//Amikro tobb objektumot kell csinálnunk, amelyek hasonlóak akkor a legjobb ha Konstruktort használunk.
//A konsztruktor olyan függvény,amely arra szolgál, hogy objektumokat készítsünk belőle
//tudnak kezdőértékeket fogadni paramétereken keresztül
//Nagy betűvel adjuk a nevét

function User(name,email,age){
    //Minden tulajdonság és metód amely a jövőbeli objektumban található a this kulcsoszóval definiáljuk
    //Minden ami nem "this" csak lokális változó
    this.name = name;
    this.email = email;
    this.age = age;

    //metódokat is tudunk definiálni 
    this.sayHiTo = function(someone){
        alert(this.name + " says hello to" + someone);
    };
}

//Mindig a new parancsszóval hívjuk elő
//Úgy definitáltuk, hogy három paramétert fogad, amelyek egyben a kezdőértékek is
let user = new User("Roki","roki@gmail.com",20);


//A következő képpen hívjuk elő
user.sayHiTo("Rambo");