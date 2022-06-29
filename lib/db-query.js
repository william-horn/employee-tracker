
const db = require('../connection/mysql-connection');

const promiseQuery = async (queryStatement, ...args) => 
    (await db.promise().execute(queryStatement, ...args))[0];

const getAllDepartments = () => 
    promiseQuery('SELECT * FROM department;');

const getAllEmployees = () => 
    promiseQuery('SELECT * FROM employee;');

const getAllRoles = () => 
    promiseQuery('SELECT role.*, department.name FROM role LEFT JOIN department ON role.department_id = department.id;');

const addDepartment = name =>
    promiseQuery('INSERT INTO department (name) VALUES (?);', [name]);

const addRole = options =>
    promiseQuery('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);', options);

module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
    addDepartment,
    addRole,
}