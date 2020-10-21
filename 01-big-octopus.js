function quadraticBiggestFish(fishes) {
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < fishes.length; i++) {
      if (fishes[i].length > fishes[i + 1]) {
        let temp = fishes[i];
        fishes[i] = fishes[i + 1];
        fishes[i + 1] = temp;
        swap = true;
      }
    }
  }
  return fishes[fishes.length -1];
}
const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fffish",
  "ffiiiiisshh",
  "fsh",
  "fiiiissshhhhhh",
];
// console.log(quadraticBiggestFish(fishies));



function nlognBiggestFish(fishes) {
  if (fishes.length <= 1) {
    return fishes;
  }
  let pivot = fishes.shift();
  let left = [];
  let right = [];

  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i].length < pivot.length) {
      left.push(fishes[i])
    } else {
      right.push(fishes[i]);
    }
  }
  let leftSorted = nlognBiggestFish(left);
  let rightSorted = nlognBiggestFish(right);
  let sortedArray = [...leftSorted, pivot, ...rightSorted];
return sortedArray;
}
console.log(nlognBiggestFish(fishies).pop());


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
