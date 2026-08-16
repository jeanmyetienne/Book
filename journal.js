// A journal list with change of events.
// the list contains multiple objects. 
let journal = [
    {events : ["work", "touched tree", "pizza", "running", "television"], squirrel : false}, 
    {events : ["work","ice cream","cauliflower", "lasagna", "touched tree", "pizza", "running", "television"], squirrel : false}, 
    {events : ["weekend", "cycling", "break", "peanuts", "beer"], squirrel : false}, 
]

//Function that will add events to the journal list.

function addEntry(events, squirrel) { 
    journal.push(events, squirrel);
}

addEntry({events : ["Sleep", "touched tree", "pizza", "break"], squirrel: false});
console.log(journal)