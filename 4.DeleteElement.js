/*
1. Understand issue and solution with whiteboard.
2. Make array,define the position.
3. Use Loop to delete element.
4. Delete element with text input and button.
*/

/*
let arr = [1,2,3,4,5,6]
let position = 3;
for(let i = position; i<=arr.length - 1; i++){
    console.log(arr[i]);
    arr[i] = arr[i+1]
    console.log(arr[i+1]);
}
arr.length = arr.length -1 
console.log(arr);
*/

// -------- For HTML --
function deleteEl() {
    let arr = [1, 2, 3, 4, 5, 6]
    console.log(arr.length);
    let position = Number(document.getElementById('position').value)
    for (let i = position; i <= arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr); 
    console.log(arr.length); 
}