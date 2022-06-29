
const dbQuery = require('../lib/db-query');

const viewDepartments = async () =>
    console.table(await dbQuery.getAllDepartments());

const viewRoles = async () =>
    console.table(await dbQuery.getAllRoles());

const viewEmployees = async () => 
    console.table(await dbQuery.getAllEmployees());

module.exports = {
    viewDepartments,
    viewRoles,
}
