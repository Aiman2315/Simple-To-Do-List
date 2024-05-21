#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want to add in your Todos?",
            type: "input",
        },
        {
            name: "addmore",
            message: "Do you want to add more?",
            type: "confirm",
            default: "false",
        },
    ]);
    //  console.log(addTask.todo);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
