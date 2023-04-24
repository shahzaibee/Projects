// Guests for dinner
let guests = ['Shahzaib', 'Asad', 'Bilal', 'Zaynab', 'Mirha'];

// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add one guest to the beginning of the array
guests.unshift('Bunny');

// Add one guest to the middle of the array
guests.splice(2, 0, 'Hunny');

// Add one guest to the end of the array using append()
guests.push('John');

// Print invitation messages for each guest
guests.forEach(function(guest) {
  console.log("Dear " + guest + ", please join us for dinner at 7 PM.");
});
