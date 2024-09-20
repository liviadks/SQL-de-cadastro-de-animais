import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listAnimals() {
    const animals = await sql`select * from animais`;
    return animals;
  }

  async createAnimal(animal) {
    const id = randomUUID();
    console.log('id', id);
    const name = animal.name;
    const raça = animal.raça;
    const idade = animal.idade;
    const tutor = animal.tutor;
    
    await sql`insert into animais (id, name, raça, idade, tutor)
    values (${id}, ${name}, ${raça}, ${idade}, ${tutor})`;
  }

  async updateAnimal(id, animal) {
    const name = animal.name;
    const raça = animal.raça;
    const idade = animal.idade;
    const tutor = animal.tutor;

    await sql`update animais set 
        name = ${name},
        raça = ${raça},
        idade = ${idade},
        tutor = ${tutor}
        where id = ${id}`;
  }

  async deleteAnimal(id) {
    await sql`delete from animais where id = ${id}`;
  }
}
