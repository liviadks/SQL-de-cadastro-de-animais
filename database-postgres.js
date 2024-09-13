import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listUsers() {
    const users = await sql`select * from users`;
    return users;
  }

  async createUser(user) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password;
    const profile = user.profile;
    
    await sql`insert into users (id, name, password, profile)
    values (${id}, ${name}, ${password}, ${profile})`
  }

  async updateUser(id, user) {
    const name = user.name;
    const password = user.password;
    const profile = user.profile;

    await sql`update users set 
        name = ${name},
        password = ${password},
        profile = ${profile}
        where id = ${id}
    `;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`
  }

}