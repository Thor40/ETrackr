
INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lead Sales', '150000', 1),
    ('Salesperson', '80000', 1),
    ('Lead Engineer', '200000', 2),
    ('Software Engineer', '90000', 2),
    ('Accountant', '125000', 3),
    ('Legal Team Lead', '250000', 4),
    ('Lawyer', '190000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, null),
    ('Samantha', 'Smith', 2, 1),
    ('Leonia', 'Clasen', 3, null),
    ('Will', 'Pinson', 4, 3);
