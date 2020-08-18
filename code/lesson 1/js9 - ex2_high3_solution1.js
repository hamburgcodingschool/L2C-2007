let a = 15;
let b = 21;
let c = 15;

// PRINT ONLY THE HIGHEST VALUE ON SCREEN

if (a > b) {
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}