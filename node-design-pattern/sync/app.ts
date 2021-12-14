import EventEmitter from "events"
const et = new EventEmitter()

et.on("click",()=>{
    console.log("click")
})

et.emit("click")

console.log("123")