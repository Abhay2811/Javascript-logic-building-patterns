 // **********
 // *        *
 // *        *
 // *        *
 // *        *
 // *        *
 // *        *
 // *        *
 // *        *
 // **********


let max = 10;

for (let i = 1; i<=max; i++) {
  newline = " ";
  for (let j = 1; j<=max; j++) {
    if (j === 1 || j === max || i === 1 || i === max) {
      newline += "*";
    } else {
      newline += " ";
    }
  } 
  console.log(newline);
}


// *****
// ****
// ***
// **
// *

let max = 5; 

for (let i=1; i<= max; i++) {
    let newline = "";
    for (let j = 0; j<= max-i; j++) {
      newline += "*";
    }
    console.log(newline);
} 


// *****
//  ****
//   ***
//    **
//     *

let max = 5;

for (let i=1; i<=max; i++) {
  let newline = "";
  for(let space = 1; space<i; space++) {
    newline += " ";
  }
  for(let j=0; j<=max-i; j++) {
    newline += "*";
  }
  console.log(newline);
}

