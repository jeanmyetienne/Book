// find a sequence of such additions and multiplications that produces that number? 

function findSolution(target) { // function to find the target
    // findSolution function bod. 
    function find(current, history) { //Inner function to search history and current value 
        if(current == target) { // checking to see if the current value is equal to history if so return the value.
            return history; 
        } else if (current > target) { // checking to see if current is greater than target value if so return will be null. 
            return null;
        } else { 
            // checking both scenario adding 5 or multiplying by 3. 
            return find(current + 5, `(${history} + 5 )`) || 
            find(current * 3, `(${history} * 3) `); 
        }
    }
    return find(1, "1")
}

console.log(findSolution(24))