"use strict"; //treat all js code as newer version
 

let x = 2, y = 'shafin'

console.table([x, y])

// ECMA 

// undefined === not assigned variable

// primitive and non-primitive

//

console.log(-x);

console.log("1" + 2 + 2);    // 122
console.log(2 + 2 + '1');    // 41

// == --> No datatype concern
/// === --> datatype concern

// null --> Object

const name = new String("shafin")

console.log(name.charAt(2));
console.log(name.indexOf("f"));

const newName = name.substring(2, 3)
console.log(newName);


const spName = '       shafin       '.trim()
console.log(spName);

const arr = [1, 2, 7, 5, 8]

console.log(arr);
arr.push(4);
console.log(arr);

// concat 
// alternative --> const newArr = [...arr1, ...arr2, ...arr3]
// flat 

// Array.isArray
// Array.from
// Array.of

const coding = ['asm', 'java', 'py', 'js']

coding.forEach( (...item) => {
    console.log(item);
    
})

// () => {} must use return keyword

// () => () not use return keyword