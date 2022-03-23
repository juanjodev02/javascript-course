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

// Data Types
// Strings
const name = 'Juanjo';
console.log(typeof name)
// Numbers
const age = 24;
console.log(typeof age);
// Booleans
const hasHobby = false;
console.log(typeof hasHobby);
// Undefined and Null
const undefinedValue = undefined;
console.log(typeof undefinedValue);
const nullValue = null;
console.log(typeof nullValue);
// Objects
const person = {}
console.log(typeof person);


// Type Casting
let stringValue = '23';
console.log(typeof stringValue);
stringValue = false;
console.log(typeof stringValue);
stringValue = {};
console.log(typeof stringValue);
stringValue = 23;
console.log(typeof stringValue);

// Data casting
// String to number
let ageInString = '21';
console.log(typeof ageInString);
ageInString = Number(ageInString);
ageInString
console.log(typeof ageInString);

// Number to string
let ageInNumber = 21;
console.log(typeof ageInNumber);
ageInNumber = ageInNumber.toString();
console.log(typeof ageInNumber);