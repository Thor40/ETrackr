const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'NJKosik7794!',
    database: 'employment_db'
});

connection.connect(err => {
    if (err) throw err;
    promptUser();
    // console.log('connected as id ' + connection.threadId + '\n');
});

promptUser = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ]).then(
        function(answers) {
            console.log(answers.choice)
            switch (answers.choice) {
                case 'view all departments':
                    viewDepartment();
                    break;
                case 'view all roles':
                    viewRole();
                    break;
                case 'view all employees':
                    viewEmployee();
                    break;
                case 'add a department':
                    queryDepartment();
                    break;
                case 'add a role':
                    queryRole();
                    break;
                case 'add an employee':
                    queryEmployee();
                    break;
                case 'update an employee role':

                    break;
                default:
                    console.log('Make a better choice!')
                    promptUser();
                    break;
            }
        }
    )
    // console.log('Make your Choice!');
};

function viewDepartment() {
    const query = `SELECT * FROM departments`;
    connection.query(query, function(err, results) {
        console.table(results);
        promptUser();
    });
};

function viewRole() {
    const query = `SELECT role.id, role.title, role.salary, departments.name AS department
                    FROM role
                    LEFT JOIN departments
                    ON role.department_id = departments.id`;
    connection.query(query, function(err, results) {
        if(err) throw err;
        console.table(results);
        promptUser();
    });
};

function viewEmployee() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, concat(manager.first_name,' ', manager.last_name) AS manager
                    FROM employee
                    LEFT JOIN employee manager
                    ON employee.manager_id = manager.id
                    LEFT JOIN role
                    on employee.role_id = role.id;`
    connection.query(query, function(err, results) {
        if(err) throw err;
        console.table(results);
        promptUser();
    });
};

function queryDepartment() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department title?",
        }
    ]).then( 
        function(answer) {
        console.log(answer.department)
        addDepartment(answer.department);
    });
};

function addDepartment(answer) {
    const query = `INSERT INTO departments (name) VALUES (?)`;
    const params = [answer];

    connection.query(query, params, function(err, results) {
        if(err) throw err;
        promptUser();
    })
};

function queryRole() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role title?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the role salary?",
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department ID?",
        },
    ]).then( 
        function(answer) {
        console.log(answer, 'prompt')
        addRole(answer);
        });
};

function addRole(role) {
    console.log(role, 'addrole')
    const query = `INSERT INTO role SET ?`;
    const params = role;

    connection.query(query, params, function(err, results) {
        if(err) throw err;
        promptUser();
    })
};

function queryEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name?",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the role ID?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the manager ID?",
        },
    ]).then( 
        function(answer) {
        console.log(answer, 'prompt')
        addEmployee(answer);
        });
};

function addEmployee(employee) {
    console.log(employee, 'addrole')
    const query = `INSERT INTO employee SET ?`;
    const params = employee;

    connection.query(query, params, function(err, results) {
        if(err) throw err;
        promptUser();
    })
};