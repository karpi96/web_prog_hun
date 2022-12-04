//átdobjuk a jegyeket számból szóba

let jegy = Number(prompt("vidd be a jegyet"))

if(ocena == 5) alert("Kitűnő");
else if(ocena == 4) alert("jeles");
else if(ocena == 3) alert("jó");
else if(ocena == 2) alert("elégséges");
else if(ocena == 1) alert("elégtelen");
else alert("rossz bevitel")

//ezt a programot másképp is megtudjuk írni
//ha egyenlők vannak az ifben akkor tudjuk a switch case parancsot is használni
switch(ocena){
    case 5:
        alert("Kitűnő");
        break;
    case 4:
        alert("jeles");
        break;
    case 3:
        alert("jó");
        break;
    case 2: 
        alert("elégséges");
        break;
    case 1:
        alert("elégtelen");
        break;
    default:
        alert("rossz bevitel");
}

