const { formatMXN, validateReservation, foodCostMargin } = require('../js/utils');

describe('formatMXN', () => {
  test('formats number as MXN currency', () => {
    expect(formatMXN(120)).toMatch(/120/);
  });
});

describe('validateReservation', () => {
  test('valid payload returns no errors', () => {
    expect(
      validateReservation({
        nombre: 'Juan',
        telefono: '+525512345678',
        fecha: '2025-01-01',
        hora: '19:00',
        personas: 4,
      })
    ).toEqual([]);
  });
  test('missing nombre errors', () => {
    expect(
      validateReservation({ telefono: '+525512345678', fecha: '2025-01-01', hora: '19:00', personas: 2 })
    ).toContain('nombre requerido');
  });
  test('invalid phone errors', () => {
    expect(
      validateReservation({ nombre: 'Juan', telefono: 'abc', fecha: '2025-01-01', hora: '19:00', personas: 2 })
    ).toContain('teléfono inválido');
  });
  test('invalid date errors', () => {
    expect(
      validateReservation({
        nombre: 'Juan',
        telefono: '+525512345678',
        fecha: '01-01-2025',
        hora: '19:00',
        personas: 2,
      })
    ).toContain('fecha inválida');
  });
  test('invalid personas errors', () => {
    expect(
      validateReservation({
        nombre: 'Juan',
        telefono: '+525512345678',
        fecha: '2025-01-01',
        hora: '19:00',
        personas: 0,
      })
    ).toContain('personas inválidas');
  });
  test('null payload errors', () => {
    expect(validateReservation(null).length).toBeGreaterThan(0);
  });
});

describe('foodCostMargin', () => {
  test('computes margin percent', () => {
    expect(foodCostMargin(2.75, 16)).toBe(82.8);
  });
  test('zero price returns 0', () => {
    expect(foodCostMargin(5, 0)).toBe(0);
  });
});
