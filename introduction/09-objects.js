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

const juanjo = {
  name: 'Juanjo',
  age: 23,
  grade: 7,
  sayHello: () => {
    console.log(`Hello my name is ${juanjo.name}`)
  },
  sayHelloFunction: function () {
    console.log(`Hello my name is ${this.name}`)
  }
}

const alisson = {
  name: 'Alisson',
  age: 24,
  grade: 10,
  sayHello: () => {
    console.log(`Hello my name is ${alisson.name}`)
  }
}

juanjo.sayHello();
juanjo.sayHelloFunction();
alisson.sayHello();


// class
class Person {
  constructor (name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  sayHello () {
    console.log(`Hello my name is ${this.name}`)
  }
}

const juanjoClass = new Person('Juanjo', 24, 7);
const alissonClass = new Person('Alisson', 23, 10);

juanjoClass.sayHello()
alissonClass.sayHello()