//* --------- 3.InsertElement
/*
let arr = [1,2,3,4,5,6,7,8,9,10]
let position = 2;
let newEl = 222
for(let i = 0; i< arr.length; i++){
    // console.log(i);
    if(i === position){
        arr[i] = newEl
        break
    }
}
console.log(arr);
*/

//* 4.Deletion-of-Element.
/*
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let position = 2;
for (let i = 0; i <= arr.length; i++) {
    if (i === position) {
        arr[i] = arr[i + 1]
        // console.log(arr[i + 1]);
        break
    }
}
console.log(arr);
*/

//* ------- 5.Search Element in Array.
/*
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 70];
let item = 70;
let index, index1;
for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    if (arr[i] === item) {
        if (index === undefined) {
            index = i
        } else if (index1 === undefined) {
            index1 = i
            break
        }
    }
}
console.log(index, index1);
*/              

//* ------- 6. Merging 2 Arrays in a new Array.

let arr = [3, 7, 12, 34, 56, 90];
let arr2 = [20, 30, 40, 50];
let arr3 = [] 

for(let i = 0; i<arr.length; i++){
    arr3[i] = arr[i]
}
for(let i =0; i<arr2.length; i++){
    arr3[arr.length + i] = arr2[i] 
}
console.log(arr3);