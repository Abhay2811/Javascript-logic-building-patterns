// 1
// 22
// 333
// 4444
// 55555

let max = 5;
  for (let i = 1; i <= max; i++) {
    let newline = "";
    for (let j = 1; j <= i; j++) {
        newline += i;
    }
    console.log(newline);
  }