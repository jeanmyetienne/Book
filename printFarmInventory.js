// The numbers of cows and chickens always 3 characters. 
function printFarmInventory(cows, chicken) { 
    let cowString = String(cows); //Converting cows into a string. 
    while(cowString.length < 3) {  //using the length of the string. 
        cowString = "0" + cowString; //string concatenating. 
    }
    console.log(`${cowString} cows`);

    let chickenString = String(chicken); 
    while(chickenString.length < 3) { 
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} chickens`);
}
printFarmInventory(7, 11)