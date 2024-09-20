import { sql } from './db.js'

sql`
  CREATE TABLE animais (
      id text PRIMARY KEY,
      name character varying(255),
      raça character varying(255),
      idade character varying(255),
      tutor character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})