/* 
array from 1-100 

num % 3 --> 0 Fizz 
num % 5 --> 0 Buzz 

num % 3 && num % 5 --> 0 FizzBuzz 
*/ 

let i = 1; 
while(i <= 100){ 
    if(i % 3 == 0 && i % 5 == 0){ 
        console.log('FizzBuzz');
    }
    else if(i % 5== 0) { 
        console.log('Buzz');
    }
    else if(i % 3 == 0){ 
        console.log('Buzz');
    }
    else { 
        console.log(i + ": Not divisible by 3 or 5 ");
    }
    i++
}