
const { prompt } = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment
} = require('../lib/db-query');

const viewDepartments = async () =>
    console.table(await getAllDepartments());

const viewRoles = async () =>
    console.table(await getAllRoles());

const viewEmployees = async () => 
    console.table(await getAllEmployees());

const addDepartmentOption = async () => {
    const { department } = await prompt({
        name: 'department',
        message: 'Enter the name of your department'
    });

    await addDepartment(department);
    console.log(`\nAdded department: "${department}"\n`);
    await viewDepartments();
}

const addRole = async () => {

}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartmentOption,
}
