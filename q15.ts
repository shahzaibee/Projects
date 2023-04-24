let guest = ['Fiza', 'Zaynab', 'Mirha','Miral','Mehrma'];

let removeGuest = guest.pop();
let msg = " is not attending dinner";
guest.push("Janny");
console.log(removeGuest + msg);

let txt = "";

guest.forEach(myFunction);
console.log(txt);


function myFunction(value:any) {

	txt += value + " I would like you invite to dinner \n";
};