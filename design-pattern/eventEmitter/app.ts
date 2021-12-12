import Event from 'events'
import { EventEmitter } from 'stream'

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

// class -> 관찰가능한 클래스
// 에러는 바로 return으로 던져줘야 한다.
class FindName extends EventEmitter {

    constructor(
        private readonly names: Array<string>,
        private readonly regex: string
    ){
        super()
    }

    find(): this{
        this.names.forEach((item)=>{
            
            if(item.includes(this.regex)){
                this.emit('find','correct')
                
                this.emit('find','find')
            }else{
                return this.emit('error',`not find`)
            }
        })

        return this
    }
}

const findname = new FindName(['lee','dong','gyu'],'gyu')
findname
.find()
.on('find',value=>console.log(value))
.on('error',err => console.error(err))

/**
 * eventEmitter vs callback
 */

