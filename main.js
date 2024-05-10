#! /usr/bin/env node
import inquirer from 'inquirer';
let Todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([{
            name: 'todo',
            type: 'input',
            message: 'what would you like to add in your todos?'
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'Do you want to add more?',
            default: 'false'
        }
    ]);
    Todos.push(addtask.todo);
    condition: addtask.addmore;
    console.log(Todos);
}
