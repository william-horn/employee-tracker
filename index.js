/*
==========
| SERVER |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            index.js
? @doc-created:         06/30/2022
? @doc-modified:        06/30/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Employee database tracker for employee management

==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================
==================================================================================================================================
*/

require('console.table');
const { prompt } = require('inquirer');
const dbRender = require('./lib/db-render');

const getOptionsInfo = () => {
    return prompt({
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
                value: "addDepartmentOption",
            },
            {
                name: "Add a Role",
                value: "addRoleOption",
            },
            {
                name: "Add an Employee",
                value: "addEmployeeOption",
            },
            {
                name: "Update an Employee Role",
                value: "updateEmployeeRoleOption",
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
        const { option } = (await getOptionsInfo());

        if (option === 'quit') {
            console.log('Goodbye!');
            return;
        }

        const renderOption = dbRender[option];
        if (renderOption) await renderOption();
    }

}

init();