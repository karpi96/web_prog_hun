//Nézd meg osztható-e a szám 3-al
let input = Number(prompt("irj be egy számot"));

if(input % 3 == 0){  // Ha elosszuk a számot 3-al a maradék 0-val kell legyen egyenlő
    console.log("osztható 3-al");
}else{
    console.log("nem osztható");
}