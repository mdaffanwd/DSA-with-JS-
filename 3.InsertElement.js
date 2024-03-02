// Inserting Element in Array
/*
let data = [60, 30, 10, 67, 40]
let newEl = 70;
let position = 2;
for (let i = data.length - 1; i >= 0; i--) {
    console.log(data[i]);
    if (i >= position) {
        data[i + 1] = data[i]
        if(i==position){
            data[i] = newEl
        }
    }
    console.log(data);
}

data.splice(2, 0, newEl)
console.log(data);
*/

/*
let data = [60, 20, 30, 50, 40]
function insertEl() {
    let position = Number(document.getElementById('position').value)
    let newEl = Number(document.getElementById('newEl').value)
    let position = 2    
    let newEl = 2222
    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
            data[i + 1] = data[i];
            if (i == position) {
                data[i] = newEl
            }
        }
    }
    console.log(data);
}
insertEl()
*/

/*
let data = [60, 20, 30, 50, 40]
let position = 2
let position2 = 3

let newEl = 222
let newEl3 = 333
data.splice(position, 0, newEl)
data.splice(position2, 0, newEl3)
console.log(data);
*/

// -------------- Practice 
/*
let data = [60, 20, 30, 50, 40]
let position = 2;
let newEl = 22222;
for (let i = data.length - 1; i >= 0; i--) {
    console.log(i);
    if (i >= position) {
        data[i + 1] = data[i]
        console.log(data);
        if (i == position) {
            data[i] = newEl
        }
    }
    console.log(data);
}

*/