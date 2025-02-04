/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

///need to use "new"
function catBuilder(name, color, toys) {
  this.name = name;
  this.color = color;
  this.toys = toys;
}

const cat1 = new catBuilder("Garfield", "golden", ["scratching-post", "yarn"]);
console.log(cat1);

///do not need to use "new"
function catBuilderAlt(name, color, toys) {
  // Define desired object
  var obj = {
    name: name,
    color: color,
    toys: toys,
  };
  return obj;
}

const cat2 = catBuilderAlt("Whiskers", "rainbow", ["poptarts"]);
console.log(cat2);
