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
//console.log(nlognBiggestFish(fishies).pop());


function linearBiggestFish(fishes) {
  
  //return fishes.sort(function (a, b) { return b.length - a.length })[0]
  let lgth = 0;
  let longest;
  for(let i = 0; i< fishes.length; i++){
    if(fishes[i].length > lgth){
      lgth = fishes[i].length;
      longest = fishes[i]
    }
  }
  return longest;
}
//console.log(linearBiggestFish(fishies))

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for(let i = 0; i < tilesArray.length; i++){
    let currentDir = tilesArray[i];
    if(currentDir === direction){
      return i;
    }

  }
}
//console.log(slowDance('right-down', tilesArray))

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
  return tilesObj[direction];
}

console.log(fastDance('up', tilesObj)) ///6
