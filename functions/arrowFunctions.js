//kad imamo funkciju koja sigurno vraca neku vrednost i jednostavna je
//onda koristimo "arrow" funkcije koje podatke posle "strele" vracaju vrednost i bez kljucne reci "return"

//ha van egy függvényunk amely biztos küld vissza valami értéket és egyszerű
//akkor használjuk az "arrow" függvényeket, amelyek nyíl utan biztos visszaküldik az értéket , a return kulcsszó nélkül


/*a következő sum függvény ekvivalens ezzel.

let sum = function(a,b){
    return a+b;
}
*/

let sum = (a,b) => a+b;



//másik peldák
let inchToCm = (cm) => cm/2.54;
let cmToInch = (inch) => inch*2.54;
let cmToM = (cm) => cm/100;

