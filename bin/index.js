#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// tasks file route
const JSON_FILE = path.resolve(process.cwd(),'tasks.json');

// tasks statuses
const STATUSES = {
    todo:"todo",
    inProgress:"in progress",
    done:"done"
};

// helper functions
const readTasks = () => {
    if(!fs.existsSync(JSON_FILE)){
        return[];
    }
    const data = fs.readFileSync(JSON_FILE,'utf-8');
    return JSON.parse(data||'[]');
}

const writeTasks = (tasks) => {
    fs.writeFileSync(JSON_FILE,JSON.stringify(tasks,null,2),'utf-8');
}

// tasks operations
const addTask = (description) => {
    const tasks = readTasks();
    const id = tasks.length ? tasks[tasks.length-1].id + 1 : 1;
    const newTask = {
        id,
        description,
        status:STATUSES.todo,
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Task added successfully (ID:${id})`);
}

const listTasks = (filter='all') => {
    const tasks = readTasks();
    const filteredTasks = filter === 'all'
    ? tasks
    : tasks.filter((task) => task.status === filter);
    if(!filteredTasks.length){
        console.log(`No tasks found with status: ${filter}`);
        return;
    }
    console.log('Tasks:');
    filteredTasks.forEach((task) => {
        console.log(
            `ID: ${task.id}, Description: "${task.description}", Status: ${task.status}, Updated: ${task.updatedAt}`
        );
    });
}


// CLI handler
const main = () => {
    const [,,command,...args] = process.argv;
    switch(command){
        case'add':
            if(args.length===1){
                addTask(args[0]);
            }else{
                console.log('Usage: task-cli add "Task Description"');
            }
            break;
        case 'list':
            listTasks(args[0]||'all');
            break;
        default:
            console.log(`
                Usage:
                task-cli add "Task description"
                task-cli list [all|todo|in-progress|done]
                task-cli update <Task ID> "New Description"
                task-cli delete <Task ID>
                task-cli mark-in-progress <Task ID>
                task-cli mark-done <Task ID>
            `);
    }
};

main();