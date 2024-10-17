// array
const myArr1 = [0,1,2,3,4,5]
const myArr2 = new array(1,2,3,4) // this will automatically consider this ina square bracket.

console.log(myArr1[3]);

// array methods
// myArr1.push(6)
// myArr1.pop(7)

// myArr1.unshift(9)
// myArr1.shift(9)

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(4));

const newArr1 = myArr1.join()

console.log(myArr1);
console.log(typeof newArr1);

// slicing in array, splice  
console.log ("A",myArr1);

const myn1 = myArr1.slice(1,3)

console.log(myn1);
console.log("B",myArr1);

const myn2 = myArr1.splice(1,3)
console.log("c",myArr1);
console.log(myn2);

