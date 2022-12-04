let input = Number(prompt("vigyél be egy számot"));

while (isNaN(input)) {
    input = Number(prompt("vigyél be egy számot"));
}




//egyenlő ezzel


let input;

do {
    input = Number(prompt("vigyél be egy számot"));
} while (isNaN(input));