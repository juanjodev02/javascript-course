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

const numbers = [1, 2, 3];
numbers

const emptyArray = new Array(5);
emptyArray

const daysArray = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
daysArray;


// add item to array
numbers.push(4);

numbers

// pop item from array
const lastNumber = numbers.pop();
lastNumber
numbers


// shift item from array
const firstNumber = numbers.shift();
firstNumber
numbers

// multi types array
numbers.push('string');
numbers.push(true);
numbers.push(undefined);
numbers.push({});
numbers.push(() => {console.log('Hello')});

numbers

const newNumbersArray = numbers.slice(0, 2)
newNumbersArray

// map
const duplicatedNumbersArray = newNumbersArray.map(
  (value) => {
    return value.toString()
  }
);

duplicatedNumbersArray;

duplicatedNumbersArray.push('Hello');

// forEach
duplicatedNumbersArray.forEach((value, index) => {
  console.log(value);
});

// filter
const students = [
  {
    name: 'Juanjo',
    age: 24
  },
  {
    name: 'Juanjo',
    age: 13
  },
  {
    name: 'Alisson',
    age: 15,
  }
];

const filteredStudents = students.filter((student) => {
  const age = student.age;
  if (age > 18) {
    return true;
  } else {
    return false;
  }
});

filteredStudents

// find

const juan = students.find((value) => {
  return value.name === 'Juanjo';
})

juan;

// reduce
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers2.reduce((accumulator, currentValue) => {
  console.log(accumulator)
  console.log(currentValue)
  return accumulator + currentValue;
});

result;

const name = ['J', 'U', 'A', 'N'];

const nameResult = name.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr);
  return acc + curr;
})

nameResult;

