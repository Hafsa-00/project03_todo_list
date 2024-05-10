#! /usr/bin/env node
import inquirer from 'inquirer';
const Todos = [];
async function manageTodos() {
    while (true) {
        const action = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Choose an action:',
                choices: ['Add', 'Delete', 'Replace', 'Read', 'Exit']
            }
        ]);
        switch (action.action) {
            case 'Add':
                const addTask = await inquirer.prompt([
                    {
                        name: 'todo',
                        type: 'input',
                        message: 'What would you like to add to your todos?'
                    }
                ]);
                Todos.push(addTask.todo);
                break;
            case 'Delete':
                const deleteIndex = await inquirer.prompt([
                    {
                        name: 'index',
                        type: 'number',
                        message: 'Enter the index of the task you want to delete:'
                    }
                ]);
                if (deleteIndex.index >= 0 && deleteIndex.index < Todos.length) {
                    Todos.splice(deleteIndex.index, 1);
                }
                else {
                    console.log('Invalid index. Task not deleted.');
                }
                break;
            case 'Replace':
                const replaceIndex = await inquirer.prompt([
                    {
                        name: 'index',
                        type: 'number',
                        message: 'Enter the index of the task you want to replace:'
                    }
                ]);
                if (replaceIndex.index >= 0 && replaceIndex.index < Todos.length) {
                    const replaceTask = await inquirer.prompt([
                        {
                            name: 'todo',
                            type: 'input',
                            message: 'Enter the new task:'
                        }
                    ]);
                    Todos[replaceIndex.index] = replaceTask.todo;
                }
                else {
                    console.log('Invalid index. Task not replaced.');
                }
                break;
            case 'Read':
                console.log('Your todos:', Todos);
                break;
            case 'Exit':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid action. Please choose a valid action.');
        }
    }
}
manageTodos();