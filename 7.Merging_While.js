/*
Merge Two Arrays (While Loop).
1. Understand Case and solution with WhiteBoard.
2. Make three arrays.
3. Use while Loop to Merge element.

        *. Compare this logic with last one
*/

let arr1 = [3, 7, 12, 34, 56, 90];
let arr2 = [20, 30, 40, 50];
let arr3 = []
let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d1 < arr1.length && d2 < arr2.length) {
        if (arr1[d1] < arr2[d2]) {
                arr3[d3] = arr1[d1];
                d1++;
                // console.log(arr3[d3]);

        } else {
                arr3[d3] = arr2[d2];
                d2++;
                // console.log(arr3[d3]);
        }
        d3++;
}
// console.log(d1);
while (d1 < arr1.length) {
        arr3[d3] = arr1[d1];
        d1++;
        d3++
}
console.log(arr3);

