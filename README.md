# ETrackr
Employment database interface

## Table of contents
--------------------
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Testing](#testing)
* [Features](#features)

## General info
--------------------
This project was created as an exercise practicing creating a database using MySQL and actively altering teh database with command-line user input.
	
## Technologies
--------------------
Project is created with:
* Inquirer verison: 7.1.0
* MySQL2 version: 2.1.0
* Console.Table version: 0.10.0
	
## Setup
--------------------
### To run this project, make sure to install [MySQL](https://www.mysql.com/downloads/) 

install the following locally using npm:

```
$ cd ../dir
$ npm init
$ npm install --save mysql2
$ npm install inquirer
$ npm install console.table --save
```

## Testing
--------------------
(You may need to seed the database first)
to do so run the cmd console, then go to the db directory,
while logged into MySQL
```
source schema.sql
source seeds.sql
```
### To test this project, run the following in the terminal:
```
$ npm start
```
While server is running, the appriopriate promts should show,
each returning to the main menu after a select is completed.

--------------------

Alternatively, visit the instructional video [GoogleDrive url](https://notetakrr.herokuapp.com/):
```
https://notetakrr.herokuapp.com/
```
## Features
--------------------
### Features include:
* Shows all departments
* Shows all roles
* Shows all employees
* Allows add department
* Allows add role (feature broken)
* Allows add employee (feature broken)
* Allows update employee (feature broken)