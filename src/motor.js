/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · el motor
   Lo que pasa en una caja de pizza, sin dibujar nada: en cuántas partes
   está cortada, qué juntas llevan grapa, qué trozos ha elegido el cliente.
   Dos gestos y sus dos operaciones:
     cortar en c   multiplica arriba y abajo por c   (reparte)
     grapar de c   divide arriba y abajo entre c     (junta)
   Vale en el navegador y en Node, para probarlo.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const casi = (a, b) => Math.abs(a - b) < 1e-9;
const mcd = (a, b) => b ? mcd(b, a % b) : a;
const mcm = (a, b) => a / mcd(a, b) * b;

/* una caja: la pizza en «c» partes, sin grapas y sin nada elegido.
   «grapas[i]» es la junta entre el trozo i y el i+1; «sel» guarda la
   cabeza de cada pieza elegida; «recien», las grapas que acaban de ponerse */
const nuevaCaja = c => ({cortes: c, grapas: new Array(c).fill(false), sel: new Set(), recien: new Set()});

/* las piezas: cada una, los trozos que la forman, en orden; una pieza
   puede dar la vuelta por el borde (el trozo n−1 grapado con el 0) */
function grupos(c){
  const n = c.cortes, g = [], usados = new Array(n).fill(false);
  for(let i = 0; i < n; i++){
    if(usados[i] || (c.grapas[(i - 1 + n) % n] && n > 1)) continue;
    const t = [i]; usados[i] = true;
    let j = i;
    while(c.grapas[j] && t.length < n){ j = (j + 1) % n; if(usados[j]) break; t.push(j); usados[j] = true; }
    g.push(t);
  }
  if(!g.length) g.push([...Array(n).keys()]);
  return g;
}
const elegidas = c => grupos(c).filter(t => c.sel.has(t[0]));
const trozosDe = c => elegidas(c).reduce((s, t) => s + t.length, 0);
const valor = c => trozosDe(c) / c.cortes;
/* ¿hay una pieza elegida que valga justo 1/b? (el pedido «en una pieza») */
const piezaDe = (c, b) => elegidas(c).some(t => t.length * b === c.cortes);

/* elegir o soltar el trozo i (o la pieza que lo contiene) */
function toca(c, i){
  const t = grupos(c).find(t => t.includes(i));
  if(!t) return;
  if(c.sel.has(t[0])) c.sel.delete(t[0]); else c.sel.add(t[0]);
}

/* ── VOLVER A CORTAR SIN PERDER LO GRAPADO ──
   Si el corte nuevo es múltiplo del viejo, cada pieza grapada aguanta
   entera (sus juntas nuevas nacen unidas) y solo cambia de nombre: 1/2 pasa
   a 4/8. Un trozo suelto sí se parte. La elección se hereda entera.
   Si no es múltiplo (de cuartos a tercios), no hay manera de respetar
   nada: se empieza de cero, y «rompe» lo dice.
   Devuelve la operación escrita, si hay algo elegido de lo que hablar */
function recorta(c, nuevo){
  const b = c.cortes;
  if(nuevo === b) return {op: null, rompe: false};
  if(nuevo % b !== 0){
    const rompe = c.sel.size > 0 || c.grapas.some(Boolean);
    c.cortes = nuevo; c.grapas = new Array(nuevo).fill(false); c.sel.clear(); c.recien.clear();
    return {op: null, rompe};
  }
  const f = nuevo / b, ka = trozosDe(c), g2 = new Array(nuevo).fill(false), sel2 = new Set();
  grupos(c).forEach(t => {
    const unida = t.length > 1;
    t.forEach((i, idx) => {
      for(let k = 0; k < f - 1; k++) g2[i * f + k] = unida;
      if(idx < t.length - 1) g2[i * f + f - 1] = true;       // junta interna de la pieza
    });
    if(!c.sel.has(t[0])) return;
    if(unida) sel2.add(t[0] * f);
    else for(let k = 0; k < f; k++) sel2.add(t[0] * f + k);
  });
  c.cortes = nuevo; c.grapas = g2; c.sel = sel2; c.recien.clear();
  return {op: ka ? {tipo: 'corte', c: f, ka, ba: b, kd: ka * f, bd: nuevo} : null, rompe: false};
}

