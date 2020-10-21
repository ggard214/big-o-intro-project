function firstAnagram(str1, str2) {
  let array1 = str1.split("");
  let array2 = str2.split("");

  for (let i = 0; i < array1.length; i++) {
    let index = array2.indexOf(array1[i]);
    if (index >= 0) {
    array2.splice(index, 1);
    }
  }
  console.log(array2, array1);

  if (array2.length > 0) {
    return false;
  } else {
    return true;
  }
  }
console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));    // => true


function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
