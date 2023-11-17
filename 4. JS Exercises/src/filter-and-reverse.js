/**
 * This utility function should create a shallow copy of the reversed array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided callbackFn function.
 *
 * Parameters:
 *  array: The array will be a numeric array and can also be empty.
 *  callbackFn: A function to execute for each element in the array. It should
 *  return a truthy value to keep the element in the resulting array, and a falsy
 *  value otherwise. The function is called with the following
 *      arguments:
 *          element - The current element being processed in the array.
 *          index - The index of the current element being processed in the array.
 *  for example the callbackFn can filter odd or even numbers.
 *
 * @param {Array} array the array
 * @param {Function} callbackFn the callback function
 * @return {Array} the filtered and reversed array.
 */

// Define a callback function to filter even numbers in even index loc
function filterNum(element, index) {
    return element % 2 === 0 && index % 2 === 0;
}

export const filterAndReverse = (array, callbackFn) => {
   if (!Array.isArray(array)) {
        // If the input is not an array, return an empty array.
        return [];
    }
    // Create a shallow copy of the original array
    const copyArray = [...array];

    // Filter the copied array based on the provided callback function
    const filteredArray = copyArray.filter((element, index) => callbackFn(element, index));

    // Reverse the filtered array
    const reversedArray = filteredArray.reverse();

    return reversedArray;
    
    // If new array & unshift can be used, uncomment below
    /** 
    const myArray = [];
    for (const x of array) {
        if (callbackFn(x)) {
            myArray.unshift(x); //unshift to add in front of array
        }
    }
    return myArray;
    **/
    // If new array, push and reverse used, uncomment below
    /**
    const myArray = [];
    for (const x of array) {
        if (callbackFn(x)) {
            myArray.push(x); //added to array at the end
        }
    }
    return myArray.slice().reverse(); //slice will make a copy and reverse will be done on shallow copy
    **/
}


inp = [4, 8,3,1, -20, -7, 5, 9, -6]
//inp = []
console.log(filterAndReverse(inp, filterNum))
console.log(inp)

inp = []
console.log(filterAndReverse(inp, filterNum))
console.log(inp)
