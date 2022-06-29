
const inquirer = require('inquirer');
const dbRender = require('./lib/db-render');

const getOptionsInfo = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                name: "View all Departments",
                value: "viewDepartments",
            },
            {
                name: "View all Roles",
                value: "viewRoles",
            },
            {
                name: "View all Employees",
                value: "viewEmployees",
            },
            {
                name: "Add a Department",
                value: "addDepartment",
            },
            {
                name: "Add a Role",
                value: "addRole",
            },
            {
                name: "Add an Employee",
                value: "addEmployee",
            },
            {
                name: "Update an Employee Role",
                value: "updateEmployeeRole",
            },
            {
                name: "Quit",
                value: "quit",
            }
        ]
    });
}

const init = async () => {

    while (true) {
        const option = (await getOptionsInfo()).option;

        if (option === 'quit') {
            console.log('Goodbye!');
            break;
        }

        const renderOption = dbRender[option];
        if (renderOption) await renderOption();
    }

}

init();