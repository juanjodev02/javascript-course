/* eslint-disable quotes */
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

import express from "express";
import AuthService from "./src/services/auth.service";

const server = express();
const authService = new AuthService();

server.use(express.json());

server.post("/login", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      error: "No body",
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      error: "Missing email or password",
    });
  }

  const response = await authService.login(email, password);
  return res.status(200).send({
    isLoggedIn: response,
  });
});

// server.post("/register", (req, res) => {});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
