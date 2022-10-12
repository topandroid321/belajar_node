import {EventEmitter} from "events";


const emitter = new EventEmitter();

emitter.addListener("pesan",(role)=> {
    console.info(`Hallo ${role}`)
})

emitter.addListener("pesan",(role)=> {
    console.info(`Silahkan Mau Cari Apa ${role}`)
})



emitter.emit("pesan","Guru")

