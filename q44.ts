function make_sandwich(...items: string[]) {
    console.log(`Here's your sandwich with: ${items.join(', ')}. Enjoy!`);
  }
  
make_sandwich('turkey', 'lettuce', 'mayo');
make_sandwich('peanut butter', 'jelly');
make_sandwich('bacon', 'egg', 'cheese', 'avocado');
