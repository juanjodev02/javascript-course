// Copyright 2022 Juanjo Jaramillo <contact@juanjodev02.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const math = require('./src/math');
const chalk = require('chalk');
const inquirer = require('inquirer');

// ask to user for 2 numbers

const questions =  [
  {
    type: 'number',
    name: 'firstNumber',
    message: 'Enter the first number: ',
  },
  {
    type: 'number',
    name: 'secondNumber',
    message: 'Enter the second number: ',
  }
];

inquirer.prompt(questions).then((answers) => {
  const firstNumber = answers.firstNumber;
  const secondNumber = answers.secondNumber;
  const listOfOperations = ['sum'];
  const question = [
    {
      type: 'list',
      name: 'operation',
      message: 'Select the operation: ',
      choices: listOfOperations
    }
  ];
  inquirer.prompt(question).then((result) => {
    const operation = result.operation;
    switch(operation) {
      case 'sum':
        const result = math.add(firstNumber, secondNumber);
        console.log(chalk.green(`The result is: ${result}`));
        break;
    }
  })
})