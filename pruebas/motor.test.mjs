/* Pruebas del motor: cortar, grapar, la máquina. node --test pruebas/ */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const M = require('../src/motor.js');

const caja = (c, sel = [], grapas = []) => { const x = M.nuevaCaja(c); sel.forEach(i => x.sel.add(i)); grapas.forEach(i => x.grapas[i] = true); return x; };
const formas = c => M.grupos(c).map(t => t.join(''));

test('sin grapas, cada trozo es una pieza', () => {
  assert.deepEqual(formas(caja(4)), ['0', '1', '2', '3']);
});

test('grapar dos cuartos pegados: una pieza de 2/4, y es dividir entre 2', () => {
  const c = caja(4, [0, 1]);
  const r = M.grapa(c);
  assert.equal(r.ok, true);
  assert.deepEqual(formas(c), ['01', '2', '3']);
  assert.deepEqual(r.op, {tipo: 'grapa', c: 2, ka: 2, ba: 4, kd: 1, bd: 2});
  assert.equal(M.valor(c), 1 / 2);
  assert.equal(M.piezaDe(c, 2), true, 'hay una pieza que vale 1/2');
});

test('grapar por el borde: el 3 y el 0 se juntan', () => {
  const c = caja(4, [3, 0]);
  assert.equal(M.grapa(c).ok, true);
  assert.deepEqual(formas(c), ['1', '2', '30']);
});

test('dos cuartos sueltos no se grapan, y un solo trozo tampoco', () => {
  assert.equal(M.grapa(caja(4, [0, 2])).por, 'sueltas');
  assert.equal(M.grapa(caja(4, [1])).por, 'pocas');
});

test('tres octavos grapados: la pieza existe, pero no hay división', () => {
  const c = caja(8, [0, 1, 2]);
  const r = M.grapa(c);
  assert.equal(r.ok, true); assert.equal(r.m, 3); assert.equal(r.op, null);
  assert.equal(M.piezaDe(c, 8), false);
});

test('volver a cortar respeta lo grapado: 1/2 pasa a 4/8 y sigue siendo una pieza', () => {
  const c = caja(4, [0, 1]); M.grapa(c);
  const r = M.recorta(c, 8);
  assert.deepEqual(formas(c), ['0123', '4', '5', '6', '7']);
  assert.deepEqual(r.op, {tipo: 'corte', c: 2, ka: 2, ba: 4, kd: 4, bd: 8});
  assert.equal(M.valor(c), 1 / 2);
});

test('un trozo suelto elegido sí se parte, y sus hijos quedan elegidos', () => {
  const c = caja(4, [1]);
  M.recorta(c, 8);
  assert.deepEqual([...c.sel].sort(), [2, 3]);
  assert.equal(M.trozosDe(c), 2);
});

test('cortar sin nada elegido no marca nada ni escribe operación', () => {
  const c = caja(4);
  const r = M.recorta(c, 8);
  assert.equal(r.op, null); assert.equal(c.sel.size, 0);
});

test('de cuartos a tercios: no respeta las piezas y avisa', () => {
  const c = caja(4, [0, 1]); M.grapa(c);
  const r = M.recorta(c, 3);
  assert.equal(r.rompe, true); assert.equal(c.cortes, 3); assert.equal(c.sel.size, 0);
  assert.equal(M.recorta(caja(4), 3).rompe, false, 'sobre una caja intacta, cualquier corte es inocente');
});

test('la máquina de 2 en 2 sobre sextos deja tercios y no elige nada', () => {
  const c = caja(6);
  const r = M.industrial(c, 2);
  assert.deepEqual(formas(c), ['01', '23', '45']);
  assert.equal(c.sel.size, 0); assert.equal(r.op, null);
});

test('la máquina con 2 sextos elegidos de 2 en 2: 2/6 = 1/3', () => {
  const c = caja(6, [0, 1]);
  const r = M.industrial(c, 2);
  assert.deepEqual(r.op, {tipo: 'grapa', c: 2, ka: 2, ba: 6, kd: 1, bd: 3});
  assert.equal(M.valor(c), 1 / 3);
});

test('la máquina de 3 en 3 con 2 sextos: no hay división, y lo dice', () => {
  const c = caja(6, [0, 1]);
  const r = M.industrial(c, 3);
  assert.equal(r.op, null); assert.deepEqual(r.nota, {kAntes: 2, bAntes: 6, x: 3});
  assert.equal(M.valor(c), 1 / 2, 'se lleva la pieza que los contiene');
});

test('tocar una pieza grapada la elige entera', () => {
  const c = caja(4, [0, 1]); M.grapa(c); c.sel.clear();
  M.toca(c, 1);
  assert.equal(M.trozosDe(c), 2);
  M.toca(c, 0); assert.equal(M.trozosDe(c), 0);
});

test('signo, simplificar, mcm', () => {
  assert.equal(M.signo([3, 4], [5, 8]), '>'); assert.equal(M.signo([2, 4], [3, 6]), '='); assert.equal(M.signo([1, 4], [1, 3]), '<');
  assert.deepEqual(M.simplifica([6, 8]), [3, 4]); assert.equal(M.mcm(4, 6), 12);
});

test('con dos cajas cortadas distinto no se suma nada', () => {
  const cs = [caja(4, [0, 1]), caja(8, [0])];
  const ps = M.partes(cs);
  assert.equal(M.mismoCorte(ps), false);
  assert.equal(M.total(cs), 3 / 4 + 1 / 8 - 1 / 4, 'el valor existe aunque no se escriba');
});
