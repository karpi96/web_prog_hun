//vidd be a pontszámot és írd ki a jegyet, amit kaptál
let points = Number(prompt("points: ")); //Pontszám bevitel

if(points < 0 || points>100 || isNaN(points)) //Ha a bevitt pontszám kissebb mint 0 vagy nagyobb mint 100 vagy nem szám akkor kiirjuk,hogy hiba van
    console.log("wrong input");
else if(points <= 40) console.log("1");//ha a pontszám kissebb vagy egyenlo mint 40 akkor a jegy 1
else if(points <= 55) console.log("2");//ha a pontszám kissebb vagy egyenlo mint 55 akkor a jegy 2
else if(points <= 70) console.log("3");//ha a pontszám kissebb vagy egyenlo mint 70 akkor a jegy 3
else if(points <= 85) console.log("4");//ha a pontszám kissebb vagy egyenlo mint 85 akkor a jegy 4
else if(points <= 100) console.log("5");//ha a pontszám kissebb vagy egyenlo mint 100 akkor a jegy 5
