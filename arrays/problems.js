let array = [1, 6, 8, 2, 4, 5];

//1. add össze az összes számot a tömbben

let sum = 0;
for (e of array) {
    sum += e;
}

console.log("az összeg: " + sum);

//2. a tömb átlaga

let avrage = sum / array.length;

//3. Nézd meg, hogy a tömb tartalmazza e a bevitt számot

let input = Number(prompt("enter a number: "));

let inArray = false;
let counter = 0;
for (e of array) {
    if (e == input) {
        inArray = true;
        counter++;
    }
}

//4. Keresd meg a legkissebb és a legnagyobb számot

let max = array[0];
let min = array[0];

for (e in array) {
    if (e > max) max = e;
    if (e < min) min = e;
}

//5. Keresd meg a masodik legnagyobb számot

let max1 = array[0];
let min1 = array[0];

for (e in array) {
    if (e > max1) max1 = e;
    if (e < min1) min1 = e;
}

let secondMax = min;

for (e in array) {
    if (e > secondMax && e < max) {
        secondMax = e;
    }
}

//6. Húzd ki a tömbből a páros számokat és rakd egy külön tömbbe őket

let evenArray = []

for (e of array) {
    if (e % 2 == 0) {
        evenArray.push(e);
    }
}

//7. Számold ki mennyi páros szám van a tömbben

let evenCounter = 0;

for (e of array) {
    if (e % 2 == 0) {
        evenCounter++;
    }
}

//függvénnyel

let countEvenNumbers = function (array) {
    let evenCounter = 0;

    for (e of array) {
        if (e % 2 == 0) {
            evenCounter++;
        }
    }

    return evenCounter;
}

//8. Forítsd meg a tömbböt

for (let i = 0; i < array.length / 2; i++) {
    let help = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = help;
}

//függvénnyel meg másik logikával

let reverse = function (array) {
    ans = []

    for (let i = array.length - 1; i >= 0; i--) {
        ans.push(array[i])
    }

    return ans;
}

//9. A két tömbb egyforma-e?

array2 = [2, 6, 8, 2, 3];
let equal = true;
for (let i = 0; i < array.length; i++) {
    if (array2[i] != array[i] || array2.length != array.length) {
        equal = false;
        break;
    }
}

//függvénnyel


let isEqual = function (array1, array2) {
    for (let i = 0; i < array.length; i++) {
        if (array2[i] != array1[i] || array2.length != array.length) {
            return false
        }
    }
    return true;
}

//vannak meg feladatok leetcode-on