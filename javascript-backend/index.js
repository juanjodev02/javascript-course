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

const inquirer = require('inquirer');
const {
  add,
  subtraction,
  multiply,
  divide,
} = require('./src/math');
// const chalk = require('chalk');
const listOfOperation = ['sum', 'subtraction', 'multiply', 'divide'];
const questionsFirstPart = [
  {
    type: 'number',
    name: 'firstNumber',
    message: 'Enter the first number',
  },
  {
    type: 'number',
    name: 'secondNumber',
    message: 'Enter the second number',
  },
  {
    type: 'list',
    name: 'operation',
    message: 'Select the operation: ',
    choices: listOfOperation,
  },
];
const questions = [
  {
    type: 'number',
    name: 'firstNumber',
    message: 'Enter the first number',
  },
  {
    type: 'number',
    name: 'secondNumber',
    message: 'Enter the second number',
  },
];

inquirer.prompt(questionsFirstPart)
  .then((answer) => {
    const { operation, firstNumber, secondNumber } = answer;
    let result;
    switch (operation) {
      case listOfOperation[0]:
        result = add(firstNumber, secondNumber);
        console.log(result);
        break;
      case listOfOperation[1]:
        result = subtraction(firstNumber, secondNumber);
        console.log(result);
        break;
      case listOfOperation[2]:
        result = multiply(firstNumber, secondNumber);        
        console.log(result);
        break;
      case listOfOperation[3]:
        result = divide(firstNumber, secondNumber);      
        console.log(result);
        break;
      default:
        return 'Error';
    }
  })
  .catch((error) => console.log(error));