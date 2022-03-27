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

console.log('Hello World');

const helloWorldContainer = document.getElementById("helloWorldContainer");
const submitButton = document.getElementById('submitButton');

const helloWorldElement = document.createElement('h1');

helloWorldElement.innerText = 'Hello World';

setTimeout(() => {
  helloWorldContainer.appendChild(helloWorldElement);
}, 3000);

const onClick = () => {
  const text = document.createElement('h4');
  text.innerHTML = 'Button Clicked!'
  helloWorldContainer.appendChild(text);
}

submitButton.addEventListener('click', onClick);
