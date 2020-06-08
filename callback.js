let call = function  calculator(a, b, callback) {
    callback(a, b)
}


call(5, 5, (a, b) => {
    console.log(a + b)
})

call(5, 5, (a, b) => {
    console.log(a - b)
})

let arr = [1, 2, 3, 4, 5]

let check = (x) => x%2 ? console.log("odd") :  console.log("even")

arr.forEach(check)