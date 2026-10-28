const request = require('supertest');
const app = require('../server');

describe('API health', () => {
  test('GET /api/health', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.owner).toBe('Guzman');
  });
});

describe('Reservations API', () => {
  test('POST /api/reservas valid', async () => {
    const res = await request(app).post('/api/reservas').send({
      nombre: 'Juan', telefono: '+525512345678', fecha: '2025-01-01', hora: '19:00', personas: 2
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.ok).toBe(true);
    expect(res.body.reserva.id).toBeDefined();
  });
  test('POST /api/reservas invalid (missing fields)', async () => {
    const res = await request(app).post('/api/reservas').send({ nombre: 'Juan' });
    expect(res.statusCode).toBe(400);
  });
  test('GET /api/reservas', async () => {
    const res = await request(app).get('/api/reservas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.reservations)).toBe(true);
  });
});

describe('Menu API', () => {
  test('GET /api/menu', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.platillos)).toBe(true);
  });
});
