
const inquirer = require('inquirer');
const db = require('./connection/mysql-connection');

const getOptionsInfo = async () => {
    return await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    });
}


getOptionsInfo();



