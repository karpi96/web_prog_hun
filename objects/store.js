
//Csinálj termék objektumokat amelyek egy boltban találhatók
//Mivel sok termék van egy boltban ez miatt konsztruktorral kell őket épitsük
//4 tulajdonsága van: név, alapár,jelenlegi ár, és az akció százaléka.
//4 metódusa van: valtoztasd meg az alapárat, írd ki az árat, rakd a terméket akcióra, és töröld az akciót.



//a kezdőértékek az alapár meg a termék neve
function Product(name, price) {
    this.name = name;
    this.basePrice = price;
    this.currentPrice = price;//az elején a termék nincs akción
    this.salePercentage = 0; 


    //Metódus amely a terméket akcióssa teszi
    //Paraméterként százalékban beírjuk mennyire akarjuk leereszteni az árat
    this.sale = function (percentage) {
        this.currentPrice = this.basePrice - this.basePrice / 100 * percentage;
        this.salePercentage = percentage;
    }

    //Töröljük az akciós árat
    this.deleteSale = function () {
        this.currentPrice = this.basePrice;
        this.salePercentage = 0;
    }

    //Kiírjuk az árat
    this.printPrice = function () {
        if (this.salePercentage == 0)   console.log("The price for " + this.name + " is " + this.currentPrice);
        else   console.log("The original price for " + this.name + " is " + this.basePrice+ ". But now you can get it on a " + this.salePercentage + "% sale only for " + this.currentPrice);
    }

    //Cseréli az alapárat
    this.changePrice = function (newPrice) {
        this.basePrice = newPrice;
    }
}


//készítve lett két objektum
let tomato = new Product("Tomato", 200);
let cucumber = new Product("Cucumber", 150);

tomato.sale(30);
tomato.printPrice();
cucumber.printPrice();