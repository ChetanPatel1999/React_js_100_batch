// import a from './08_demo.js'
import age from './08_demo.js'   // default export import
import { a } from './08_demo.js'
import { height as h } from './08_demo.js';

import { add } from './08_demo.js'
let b = 50;
console.log(b);
console.log(age);  // here accese name
console.log(a);
console.log(h);

add(12, 10)