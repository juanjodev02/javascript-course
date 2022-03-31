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

const express = require('express');
const chalk = require('chalk');

const server = express();

server.get('/', (req, res) => {
  console.log(chalk.bgGreen('GET') + ' /');
  return res.send({
    message: 'Hello world',
    status: 200,
    error: null,
  });
});

server.listen(3000, () => {
  console.log(chalk.bgGreen('[SERVER]') + ' Server is running on port 3000');
});