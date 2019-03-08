/*
Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
*/


var nums = [3,2,2,3]
var valueToBeRemoved = 3
function removeElementFromArray(arr,target){
var m = -1
for (var i=0; i< arr.length;i++){
	if(arr[i] != target){arr[m++] = arr[i];}
}
console.log("New Array: " + arr)
return m
}

console.log(removeElementFromArray(nums,valueToBeRemoved))