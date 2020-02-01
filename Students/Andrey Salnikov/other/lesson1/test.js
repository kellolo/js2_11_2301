/*let a = 10;
const b = 20;


function doSum (val1, val2) {
    return val1 + val2
}

console.log (doSum (a, b))
*/

/*let vasya = {
    name: 'Vasya',
    sayHi: function() {
        console.log (`Hello! I am ${this.name}`)
    },
    sayHi2: petya.sayHi ()
}*/

let petya = {
    name: 'Pyotr',
    sayHi: () => {
        console.log (`Hello! I am ${this.name}`)
        console.log (this)
    }
}

let vasya = {
    name: 'Vasya',
    sayHi: function() {
        console.log (`Hello! I am ${this.name}`)
        console.log (this)
    }
}
vasya.sayHi()
petya.sayHi()