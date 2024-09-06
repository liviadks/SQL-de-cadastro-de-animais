import { sql } from './db.js'
import { randomUUID } from 'crypto'


export class DatabaseUsers {
    async createUser(user) {
        const id = randomUUID();
        const name = user.name;
        const senha = user.senha;
        const perfil = user.perfil;

        await sql`insert into users(id, name, password, profile)
        values (${id}, ${name}, ${senha}, ${perfil})`
    }
}