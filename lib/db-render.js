
const { prompt } = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
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
        message: 'Enter the name of your department:'
    });

    await addDepartment(department);
    console.log(`\nAdded department: "${department}"\n`);
    await viewDepartments();
}

const addRoleOption = async () => {

    const departments = (await getAllDepartments())
        .map(department => ({
            name: department.name,
            value: department.id,
        }));

    const { 
        roleName,
        roleSalary,
        roleDepartment
    } = await prompt([
        {
            name: 'roleName',
            message: 'Enter the name of your role:'
        },
        {
            name: 'roleSalary',
            message: 'Enter the salary for your role:'
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Choose a department for your role:',
            choices: departments
        },
    ]);

    await addRole([roleName, roleSalary, roleDepartment]);
    await viewRoles();
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartmentOption,
    addRoleOption,
}
