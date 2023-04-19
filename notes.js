const fs=require('fs')
const chalk=require('chalk')



 const addNote=(title,body)=> {
    const notes = loadNotes()
const duplicateNote=notes.find((note)=>note.title===title)

debugger


if(!duplicateNote)
{
    notes.push({
        title: title,
        body:body
    })
saveNotes(notes)
console.log(chalk.green.inverse('new note added'))
}else{
console.log(chalk.red.inverse('Note title taken!'))
}
}


const saveNotes=(notes)=>{
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}



const loadNotes=()=>{
try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}catch(e){
return []
}
}

const removeNote=(title)=>{
const notes=loadNotes()

const matchNotes=notes.filter((note)=>note.title==title)
if(matchNotes.length!==0)
{
    const newNote=notes.filter((notes)=>notes.title!=title)
    saveNotes(newNote)
    console.log(chalk.green.inverse("Note removed"))
}else {
    console.log(chalk.red.inverse("no note found"))
}
}

const listNode=()=>{
    const notes=loadNotes()
    console.log(chalk.green.inverse('your notes'))
    notes.forEach((note)=>console.log(note.title))

}

const readNote=(title)=>{
const notes=loadNotes()
const available=notes.find((note)=>note.title==title )
if(available)
{
console.log(chalk.green.inverse(available.title))
console.log(available.body)
}else{
    console.log(chalk.red.inverse("No note found"))
}
}


module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNode:listNode,
    readNote:readNote
}