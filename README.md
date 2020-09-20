This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to clone the project in local env:
1. In a terminal, under a local folder, type in command: "git clone https://github.com/HongYu-Cupertino/shipping_label_maker.git", after command execution, you will see a folder generated named by "shipping_label_maker". Go to that folder, you can move on to run the react project.

Assumption: user need to have npm(included in node.js) installed. 
## Below section is specific for running the project

To run the project in development mode, please follow the steps in the project folder:

1. Run `npm install` command
2. Run `npm start`
3. Shipping Label Maker UI should be able to be viewed from browser with URL: localhost:3000

## Below section is for testing Shipping Label Maker UI using Cypress

There are two ways to run Cypress: command line or interactively through Cypress test runner. Before test,
you need to run "npm install cypress --save-dev" to download cypress locally. The cypress tests are under folder cypress/integration/shippinglabelmaker

1. Run Cypress at command line

   > node_modules/.bin/cypress run --spec <spec>

2. Run Cypress test runner in interactive mode

   > node_modules/.bin/cypress open

   after the command, it will launch the Cypress Test Runner UI, all cypress tests will be listed and
   user can choose to run test individually or run all tests. These are integration tests.
