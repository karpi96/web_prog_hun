//Alternatív függvény deklarálás

//A fügvényekre tudunk nézni úgy, mint változókra amelyeknek egy speciális értékük van
let sayHi = function(){
    alert("cao");
}

let sum = function(a,b){
    return a+b;
}

//tudom a függvényt másolni is
let sum1 = sum;

sum1(); //ha kihívom ezt a függvényt ugyanaz történik mint ha kihivtram volna a sum-t

//callback függvények

let lehet = function(){
    alert("bemehetsz");
}

let nemLehet = function(){
    alert("nem mehetsz be");
}

let check = function(kerdes, igen, nem){
    let ev = Number(promt(kerdes));

    if(ev>=18) da();
    else ne();
}


provera("hány éves vagy", lehet, nemLehet);
