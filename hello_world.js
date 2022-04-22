console.time("regular string")
const var_1 = "Try This"
const var_2 = "Try This"
console.log(var_1 === var_2)
console.timeEnd("regular string")

console.time("locale_compare")
const s1 = 'Hello World';
const s2 = 'Hello World';
console.log(s1.localeCompare(s2))
console.timeEnd("locale_compare")

console.time("buffer")
let buf1 = Buffer.from('Hello, World', 'utf8');
let buf2 = Buffer.from('Hello, World', 'utf8');
console.log(Buffer.compare(buf1, buf2)); 
console.timeEnd("buffer")
buf1 = null;
buf2 = null;


console.time('intl.collator()')
const collator_var_1 = "Hello World"
const collator_var_2 = "Hello World"
console.log(new Intl.Collator().compare(collator_var_1, collator_var_2));
console.timeEnd('intl.collator()')