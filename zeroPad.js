function zeroPad(number, width) { 
    let newString = String(number); 
    while (newString.length < width) { //numbers width (0 or more )
        newString = "0" + newString; 
    }
    return newString; 
}

function printFarmInventory(cows, chickens, pigs) { 
    console.log(`${zeroPad(cows, 3)} cows`); 
    console.log(`${zeroPad(chickens, 4)} chickens`);
    console.log(`${zeroPad(pigs, 5)} pigs`);
}
printFarmInventory(4, 10, 4)