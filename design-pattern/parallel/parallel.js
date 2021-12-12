const task1 = () =>{
    setTimeout(()=>{
        console.log('taks1')
    },1000);
}

const taks2 = () =>{
    console.log("123")
}

function execute(){
    process.nextTick(task2)
    taks1()
}

execute()