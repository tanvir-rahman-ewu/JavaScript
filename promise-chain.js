let prom = (val) => new Promise( res => {
    setTimeout(() => {
        res('heloo')
    }, val)
})

prom(3000).then((val)=>{
    console.log(val)
    return val
}).then( res => console.log(res))