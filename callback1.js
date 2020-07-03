let add = (a, b) => a + b;
let sub = (a, b) => a > b ? a-b : b - a;


let calc = (a, b, callback) =>{
   return callback(a, b);
}

let x = calc(5, 5, add);

console.log(x);