// Write your solution here!
// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat (y) {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat(name) {
    let cats2 = cats.slice();
    cats2.push(name);
    return cats2;
}

function  prependCat(name){
    let cats2 = cats.slice();
    cats2.unshift(name);
    return cats2;
}

function removeLastCat() {
    let cats2 = cats.slice();
    cats2.pop();
    return cats2; 
}

function removeFirstCat() {
    let cats2 = cats.slice();
    cats2.shift();
    return cats2;
}

console.log(appendCat("Binx"));
console.log(prependCat("Lion-O"));
console.log(removeLastCat(cats));
console.log(removeFirstCat(cats));

