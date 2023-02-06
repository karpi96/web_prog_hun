let emptyArray = []; //üres tömb
//tömb elemekkel kitöltve
//mindem elemnek van sorszáma

//           0,1,2,3,4
let array = [1,5,7,8,10] 

//a sorszámot kitudjuk haszálni hogy hozzáférjünk az elemekhez

// Ebben az esetben kiírjuk az elemet amely a 2-es helyen található
console.log(array[2])  // 7

//a tömb hossza
console.log(array.length) 

//a tömbön a következő képpen kell áthaladni

for(let i = 0; i<array.length; i++){
    //radimo nesto sa array[i]
    console.log(array[i]);
}

//vagy alternatívan
//svaki element iz niza array cita se u promenljivu element red po red
//minden elem a tömbből beleíródik sorban az element változóba és azt tudjuk kihasználni külömböző műveletekre
for(element of array){
    console.log(element)
}

//a tömb végére így tudunk elemet hozzáadni

array[5] = 23;

//de ebben az esetben kell tudjuk hogy melyik az utolsó elem
//ezért van egy könnyeb eljárás
//feltudjuk használni a push metódot amely a tömb végére nyomja az elemet

array.push(25);

