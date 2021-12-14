const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("first")
        resolve(50);
    },3000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('second')
        resolve(100)
    },5000)
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('second')
        resolve(30)
    },1000)
});

new Promise.race([p1,p2,p3]).then((value)=>{
    console.log(value)
})