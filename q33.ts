let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinal = "";

  if (number === 1 || number % 10 === 1 && number !== 11) {
    ordinal = "st";
  } else if (number === 2 || number % 10 === 2 && number !== 12) {
    ordinal = "nd";
  } else if (number === 3 || number % 10 === 3 && number !== 13) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }

  console.log(number + ordinal);
}
