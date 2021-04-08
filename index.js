// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
// const questions = [];
init();

promptUser().then(function (data) {
  writeToFile(data);
});

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "titleP",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "descriptionP",
      message: "Describe your project.",
    },
 
  ]);
}

// TODO: Create a function to write README file
function writeToFile(data) {
  const fileName = "README.md";
  let fileString = `# ${data.titleP}
## Description
${data.descriptionP}
  `;


  fs.writeFile(fileName, fileString, (err) =>
    err ? console.log(err) : console.log("Generated")
  );
}
// TODO: Create a function to initialize app
function init() {}
