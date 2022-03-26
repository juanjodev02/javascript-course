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

// If - else
const a = 5;
const b = 1;

console.log(a === b);

if (a == b) {
  console.log('Its the same');
} else {
  console.log('Its not the same');
}

const firstName = "";

if (firstName) {
  console.log('Your name is ' + firstName);
} else {
  console.log ('Name is empty');
}

let age = 0; // false
age = undefined;// false
age = null; //false
age = NaN; //false

if (age) {
  console.log('Your age is ' + age);
} else {
  console.log('Age is empty');
}

// Switch - Case
const day = 'monday'

switch (day) {
  case 'monday':
    console.log('Its Monday');
    break;
  case 'tuesday':
    console.log('Its Tuesday');
    break;
  default:
    console.log('Its not a day');
    break;
}

// Loops
// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}

