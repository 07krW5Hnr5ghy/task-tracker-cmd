#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// tasks file route
const JSON_FILE = path.resolve(process.cwd(),'tasks.json');

// read tasks
const readTasks = () => {
    if(!fs.existsSync(JSON_FILE)){
        return[];
    }
    const data = fs.readFileSync(JSON_FILE,'utf-8');
    return JSON.parse(data||'[]');
}

// CLI handler
const main = () => {
    const [,,command,...args] = process.argv;
    switch(command){
        case'list':
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