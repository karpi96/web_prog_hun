//függvények paraméterek nélkül
function sayHi() {
    alert("Szia");
}
//a függvényeketet nem elég megcsinálni ki kell őket hívni
//függvenynek amelynek nincsennek paraméterei és visszatérő érték a következő képpen hívjuk elő
sayHi();

//a változókhoz amelyeket a függvényben deklarálunk, nem tudunk hozzáférni függvényen kívül
function sayHi1() {
    let c = "Szia";
    alert(c);
}

//A függvények tudnak kívülről értékeket kapni paramétereken keresztül 
//upisemo u zagradu
function sayHi(message) {
    alert(message);
}
//Amikor előhívjuk a zárójelbe bekell írni az értéket amivel dolgozni fog a függvény
//Ő azt beolvassa egy változóba, ezesetben message és azzal fogja elvégezni a függvényt
sayHi("cao kako si")

//Kiíráson kívül tudunk értékeket visszaküldeni a főprogramba
//Ezt a return parancsszóval tudjuk elérni
//A következő példaban beolvasunk 2 számot, a és b-t.
//És visszaküldjük az összegét
function sum(a, b) {
    return a + b
}

//Amikor olyan függvényeket haszálunk amely küld vissza értékeket azt az értéket lekell mentsük
//Ilyen esetben az egesz kifejezésnek az értéke a visszaadott érték lesz
let s = sum(5, 6);
alert(s);

//Lehet igy is hasznáni
alert(sum(5, 6));

//funkcija koja proverava da li broj koji unesemo kao parametar je prost ili nije
//kad je prost vraca true, kad nije vraca false

//Függvény amely megnézi, hogy a szám amelyet megadunk a paraméterben, prím vagy nem.
//amikor prím akkor true értéket küld vissza, amikor nem akkor pedig false
function isPrime(num) {
    //specijalni slucajevi su 0,1,2 brojevi koje nas algoritam ne gleda ali nisu prosti
    //zato ih gledamo odvojeno na pocetku
    //ako naidjemo na ove brojeve vracamo false i ne idemo dalje

    //speciális esetek a 0,1,2 számok mert az algoritmusunk nem nézi őket de nem prímszámok
    //ezért definiáljuk őket külön
    if (num == 0 || num == 1 || num == 2) 
        return false;//a return úgy viselkedik a függvényekben mint a break a ciklusokban
                    //amikor a program raakad az első returnre akkor kilép a függvényből


    for (let i = 2; i < num; i++) {
        if (num % i == 0) 
            return false; //ha ráakadunk számra amely osztható valamely számmal 2-és a szám között akkor nem prím és false küldünk vissza.
    }           
  
    //ha végig megy az egész függvényen és nem akad rá semmi retunre akkor az azt jelenti h prímszám
    return true;
}


//generálja minden prímszámot start-tól stoppig
function generatePrime(start, stop) {
    for (let i = start; i <= stop; i++) {
        if (isPrime(i)) console.log(i); 
    }
}


//generatePrime(100,200); 


//megforditja a számot
function reverse(num) {
    let reversed = 0; //a kezdő érték nulla és ide adjuk hozzá a számokat
    let r; //maradék

    //Amíg nem lesz nulla csináld
    while (num != 0) {
        let r = num % 10; //a maradék ha elosztom tízzel
        //ami azt jelenti h izolálom az első számjegyet
        reversed = reversed * 10 + r;//megmozdítom balra egy tizedessel a meglévő számnokat és hozzáadom a maradékot   
        num = Math.floor(num / 10); // elosztom tízzel és kikerekítem(eldobom a jobb oldali számjegyet)
    }

    return reversed;
}

console.log(reverse(1234))