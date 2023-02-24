const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Empty array to store the team members
const employees = [];


// MANAGER SECTION CODE
inquirer.prompt([
    { // manager's name
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: input => {
            if(!input) {
                return "Please enter a name";
            }
            return true;
        }
    },
    { // manager's id
        type: 'input',
        name: 'id',
        message: "what is the team manager's employee ID?",
        validate: input => {
            if(!input) {
                return "Please enter an employee ID";
            }
            // check if input is a number
            if (isNaN(input)) {
                return "Please enter a valid employee ID";
            } 
            return true;
        }
    },
    { // manager's email
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
        validate: input => {
            if (!input) {
                return "Please enter an email address";
            }
            // check if input is a valid email format
            if (!/\S+@\S+\.\S+/.test(input)) {
                return "Please enter a valid email address";
            }
            return true;
        }
    },
    { // manager's office number
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: input => {
            if (!input) {
                return "Please enter an office number";
            }
            // check if input is a number
            if (isNaN(input)) {
                return "Please enter a valid office number";
            }
            return true;
        }
    },

]).then((response) => {
    // populate manager info
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(manager);
    // promptForNexEmployee ()
    promptForNextEmployee();
})

// NEXT EMPLOYEE SECTION CODE
const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
        type: 'list',
        name: 'role',
        message: "What type of team memeber would you like to add?",
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
    },
    ]).then((response) => {
        // if engineer
        if (response.role === 'Engineer') {
            // promptForEngineer
            promptForEngineer();
            // else if intern
        } else if (response.role === 'Intern') {
            // promptForIntern
            promptForIntern();
        } else {
            // use the functionality from page-template to generate the team
            buildPage();
        }
    });
};

// ENGINEER SECTION CODE
const promptForEngineer = () => {
    inquirer.prompt([
        { // engineer's name
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        { // engineer's id
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
        },
        { // engineer's email
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        { // engineer's GitHub
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        },
    ]).then((response) => {
        // add new engineer to employees array
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
        // promptForNextEmployee
        promptForNextEmployee();
    });
};

// INTERN SECTION CODE
const promptForIntern = () => {
    inquirer.prompt([
        { //intern questions
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        { // intern's id
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
        },
        { // intern's email
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        { // intern's school
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        },
    ]).then((response) => {
        // add new intern to employees array
        const newIntern = new Intern(response.name, response.ide, response.email, response.school);
        // promptForNextEmployee
        promptForNextEmployee();
    });
};

const buildPage = () => {
    // render(myArrayOfTeamMembers)
};