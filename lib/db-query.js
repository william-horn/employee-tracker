
const db = require('../connection/mysql-connection');

const promiseQuery = async queryStatement => 
    (await db.promise().query(queryStatement))[0];

const getAllDepartments = () => 
    promiseQuery('SELECT * FROM department;');

const getAllEmployees = () => 
    promiseQuery('SELECT * FROM employee;');
    
const getAllRoles = () => 
    promiseQuery('SELECT role.*, department.name FROM role LEFT JOIN department ON role.department_id = department.id;');


module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
}