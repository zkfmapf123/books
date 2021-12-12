import Event from 'events'

// function
function findPatterns(files: Array<string>, regex: string) {

    const emitter = new Event()
    
    files.forEach((item)=>{
        if(item.includes(regex)){
            emitter.emit('find',`${item} to correct ${regex}`)
        }
    })

    emitter.emit('not find',regex)

    return emitter;
}

findPatterns(['leedonggyu','limjeahyock','kimgdfafd'],'gyu')
.on('find',(value)=>{console.log(value)})
.on('not find',(value)=>{console.log(value)})
// 비동기적으로 운용을 할시에는 error를 꼭 만들어야 한다.

// class
