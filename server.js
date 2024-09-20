import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// ENDPOINTS (CRUD):

// CREATE
server.post('/animals', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createAnimal(body);
    return reply.status(201).send();
});

// READ
server.get('/animals', async () => {
    const animals = await databasePostgres.listAnimals();
    return animals;
});

// UPDATE
server.put('/animals/:id', async (request, reply) => {
    const animalID = request.params.id;
    const body = request.body;
    await databasePostgres.updateAnimal(animalID, body);

    return reply.status(204).send();
});

// DELETE
server.delete('/animals/:id', async (request, reply) => {
    const animalID = request.params.id;
    await databasePostgres.deleteAnimal(animalID);

    return reply.status(204).send();
});

server.listen({
    port: 3333
});
