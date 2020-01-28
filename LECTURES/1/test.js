// < es6 ----- var
// vars: sm (undefined), ...

// console.log (sm) //undefined // (let, const) --- error
// let sm = 0

// let a = 10
// const b = 20


// function doSum (val1, val2) {
//     return val1 + val2
// }

// console.log (doSum (a, b))

// const a = 0 // true// null // 'str'

// const b = [] // {} b.push (1) b === [1], b [100] = 'azaza' 
// let name = par => {
//     par = par + 1
//     return par
// }

// let doSum = (val1, val2) => val1 + val2

// let some = (p1, p2) => ({sv1: p1, sv2: p2 + 100})



let petya = {
    name: 'Pyotr',
    sayHi: () => {
        console.log (`Hello! I am ${this.name}`)
        console.log (this)
    }
}

let vasya = {
    name: 'Vasya',
    sayHi: function () {
        console.log (`Hello! I am ${this.name}`)
        console.log (this)
    }
}

vasya.sayHi ()
petya.sayHi ()
