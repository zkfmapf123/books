const t1 = () =>{
    setTimeout(()=>{
        console.log('t1t1t1t1')
    },1000)
}

const t2 = () =>{
    setTimeout(()=>{
        console.log('t2t2t2t2')
    },1000)
}

const t3 = () =>{
    setTimeout(()=>{
        console.log('t3t3t3t3')
    },1000)
}

const t4 = () =>{
    setTimeout(()=>{
        console.log('t4t4t4t4')
    },1000)
}

const t5 = () =>{
    setTimeout(()=>{
        console.log('t5t5tt5')
    },1000)
}

const tasks = [
    t1,
    t2,
    t3,
    t4,
    t5
]

let con = 2, run = 0, complete = 0, index = 0

function finish(){
    console.log('finish')
}

function execute(){
    while(run < con && index < tasks.length){

        let task = tasks[index++]
        task();

        if(complete === tasks.length){
            return finish()
        }else{
            complete++, run--;
        }

        execute()
        //run++;
    };

}

execute()