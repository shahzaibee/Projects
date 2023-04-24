let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}

show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
