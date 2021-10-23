import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const apiGetData =  () => api.get('/api/users?page=2')
    .set('Accept','application/json');

export const apiCreateData =  (body) => api.post('/api/users')
    .set('Content-type', 'application/json')
    .send(body);
