//let guests = ['Aasma', 'Janny', 'Kanwal', 'Falak', 'Miral'];
let guests = ['Shahzaib', 'Asad', 'Bilal', 'Zaynab', 'Mirha'];
console.log("Sorry, we can only invite two people for dinner.");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`
  );
}

for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, you're still invited to dinner!`);
}

guests.pop();
guests.pop();
console.log(guests);
