// CHINO'S TASCA CHINGARO — Express server + demo API
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// In-memory reservations (demo)
const reservations = [];
let counter = 1000;

// eslint-disable-next-line quotes
app.get('/api/health', (req, res) => res.json({ status: 'ok', brand: "CHINO'S TASCA CHINGARO", owner: 'Guzman' }));

app.get('/api/reservas', (req, res) => res.json({ count: reservations.length, reservations }));

app.post('/api/reservas', (req, res) => {
  const { nombre, telefono, fecha, hora, personas, notas } = req.body || {};
  if (!nombre || !telefono || !fecha || !hora) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  const r = {
    id: ++counter,
    nombre,
    telefono,
    fecha,
    hora,
    personas: personas || 2,
    notas: notas || '',
    createdAt: new Date().toISOString(),
  };
  reservations.push(r);
  res.status(201).json({ ok: true, reserva: r });
});

app.get('/api/menu', (req, res) =>
  res.json({
    platillos: [
      { name: 'Birria Smash Quesataco', price: 16, tag: 'Favorito' },
      { name: 'Pescado a la Talla', price: 34, tag: 'Estrella' },
      { name: 'Carne Asada Tampiqueña', price: 320, tag: 'Norteño' },
    ],
  })
);

// SPA fallback
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

if (require.main === module) {
  app.listen(PORT, () => console.log(`🌮 CHINO'S TASCA CHINGARO (Guzman) running on http://localhost:${PORT}`));
}

module.exports = app;
