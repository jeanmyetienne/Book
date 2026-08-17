function power (base, exponent) { 
    if(exponent == 0) { 
        return 1; 
    } else if(base == 0) { 
        return 0; 
    }
    else { 
        return base * power(base, exponent - 1);
    }
}
let exp = power(0)
console.log(exp)