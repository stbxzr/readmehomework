// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
// const questions = [];
init();

promptUser().then(function (data) {
  console.log("here");
  writeToFile(data);
});

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ]);
}

// TODO: Create a function to write README file
function writeToFile(data) {
  const fileName = "README.md";
  let fileString = "# Project Title";

  fs.writeFile(fileName, fileString, (err) =>
    err ? console.log(err) : console.log("Generated")
  );
}
// TODO: Create a function to initialize app
function init() {}
