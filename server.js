import { fastify } from 'fastify'
import { DatabaseUsers } from './database.js'

const server = fastify();
const database = new DatabaseUsers


server.post('/users', async (request, reply) => {
  const body = request.body;
  await database.createUser(body);
  return 201
})


server.get('/', () => {
  return 'Brunna';
});

server.listen({
  port: 3333,
})