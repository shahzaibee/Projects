// Create an array of five places to visit
let placesToVisit = ['Canada', 'America', 'Belgium', 'German', 'Malaysia',];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
let sortedPlaces = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedPlaces);
// Print the array to show that it's still in its original order
console.log("Original Order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);
// Print the array to show that it's still in its original order
console.log("Original Order:", placesToVisit);
export {};
