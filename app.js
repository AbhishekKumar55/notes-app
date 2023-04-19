const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
let a = 5;
a =7;
console.log(a)

yargs.version('1.1.0')
//create addd command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
title:{
    describe:'Note title',
    demandOption:true,
    type:'string'
},
body:{
    describe:'note body',
    demandOption:true,
    type:'string'
}
    },
    handler(agrv){
        notes.addNote(agrv.title, agrv.body)
    }
})
//remove command
yargs.command({
    command: 'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'

        }
    },
    handler(agrv){
        notes.removeNote(agrv.title)
    }
})
//list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        notes.listNode()
    }
})
//read commandd
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(agrv){
        notes.readNote(agrv.title)
    }
})
yargs.parse()
