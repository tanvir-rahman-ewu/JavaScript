let prom = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        resolve('hello')
    }, 3000)

}).then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})

