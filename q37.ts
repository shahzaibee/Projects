function make_shirt(size = "L", message = "I love TypeScript") {
    console.log("The shirt is size " + size + " and has the message: " + message);
  }
  
  make_shirt(); // Large shirt with default message
  make_shirt("M"); // Medium shirt with default message
  make_shirt("XL", "JavaScript is awesome!"); // Extra-large shirt with custom message
  