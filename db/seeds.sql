
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