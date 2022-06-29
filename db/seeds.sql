

USE employees_db;

-- need to seed departments table
INSERT INTO department (name)
VALUES
("Sales"),
("Cleaning"),
("Marketing");

-- need to seed roles table
INSERT INTO role (title, salary, department_id)
VALUES
("Receptionist", 40000, 1),
("Manager", 60000, 2),
("Intern", 12000, 3);

-- need to seed employees table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Swinda", 1, null),
("William", "Clarke", 2, 1),
("Chris", "Baker", 3, 1);

    




