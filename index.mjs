#!/usr/bin/env  
import fs from 'fs'
import yargs from 'yargs'

const {argv} = yargs(process.argv)
let command  = argv._[2]
let text = argv._[3]
 
switch (command) {
    case 'add':
        addTask(text)
        break;
    case 'list':
        getAllTasks(argv._[3])
        break;
    case 'delete':
        deleteTask(text)
        break;
    case 'update':
        updateTask(text,argv._[4])
        break;
    case 'mark-in-progress':
    case 'mark-done':
        changeStatus(text,command)
        break;
    default:
        console.log("nothing to implement type -h for help")
        break;
}
 
function getTasks(){
    let data = fs.readFileSync('tasks.json','utf-8')
    data ? data = JSON.parse(data): data = []
    return data
}
function getAllTasks(option){
    fs.readFile('tasks.json','utf8',(err,data)=>{
        if(err) console.log("something went wrong! ",err.message)
        else{
            
            let objects = JSON.parse(data)
              
            if(option!== undefined){ 
                objects = objects.filter(item=>item.status==option) 
                
            }
            console.log(JSON.stringify(objects,null,2));
            
        }
    })
}

function updateTask(id=null,desc=null){
    if(id==null || desc==null){
        console.log("there's a missing information")
        return
    }
    let tasks = getTasks()
    let index = tasks.findIndex(task=>task.id==id)
    if(index==-1){
        console.log("no task in this ID")
        return
    }
    tasks[index].description = desc
    tasks[index].updatedAt = new Date()
    fs.writeFileSync('tasks.json',JSON.stringify(tasks))
    console.log("updated successfully")
     
}

function changeStatus(id,command){
    if(id==null){
        console.log("enter the id of task you want to change ya 3asel")
        return;
    }
    let tasks = getTasks()
    let index = tasks.findIndex(task => task.id == id)
    if(index==-1){
        console.log("no task with this ID ya Pro")
        return
    }
    console.log(index)
    tasks[index].status = command.substring(command.indexOf('-')+1)
    fs.writeFileSync('tasks.json',JSON.stringify(tasks))
    console.log("done")
}



function deleteTask(id){
    let tasks =  getTasks()
    let ntasks = tasks.filter((item)=>item.id != id)
    fs.writeFileSync('tasks.json',JSON.stringify(ntasks))
    console.log("deleted ya m3alem")
}

function genId(data){
    if(data.length==0) return 1
    let Ids = data.map((item)=>item.id)
    return Ids[(Ids.length) - 1] + 1
}

function addTask(task){
    let tasks =  getTasks()
    let data = {
    id: genId(tasks),
    description: task,
    status: "todo",
    createdAt : new Date(),
    updatedAt : null,
    }

    tasks.push(data)
    let jsondata = JSON.stringify(tasks)
    fs.writeFile('tasks.json',jsondata,(err)=>{
        if(err) console.log("something went wrong!")
        else console.log("task added successfully")
    })
}

 
// let fileContent = fs.readFileSync('tasks.json','utf8')
 
 
