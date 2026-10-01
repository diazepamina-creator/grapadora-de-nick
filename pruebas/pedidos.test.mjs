/* Pruebas de los pedidos: los fijos son jugables y los generados, sensatos. node --test pruebas/ */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const M = require('../src/motor.js');
const P = require('../src/pedidos.js');

/* un azar fijo, para que la prueba sea la misma cada vez */
let s = 7; P.conAzar(() => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; });

test('la ruta: 5 + 5 + 1 pedidos, cada uno con lo suyo', () => {
  assert.equal(P.RUTA.servir.length, 5); assert.equal(P.RUTA.comparar.length, 5); assert.equal(P.RUTA.telefono.length, 1);
  P.RUTA.servir.forEach(p => { assert.ok(p.f && p.cajas.length && p.menu && p.cli && p.nick && p.ok, p.id); assert.ok(p.menu.includes(p.cajas[0])); });
  P.RUTA.comparar.forEach(p => { assert.ok(p.fA && p.fB && p.menu && p.rep, p.id); assert.ok(p.menu.includes(M.mcm(p.fA[1], p.fB[1])), p.id + ': la carta lleva el corte común'); });
});

test('los pedidos de servir se pueden servir con la carta', () => {
  P.RUTA.servir.forEach(p => {
    const m = M.mcm(p.cajas[0], p.f[1]);
    assert.ok(p.menu.includes(m) || p.cajas[0] % p.f[1] === 0, p.id + ': se puede llegar a ' + p.f[1]);
  });
});

test('servir, generado: la fracción es jugable en cada dificultad', () => {
  for(let d = 0; d < 3; d++) for(let i = 0; i < 60; i++){
    const p = P.GENERA.servir(d);
    assert.ok(p.f[0] > 0 && p.f[1] > 1, 'fracción ' + M.fTxt(p.f));
    assert.ok(p.cajas.every(c => c >= 2 && c <= 12), 'cajas ' + p.cajas);
    assert.ok(p.f[0] / p.f[1] <= p.cajas.length, 'cabe en las cajas: ' + M.fTxt(p.f) + ' en ' + p.cajas);
    const llega = p.cajas.some(c => c % p.f[1] === 0) || p.menu.some(n => n % p.f[1] === 0 && p.cajas.some(c => n % c === 0));
    assert.ok(llega, 'con la carta ' + p.menu + ' se llega a ' + p.f[1] + ' desde ' + p.cajas);
    assert.ok(p.cli && p.nick && p.ok);
  }
});

test('comparar, generado: fracciones distintas salvo en «igual», y el corte común en la carta', () => {
  for(let d = 0; d < 3; d++) for(let i = 0; i < 80; i++){
    const p = P.GENERA.comparar(d);
    const m = M.mcm(p.fA[1], p.fB[1]);
    assert.ok(m <= 15, 'el cortador llega: ' + m);
    assert.ok(p.menu.includes(m), 'la carta lleva ' + m + ': ' + p.menu);
    if(p.tipo === 'igual') assert.equal(M.signo(p.fA, p.fB), '=');
    else assert.notEqual(M.signo(p.fA, p.fB), '=', p.tipo + ' ' + M.fTxt(p.fA) + ' ' + M.fTxt(p.fB));
    if(p.tipo === 'den') assert.equal(p.fA[1], p.fB[1]);
    if(p.tipo === 'num') assert.equal(p.fA[0], p.fB[0]);
    assert.ok(p.fA[0] < p.fA[1] && p.fB[0] < p.fB[1], 'menos de una pizza');
    assert.ok(p.rep.A && p.rep.B && p.rep.ig);
  }
});

test('por teléfono, generado: el cortador no llega y nunca son iguales', () => {
  for(let d = 0; d < 3; d++) for(let i = 0; i < 40; i++){
    const p = P.GENERA.telefono(d);
    assert.ok(M.mcm(p.fA[1], p.fB[1]) > 15);
    assert.notEqual(M.signo(p.fA, p.fB), '=');
  }
});

test('los enlaces de las fichas abren su pedido, y rechazan lo que no se puede preparar', () => {
  const P = require('../src/pedidos.js');
  const s = P.aMedida({j: 'servir', f: '3/8', c: '4'});
  assert.deepEqual(s.f, [3, 8]); assert.deepEqual(s.cajas, [4]); assert.ok(s.menu.includes(8));
  assert.equal(P.aMedida({j: 'servir', f: '1/3', c: '6'}).pieza, true);
  assert.deepEqual(P.aMedida({j: 'servir', f: '5/4', c: '4,4'}).cajas, [4, 4]);
  assert.equal(P.aMedida({j: 'servir', f: '5/4', c: '4'}), null);           // no cabe en una caja
  assert.equal(P.aMedida({j: 'servir', f: '1/7', c: '4'}), null);           // el cortador no hace séptimos
  assert.equal(P.aMedida({j: 'servir', f: '1/5', c: '4'}), null);           // 20 trozos: no llega
  const c = P.aMedida({j: 'comparar', a: '2/3', b: '3/5'});
  assert.equal(c.tipo, 'nadie'); assert.ok(c.menu.includes(15));
  assert.equal(P.aMedida({j: 'comparar', a: '2/4', b: '3/6'}).tipo, 'igual');
  assert.equal(P.aMedida({j: 'comparar', a: '3/4', b: '5/8'}).tipo, 'cabe');
  assert.equal(P.aMedida({j: 'comparar', a: '1/3', b: '1/4'}).tipo, 'num');
  assert.equal(P.aMedida({j: 'comparar', a: '3/4', b: '4/5'}), null);       // 20: el cortador no llega
  assert.deepEqual(P.aMedida({j: 'telefono', a: '7/8', b: '6/7'}).fB, [6, 7]);
  assert.equal(P.aMedida({j: 'nada'}), null);
  assert.equal(P.aMedida({j: 'servir', f: 'tres'}), null);
});
