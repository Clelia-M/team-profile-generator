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

inquirer.prompt([
    { // manager's name
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?"
}, 
{ // manager's id
    type: 'input',
    name: 'id',
    message: "what is the team manager's employee ID?",
},
{ // manager's email
    type: 'input',
    name: 'email',
    message: "What is the team manager's email address?"
}, 
{ // manager's office number
    type: 'input',
    name: 'officeNumber',
    message: "What is the team manager's office number?"
},

]).then(response => {
    // populate manager info
    // promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}