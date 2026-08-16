
const POWER = function(base, exponent) { 
    let result = 1; 
    for(let count = 0; count < exponent; count++) { 
        result = base;  
    }
    return result
}
console.log(POWER(2, 10));