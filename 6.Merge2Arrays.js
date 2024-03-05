/*
Merge Two Arrays.
1. Understand Case and solution with WhiteBoard.
2. Make three arrays.
3. Use 2 Different Loop to Merge element.

        *. Shortcut for Search element(Default Function).
        *. Shortcut for Delete element(Default Function).
*/

// -------- Code.
/*
let arr = [3, 7, 12, 34, 56, 90];
let arr2 = [20, 30, 40, 50];
let arr3 = []
for (let i = 0; i < arr.length; i++) {
    arr3[i] = arr[i]
}
for (let i = 0; i < arr2.length; i++) {
    arr3[arr.length + i] = arr2[i]
}
console.log(arr3);
*/

//* ------------ *Extra
// *-> Reversing the Array.
/*
let arr = [1,2,3,4,5]
console.log(arr.reverse());
*/
let arr = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
// let arr3 = [...arr, ...arr2]
let arr3 = arr.concat(arr2)
console.log(arr3);