// Shared utils for CHINO'S TASCA CHINGARO
function formatMXN(amount) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount);
}

function validateReservation(r) {
  const errors = [];
  if (!r || typeof r !== 'object') return ['payload inválido'];
  if (!r.nombre || String(r.nombre).trim().length < 2) errors.push('nombre requerido');
  if (!r.telefono || !/^\+?\d{7,15}$/.test(String(r.telefono).replace(/\s/g, ''))) errors.push('teléfono inválido');
  if (!r.fecha || !/^\d{4}-\d{2}-\d{2}$/.test(r.fecha)) errors.push('fecha inválida');
  if (!r.hora || !/^\d{2}:\d{2}$/.test(r.hora)) errors.push('hora inválida');
  const personas = Number(r.personas);
  if (!Number.isInteger(personas) || personas < 1 || personas > 50) errors.push('personas inválidas');
  return errors;
}

function foodCostMargin(cost, price) {
  if (!price) return 0;
  return Math.round(((price - cost) / price) * 1000) / 10;
}

module.exports = { formatMXN, validateReservation, foodCostMargin };
