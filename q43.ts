let magicians: string[] = ["David Copperfield", "Harry Houdini", "David Blaine"];

function show_magicians(magicians: string[]): void {
  for(let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for(let magician of magicians) {
    great_magicians.push(`the Great ${magician}`);
  }
  return great_magicians;
}

// original array
console.log("Original array:");
show_magicians(magicians);

// modified array with "the Great" added
console.log("Modified array with 'the Great' added:");
let great_magicians = make_great([...magicians]);
show_magicians(great_magicians);
