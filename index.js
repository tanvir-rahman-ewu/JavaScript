///javascript function

function add1(x, y)
{
    return x + y;
}

console.log(add1(1, 2));

let add2 = function(x,y)
{
    return x + y;
}

console.log(add2(1, 2));

let add3 = (x, y) => {
    return x + y;
}

console.log(add3(1, 2));

let add4 = (x, y) => x + y;

console.log(add4(1, 2));