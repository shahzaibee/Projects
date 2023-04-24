let current_users = ["alice", "bob", "charlie", "david", "eve"];
let new_users = ["frank", "bob", "harry", "David", "Gina"];

for (let i = 0; i < new_users.length; i++) {
  let username_exists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      username_exists = true;
      break;
    }
  }
  if (username_exists) {
    console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
  } else {
    console.log("The username '" + new_users[i] + "' is available.");
  }
}
