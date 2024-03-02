/*
Search Element in Array
1. Understand Case and solution with WhiteBoard.
2. Make array.
3. Use loop to Search element.
4. Search element with text input and button.

        *. Shortcut for Search element(Default Function).
        *. Shortcut for Delete element(Default Function).
*/

let arr = [20, 10, 30, 40, 10, 50, 60]
let item = 10;
let index = undefined;
let index2 = undefined;
for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        // console.log(i, arr[i]);
        if (arr[i] === item) {
                if(index === undefined){
                        index = i
                        // break
                }else if(index2 === undefined){
                        index2 = i;
                        break
                }
        }
}
// if(index !== undefined && index2 !== undefined){
//         console.log(index, index2);
// }
console.log(index, index2);