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

import { Students, PrismaClient } from "@prisma/client";

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async login(email: string, password: string): Promise<boolean> {
    const student = await this.prisma.students.findFirst({
      where: {
        email,
      },
    });
    if (!student) {
      return false;
    }
    const matchPasswords = student.password === password;
    if (!matchPasswords) {
      return false;
    }
    return true;
  }

  async register(newStudent: Students): Promise<Students> {
    const student = await this.prisma.students.create({
      data: newStudent,
    });
    return student;
  }
}

export default AuthService;
