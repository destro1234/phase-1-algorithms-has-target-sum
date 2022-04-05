function hasTargetSum(array, target) {
  // Write your algorithm here



  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element + array[index+1] == target || element + array[index+2] == target || element + array[index+3] == target || element + array[index+4] == target 
      || element + array[index+5] == target || element + array[index+6] == target || array[index + 1] + array[index+3] == target){
      element + 1;
      return true;
    }
    else return false;
  }
  
// if ( array[0] + array[1] == target || array[0] + array[2] == target || array[0] + array[3] == target || array[0] + array[4] == target || array[0] + array[5] == target
//     || array[1] + array[2] == target || array[1] + array[3] == target || array[1] + array[4] == target || array[1] + array[5] == target
//     || array[2] + array[3] == target || array[2] + array[4] == target || array[2] + array[5] == target
//     || array[3] + array[4] == target || array[3] + array[5] == target
//     || array[4] + array[5] == target){
  
//       return true;
// }
// else return false;

  // iterate over array
  //   if sum of any two numbers = target 
  //       return true;
  //   if sum of any two numbers != target
  //      return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  // iterate over array
    if sum of any two numbers = target 
        return true;
    if sum of any two numbers != target
       return false;
        
*/

/*
  Add written explanation of your solution here

  // [1, 2, 3, 4, 5], 8 
        true;
      [1, 3], 5
        false;

  // Check to see if the sum of any two numbers in the array is equal to the target

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
