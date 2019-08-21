// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function firstItem(arr, cb) {
  return cb(arr[1]);
 }
 firstItem(items, function(first) {
  console.log(first)
 })


 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
    return cb(items.length)
  // getLength passes the length of the array into the callback.
}

getLength(items, function(length){
console.log(length)
});

function last(arr, cb) {
  return cb(arr[3])
  // last passes the last item of the array into the callback.
}

last(items, function(ln){
  console.log(ln)
});

function sumNums(x, y, cb) {
  cb(x+y)
  
  
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(8, 8, function(sum){
  console.log(sum)
})

function multiplyNums(x, y, cb) {

  cb(x*y)
}
  // multiplyNums multiplies two numbers and passes the result to the callback.


multiplyNums(10, 13, function(product){
  console.log(product)
})

function contains(items, list, cb) {
for(let i=0; i < items.length; i++){

  if(items[i]==items){
  return cb(true)
}
  else return cb(false)

};

}

contains('Pencil', items, function(result){
  
  console.log(result)})

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(new Set(array));
}

removeDuplicates(items, function(uniqueArray) {
  console.log(uniqueArray);
});

removeDuplicates(items, uniqueArray => console.log(uniqueArray));
