
const db = require('../connection/mysql-connection');

const promiseQuery = async (queryStatement, ...args) => 
    (await db.promise().execute(queryStatement, ...args))[0];

const getAllDepartments = () => 
    promiseQuery('SELECT * FROM department;');

const getAllEmployees = () => 
    promiseQuery('SELECT employee.first_name, employee.last_name, role.title AS role, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id;');

const getAllRoles = () => 
    promiseQuery('SELECT role.title, role.salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id;');

const addDepartment = name =>
    promiseQuery('INSERT INTO department (name) VALUES (?);', [name]);

const addRole = options =>
    promiseQuery('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);', options);

const addEmployee = options =>
    promiseQuery('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);', options);

const updateEmployeeRole = options =>
    promiseQuery('UPDATE employee SET role_id = ? WHERE id = ?;', options);

module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
}