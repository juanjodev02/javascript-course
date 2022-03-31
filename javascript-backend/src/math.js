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

const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'You must enter two numbers';
};
const subtraction = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  return 'You must enter two numbers';
};
const multiply = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  return 'You must enter two numbers';
};
const divide = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    if (b === 0) {
      return 'Divide by zero is not valid';
    }
    return a / b;
  }
  return 'You must enter two numbers';
};

module.exports = {
  add,
  subtraction,
  multiply,
  divide,
};