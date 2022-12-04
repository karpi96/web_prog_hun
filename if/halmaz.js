//Nézd meg, hogy a szám 10 és 20 között-e van

let broj = Number(prompt("Input: ")); // Bevitel

if(broj > 10 && broj < 20) //megnézzük, hogy 10 és 20 között van-e a szám
    console.log("a szám 10 és 20 között van");
else if(broj <10 || broj > 20) //megnézzük, hogy a 10 alatt vagy 20 fölött  van-e a szám
    console.log("a szám nincs 10 és 20 között")
else if(broj == 10) //egyenlő-e 10-el
    console.log("a szám egyenlő 10-el");
else if(broj == 20) //egyenlő-e 20-al
    console.log("a szám egyenlő 20-al"); 

