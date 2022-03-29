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

const API_URL = 'https://rickandmortyapi.com/api/character';

const list = document.getElementById('list');
const container = document.getElementById('container');

const fetchCharacters = () => {
  fetch(API_URL)
    .then((rawData) => {
      rawData.json()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
    })
    .catch((error) => {
      console.log(error);
    })
}

const fetchCharactersAsync = async () => {
  const rawData = await fetch(API_URL);
  const data = await rawData.json();
  return data.results;
}

const toggleTheme = () => {
  container.classList.toggle('dark-mode');
}

const generateCharacterListItem = (character) => {
  const li = document.createElement('li');
  const nameP = document.createElement('p');
  const template = `Name: ${character.name}`;
  nameP.innerText = template;
  const img = document.createElement('img');
  img.src = character.image;
  li.innerHTML = nameP.outerHTML + img.outerHTML;
  li.classList.add('list-item');
  return li;
}

fetchCharactersAsync().then((results) => {
  const items = results.map((character) => {
    return generateCharacterListItem(character);
  });

  items.forEach((item) => {
    list.appendChild(item);
  });
})