/* ── LA GRAPADORA DE MANO: une lo elegido, si son dos piezas o más y
   están pegadas. Grapar n trozos de 1/b, si n cabe en b, es dividir arriba
   y abajo entre n: la pieza pasa a ser 1 de las b/n. Si n no cabe (tres
   octavos), la pieza existe pero no hay división que enseñar ── */
function grapa(c){
  const n = c.cortes, gs = elegidas(c);
  if(gs.length < 2) return {ok: false, por: 'pocas'};
  const todos = gs.flat(), dentro = new Set(todos);
  let ini = -1;
  for(let i = 0; i < n && ini < 0; i++){
    if(!dentro.has(i)) continue;
    let sigue = true;
    for(let k = 0; k < todos.length; k++) if(!dentro.has((i + k) % n)){ sigue = false; break; }
    if(sigue) ini = i;
  }
  if(ini < 0) return {ok: false, por: 'sueltas'};
  c.recien.clear();
  for(let k = 0; k < todos.length - 1; k++){
    const j = (ini + k) % n;
    if(!c.grapas[j]) c.recien.add(j);
    c.grapas[j] = true;
  }
  c.sel.clear(); c.sel.add(ini);
  const m = todos.length, divide = n % m === 0;
  return {ok: true, m, op: divide ? {tipo: 'grapa', c: m, ka: m, ba: n, kd: 1, bd: n / m} : null};
}

/* ── LA MÁQUINA GRANDE: pasa por la pizza entera uniendo de x en x. Es la
   operación inversa del cortador: cambia en cuántas partes está la pizza.
   No elige nada por el cliente: lo que había elegido se queda en las piezas
   que lo contienen, y si no había nada, no hay nada ── */
function industrial(c, x){
  if(c.cortes % x !== 0) return {ok: false};
  const finos = elegidas(c).flat(), kAntes = finos.length, bAntes = c.cortes, vAntes = valor(c);
  c.recien.clear(); c.grapas = new Array(c.cortes).fill(false);
  for(let i = 0; i < c.cortes; i++) if((i + 1) % x !== 0){ c.grapas[i] = true; c.recien.add(i); }
  c.sel.clear();
  grupos(c).forEach(t => { if(t.some(i => finos.includes(i))) c.sel.add(t[0]); });
  const exacta = kAntes > 0 && kAntes % x === 0 && casi(vAntes, valor(c));
  return {ok: true, op: exacta ? {tipo: 'grapa', c: x, ka: kAntes, ba: bAntes, kd: kAntes / x, bd: bAntes / x} : null,
          nota: kAntes && !exacta ? {kAntes, bAntes, x} : null};
}
function suelta(c){ c.grapas = new Array(c.cortes).fill(false); c.sel.clear(); c.recien.clear(); }

/* ── LAS FRACCIONES ── [k, b] */
const fVal = f => f[0] / f[1];
const fTxt = f => f[0] + '/' + f[1];
const signo = (a, b) => casi(fVal(a), fVal(b)) ? '=' : (fVal(a) > fVal(b) ? '>' : '<');
const simplifica = f => { const d = mcd(f[0], f[1]); return [f[0] / d, f[1] / d]; };
/* lo que hay en la mesa, caja por caja: [{k, b}] de las que tienen algo */
const partes = cajas => cajas.map(c => ({k: trozosDe(c), b: c.cortes})).filter(t => t.k > 0);
const mismoCorte = ps => ps.every(t => t.b === ps[0].b);
const total = cajas => cajas.reduce((s, c) => s + valor(c), 0);

const M = {casi, mcd, mcm, nuevaCaja, grupos, elegidas, trozosDe, valor, piezaDe, toca, recorta, grapa, industrial, suelta,
           fVal, fTxt, signo, simplifica, partes, mismoCorte, total};
if(typeof module !== 'undefined' && module.exports) module.exports = M;
else raiz.Motor = M;
})(typeof window !== 'undefined' ? window : globalThis);
