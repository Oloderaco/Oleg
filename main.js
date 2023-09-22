// 1.1

let getNumber = +prompt('number');
let getDegree = +prompt('degree');
let getResult = 1

for (let i = 0; i < getDegree; i++) {
    getResult *= getNumber
}
console.log(getResult);

// 1.2

let oleg = prompt('1')
let anton = prompt('2')
let lexa = prompt('3')
let getRes = ''


for (let i = 1; i < oleg; i++) {
    console.log(getRes + lexa);
    getRes += anton
}

// 1.3

let stuff = prompt('write in english pls :)');
let counter = +prompt('quantity');
let getPost = '';

for (let i = 1; i <= counter; i++) {

    if (i == 1) {
        console.log(i + ' ' + stuff);
    } else if (counter => 1) {
        console.log(i + ' ' + stuff + 's');
    } else {
        console.log('Something went wrong...');
    }

}