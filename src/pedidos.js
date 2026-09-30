/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · los pedidos
   Tres juegos, cada uno con sus pedidos fijos (la ruta) y un generador
   para Practicar:
     servir     el cliente pide una fracción y la pizza viene cortada de
                otra manera: cortar, grapar, y que salga la misma cantidad
     comparar   dos mesas, dos fracciones: ¿quién se lleva más? La escalera,
                en el orden en que se demuestra
     telefono   el cortador no llega: se corta sobre el papel, y salen los
                productos en cruz
   Cada pedido es un objeto plano; el motor hace las cuentas. Vale en Node.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const M = typeof require === 'function' && typeof module !== 'undefined' ? require('./motor.js') : raiz.Motor;
let azar = Math.random;
const elige = xs => xs[Math.floor(azar() * xs.length)];
const entre = (a, b) => a + Math.floor(azar() * (b - a + 1));
const fTxt = M.fTxt, az = t => '<b class="fB">' + t + '</b>', ro = t => '<b class="fA">' + t + '</b>';
const CARTA = [2, 3, 4, 5, 6, 8, 9, 10, 12, 15];              // hasta donde llega el cortador
const NOMBRE = {2: 'mitades', 3: 'tercios', 4: 'cuartos', 5: 'quintos', 6: 'sextos', 7: 'séptimos', 8: 'octavos', 9: 'novenos', 10: 'décimos', 12: 'doceavos', 15: 'quinceavos'};
const UNO = {2: 'media pizza', 3: 'un tercio', 4: 'un cuarto', 5: 'un quinto', 6: 'un sexto', 7: 'un séptimo', 8: 'un octavo', 9: 'un noveno', 10: 'un décimo', 12: 'un doceavo', 15: 'un quinceavo'};
const enLetra = f => f[0] === 1 ? UNO[f[1]] : f[0] + ' ' + NOMBRE[f[1]];

/* ── SERVIR ── f: lo que pide; cajas: cómo vienen; pieza: lo quiere de una
   pieza (grapada); menu: la carta de cortes */
const SERVIR = [
  {id: 's1', f: [1, 2], cajas: [4], pieza: true, menu: [2, 4, 8],
   cli: '—Perdone… yo la quería <b>en mitades</b>, no en cuartos. ¿Y ahora qué me llevo?',
   nick: 'Es lo mismo, pero el cliente quiere <b>una pieza</b>. Toca dos cuartos pegados y grápalos.',
   ok: '¡Media! Dos cuartos grapados ocupan lo mismo que una mitad: <b>2/4 y 1/2 son la misma cantidad</b>. Y mira la regla: la marca no se ha movido.'},
  {id: 's2', f: [3, 8], cajas: [4], menu: [2, 4, 8],
   cli: '—Yo quiero <b>tres octavos</b>. Y no me diga que no, que lo pone en la carta.',
   nick: 'Viene en cuartos, pero el cortador vuelve a pasar cuando hace falta. Córtala en 8 y quédate con tres trozos.',
   ok: 'Tres de ocho, ni uno más. Al cortar más fino, cada cuarto se ha hecho <b>dos octavos</b>: hay más trozos y son más pequeños.'},
  {id: 's3', f: [5, 4], cajas: [4, 4], menu: [2, 4, 8],
   cli: '—Somos cinco. Póngame <b>cinco cuartos</b>… si es que eso existe.',
   nick: 'Existe, pero no cabe en una caja: he traído otra. Una pizza entera y un cuarto de la segunda.',
   ok: 'Claro que existe: una pizza entera y un cuarto. Cuando el de arriba pasa al de abajo hace falta <b>más de una unidad</b>, y en la regla se ve pasado el 1.'},
  {id: 's4', f: [1, 3], cajas: [6], pieza: true, menu: [3, 6, 12],
   cli: '—Un <b>tercio</b> de pizza, por favor. Pero la veo cortada en seis…',
   nick: 'Seis sextos, sí. Con la máquina de <b>2 en 2</b> quedan tercios, y luego eliges tu pieza. O grapa dos sextos pegados: es lo mismo.',
   ok: 'Un tercio. Grapando de dos en dos, 2/6 se ha convertido en 1/3: <b>has dividido arriba y abajo entre 2</b>.'},
  {id: 's5', f: [3, 4], cajas: [4, 4], menu: [2, 4, 8],
   cli: '—Quiero <b>media pizza y un cuarto</b>. Todo junto, si puede ser.',
   nick: 'Media y un cuarto no se juntan: no son del mismo tamaño. Media pizza son dos cuartos: tres cuartos en total.',
   ok: 'Tres cuartos. Para juntar dos trozos hay que <b>cortarlos igual</b> primero: buscar el mismo denominador no es un capricho, es poder graparlos.'}
];

/* ── COMPARAR: la escalera ── tipo: den (mismo denominador), num (mismo
   numerador, va libre: el argumento es el tamaño del trozo), cabe (uno
   cabe en el otro), nadie (hay que cortar las dos), igual (disfrazados).
   rep: lo que contesta Nick a cada respuesta mala, A, B o ig */
const COMPARAR = [
  {id: 'c1', tipo: 'den', fA: [3, 8], fB: [5, 8], menu: [2, 4, 8],
   cli: '—Mesa 4 quiere ' + ro('tres octavos') + '; mesa 7, ' + az('cinco octavos') + '. ¿Quién se lleva más?',
   nick: 'Las dos cajas ya vienen en octavos: trozos <b>iguales</b>. Prepara 3/8 y 5/8, y esto se cuenta solo.',
   ok: 'Mesa 7, y de calle: cinco octavos contra tres. Con trozos iguales <b>basta contar los trozos</b>, y en la regla se ve la diferencia: dos octavos.',
   rep: {A: '¿Tres trozos más que cinco? Son octavos los dos, del mismo tamaño exacto: gana quien tenga más trozos.',
         ig: 'Iguales no: mira la regla, las dos marcas están en sitios distintos. Cuenta los octavos de cada caja.'}},
  {id: 'c2', tipo: 'num', fA: [1, 3], fB: [1, 4], menu: [3, 4, 6, 12],
   cli: '—Mesa 4 pide ' + ro('un tercio') + ' y mesa 7 ' + az('un cuarto') + ', y discuten: que si 4 es más que 3, que si el cuarto gana…',
   nick: 'Más comensales tocan a menos, te lo digo yo. Pero prepáralo: un trozo en cada caja, y mira el tamaño de cada uno.',
   ok: 'El del tercio. Cuantas <b>más</b> partes se hace una pizza, más pequeño toca cada trozo: por eso <b>1/4 &lt; 1/3 aunque 4 &gt; 3</b>. Si alguien protesta, córtalas las dos en 12 y cuenta: 4/12 contra 3/12.',
   rep: {B: 'Ya sé lo que has pensado: que 4 es más que 3. Pero ese número dice <b>en cuántas partes se corta</b>, no cuánto toca. Más comensales, menos ración. Mira el tamaño de los dos trozos.',
         ig: '¿Iguales? Pon un trozo encima del otro: el de la mesa 4 sobra por todas partes.'}},
  {id: 'c3', tipo: 'cabe', fA: [3, 4], fB: [5, 8], menu: [2, 4, 8],
   cli: '—Mesa 4, ' + ro('tres cuartos') + '; mesa 7, ' + az('cinco octavos') + '. Y va apuesta.',
   nick: 'Cuartos contra octavos: trozos distintos, y con trozos distintos no hay cuenta que valga. Pero los cuartos se dejan recortar: pasa el cortador por <b>una</b> caja y quedan igualadas.',
   ok: 'Mesa 4: seis octavos contra cinco. Bastaba recortar <b>una</b> caja, porque los cuartos caben justos en los octavos. Un octavo de diferencia.',
   rep: {B: 'Cinco trozos contra tres, sí. Pero de distinto tamaño: <b>un octavo es la mitad de un cuarto</b>. Contar trozos que no miden lo mismo no vale para nada. Iguálalos y hablamos.',
         ig: 'No caen en el mismo punto. Ponlas en octavos las dos y lo verás.'}},
  {id: 'c4', tipo: 'nadie', fA: [2, 3], fB: [3, 5], menu: [3, 5, 6, 10, 15],
   cli: '—Mesa 4 quiere ' + ro('dos tercios') + ' y mesa 7 quiere ' + az('tres quintos') + '. ¿Quién se lleva más pizza?',
   nick: 'Tercios y quintos: ni unos caben en los otros ni al revés. Aquí toca cortar <b>las dos</b>… y hay un número de trozos donde caben los dos cortes.',
   ok: 'Mesa 4, por un pelo: diez quinceavos contra nueve. Ponerlas en la <b>misma secuencia de trozos</b>: eso, y no otra cosa, es el denominador común. Un quinceavo de diferencia.',
   rep: {B: 'Ya veo el razonamiento: 3 es más que 2 y 5 es más que 3, así que gana. Pues eso mismo pasaba hace dos pedidos con 1/3 y 1/4, y <b>ganaba el tercio</b>. Con trozos distintos, contar no sirve.',
         ig: 'Iguales no, pero por poco: un solo quinceavo los separa. Córtalas las dos y cuenta.'}},
  {id: 'c5', tipo: 'igual', fA: [2, 4], fB: [3, 6], menu: [2, 3, 4, 6, 8, 12],
   cli: '—Mesa 4 pide ' + ro('dos cuartos') + '; mesa 7, ' + az('tres sextos') + '. Se han jugado un café.',
   nick: 'Pues alguien va a pagar dos cafés. Córtalas igual y se acaba la apuesta.',
   ok: 'Nadie paga el café: 6/12 y 6/12, <b>el mismo punto de la regla con dos nombres</b>. Comparar también puede acabar en empate.',
   rep: {A: '¿Seguro? Córtalas las dos igual y mira las marcas de la regla antes de contestar.',
         B: '¿Porque 3 es más que 2? Pero también 6 es más que 4. Córtalas igual y verás la sorpresa.'}}
];

/* ── POR TELÉFONO ── el cortador no llega: se corta sobre el papel */
const TELEFONO = [
  {id: 't1', fA: [7, 8], fB: [6, 7],
   cli: '—Nick, soy Nicoleta. Dos encargos para la pastelería: ' + ro('siete octavos') + ' para mí y ' + az('seis séptimos') + ' para el pinche, que jura que lo suyo es más. ¿Quién tiene razón?',
   nick: '¿Octavos contra séptimos? Harían falta 56 trozos y el cortador no hila tan fino. Esto se corta <b>sobre el papel</b>: multiplica cada una arriba y abajo por lo que haga falta hasta que estén en la misma secuencia.',
   ok: 'El de 7/8, por un trozo de 56: 49 contra 48. Y fíjate en los números: <b>49 = 7×7 y 48 = 8×6</b>. Has multiplicado <b>en cruz</b> sin querer: la regla famosa no es un truco, es este corte sobre el papel.',
   rep: {B: 'El pinche dice lo mismo, y por lo mismo: que a 6/7 le falta un séptimo y a 7/8 un octavo. Pero <b>al que le falta menos, se lleva más</b>, y un octavo es más pequeño que un séptimo.',
         ig: 'Ni hablar: 49 y 48 no son el mismo número, por muy cerca que anden.'}}
];

/* ── PRACTICAR: pedidos nuevos, sin fin ── d: 0 fácil, 1 media, 2 difícil */
/* la carta de cortes: lo que hace falta, y algún corte más de relleno, hasta seis */
function carta(obligados, relleno){
  const c = new Set(obligados);
  for(const n of relleno) if(c.size < 6) c.add(n);
  return [...c].filter(n => CARTA.includes(n)).sort((a, b) => a - b);
}
const IGUALES = [[[1, 2], [2, 4]], [[2, 4], [3, 6]], [[2, 4], [4, 8]], [[1, 3], [2, 6]], [[1, 3], [4, 12]], [[2, 6], [4, 12]], [[1, 4], [2, 8]],
                 [[1, 4], [3, 12]], [[3, 4], [6, 8]], [[1, 5], [2, 10]], [[2, 5], [4, 10]], [[1, 6], [2, 12]], [[5, 6], [10, 12]], [[3, 6], [6, 12]]];
const NADIE = [[2, 3], [2, 5], [3, 4], [3, 5], [4, 6]];
const CABE = [[2, 4], [2, 6], [3, 6], [4, 8], [2, 8], [3, 9], [5, 10], [4, 12], [6, 12], [3, 12]];
function generaServir(d){
  let f, cajas, pieza = false, tipo;
  if(d === 0){                                  // una caja, cortar o grapar
    tipo = elige(['grapa', 'corta']);
    if(tipo === 'grapa'){ const b = elige([2, 3, 4]), c = b * elige([2, 3].filter(x => b * x <= 12)); f = [1, b]; cajas = [c]; pieza = true; }
    else{ const c = elige([2, 3, 4]), m = elige([2, 3].filter(x => c * x <= 12)), b = c * m; f = [entre(1, b - 1), b]; cajas = [c]; }
  }else if(d === 1){                            // más de una pizza, o un pedido en dos trozos
    tipo = elige(['mas', 'suma']);
    const b = tipo === 'mas' ? elige([2, 3, 4, 6, 8]) : elige([4, 6, 8]);
    if(tipo === 'mas'){ f = [b + entre(1, b - 1), b]; cajas = [b, b]; }
    else{ f = [entre(2, b - 1), b]; cajas = [b / 2, b]; }      // una caja en mitades de la otra: hay que igualar
  }else{                                        // hay que cortar y grapar a la vez
    tipo = 'mixto';
    const b = elige([3, 4, 5, 6]), c = elige([2, 3, 4].filter(x => x !== b && M.mcm(x, b) <= 15));
    f = [entre(1, b - 1), b]; cajas = [c]; pieza = f[0] === 1;
  }
  const menu = carta([cajas[0], f[1], M.mcm(cajas[0], f[1])], d > 0 ? CARTA.filter(n => n % cajas[0] === 0 && n <= 12) : []);
  return {id: 'sp' + Date.now(), f, cajas, pieza, menu, practica: true,
    cli: '—Póngame <b>' + enLetra(f) + '</b>' + (cajas.length > 1 ? '. Y traiga otra caja, que no me cabe' : ', que la veo cortada en ' + NOMBRE[cajas[0]]) + '.',
    nick: pieza ? 'Lo quiere de <b>una pieza</b>: corta o grapa lo que haga falta, y prepárala.' : 'Prepara <b>' + fTxt(f) + '</b>' + (cajas.length > 1 ? ' con las dos cajas' : '') + ': el cortador y la grapadora son tuyos.',
    ok: 'Eso es: <b>' + fTxt(f) + '</b>. La marca de la regla no miente.'};
}
function generaComparar(d){
  const tipo = elige([['den', 'num'], ['cabe', 'igual', 'den'], ['nadie', 'igual', 'cabe']][d]);
  let fA, fB;
  if(tipo === 'den'){ const b = elige([5, 6, 8, 10, 12]); let a = entre(1, b - 1), c = entre(1, b - 1); while(c === a) c = entre(1, b - 1); fA = [a, b]; fB = [c, b]; }
  else if(tipo === 'num'){ const [b, c] = elige(NADIE.concat(CABE)), k = d && Math.min(b, c) > 2 ? elige([1, 2]) : 1; fA = [k, b]; fB = [k, c]; }
  else if(tipo === 'cabe'){ const [b, c] = elige(CABE); let a = entre(1, b - 1), e = entre(1, c - 1); while(a * c === e * b) e = entre(1, c - 1); fA = [a, b]; fB = [e, c]; }
  else if(tipo === 'nadie'){ const [b, c] = elige(NADIE); let a = entre(1, b - 1), e = entre(1, c - 1); while(a * c === e * b) e = entre(1, c - 1); fA = [a, b]; fB = [e, c]; }
  else{ [fA, fB] = elige(IGUALES); }
  if(azar() < .5) [fA, fB] = [fB, fA];
  const m = M.mcm(fA[1], fB[1]);
  const menu = carta([fA[1], fB[1], m], tipo === 'nadie' ? CARTA.filter(n => n % fA[1] === 0 || n % fB[1] === 0) : []);
  const NICK = {den: 'Las dos cajas vienen en ' + NOMBRE[fA[1]] + ': trozos iguales. Prepara los dos pedidos y cuenta.',
    num: 'Un trozo del mismo tamaño no es: mira cuál toca a más. Prepáralos y compara los trozos.',
    cabe: 'Trozos distintos, pero unos caben en los otros: pasa el cortador por <b>una</b> caja y quedan igualadas.',
    nadie: 'Ni unos caben en los otros ni al revés: hay que cortar <b>las dos</b> donde quepan los dos cortes.',
    igual: 'Córtalas igual, y luego mira bien las dos marcas de la regla.'};
  const OK = {den: 'Con trozos iguales <b>basta contar los trozos</b>.', num: 'Cuantas más partes, más pequeño toca cada trozo: <b>gana el denominador pequeño</b>.',
    cabe: 'Bastaba recortar una caja: un corte cabía en el otro.', nadie: 'Las dos en la <b>misma secuencia de trozos</b>: eso es el denominador común.',
    igual: '<b>El mismo punto con dos nombres.</b> Comparar también puede acabar en empate.'};
  const REP = {den: 'Son ' + NOMBRE[fA[1]] + ' los dos, del mismo tamaño: gana quien tenga <b>más trozos</b>.',
    num: 'Ese número dice en <b>cuántas partes</b> se corta la pizza, no cuánto toca. Más partes, menos ración.',
    cabe: 'Trozos de distinto tamaño: contar no vale. <b>Iguálalos</b> y cuenta.', nadie: 'Trozos de distinto tamaño: contar no vale. <b>Iguálalos</b> y cuenta.',
    igual: 'Córtalas igual y mira las marcas: caen en el <b>mismo punto</b>.'};
  return {id: 'cp' + Date.now(), tipo, fA, fB, menu, practica: true,
    cli: '—Mesa 4 quiere ' + ro(enLetra(fA)) + '; mesa 7, ' + az(enLetra(fB)) + '. ¿Quién se lleva más?',
    nick: NICK[tipo], ok: OK[tipo], rep: {A: REP[tipo], B: REP[tipo], ig: REP[tipo]}};
}
const LEJOS = [[5, 7], [5, 8], [7, 8], [6, 7], [4, 7], [3, 7], [5, 9], [7, 9], [8, 9], [4, 9], [5, 6], [7, 10], [3, 8]];
function generaTelefono(d){
  const [b, c] = elige(LEJOS.filter(([x, y]) => M.mcm(x, y) > 15));
  let a, e, dif;
  do{ a = entre(1, b - 1); e = entre(1, c - 1); dif = Math.abs(a / b - e / c); }
  while(dif === 0 || (d === 0 ? dif < .2 : d === 1 ? dif < .06 || dif > .25 : dif > .08));
  const fA = [a, b], fB = [e, c];
  return {id: 'tp' + Date.now(), fA, fB, practica: true,
    cli: '—Nick, soy Nicoleta. ' + ro(enLetra(fA)) + ' para mí y ' + az(enLetra(fB)) + ' para el pinche. ¿Quién se lleva más?',
    nick: NOMBRE[b] + ' contra ' + NOMBRE[c] + ': harían falta ' + b * c + ' trozos. Sobre el papel: multiplica cada una arriba y abajo por el denominador de la otra.',
    ok: 'En la secuencia de ' + b * c + ': <b>' + a * c + ' contra ' + e * b + '</b>. Y ' + a * c + ' = ' + a + '×' + c + ', ' + e * b + ' = ' + e + '×' + b + ': los <b>productos en cruz</b>.',
    rep: {A: 'En la secuencia de ' + b * c + ': ¿quién va más lejos, ' + a * c + ' o ' + e * b + '?', B: 'En la secuencia de ' + b * c + ': ¿quién va más lejos, ' + a * c + ' o ' + e * b + '?', ig: 'No son el mismo número, por muy cerca que anden.'}};
}

const RUTA = {servir: SERVIR, comparar: COMPARAR, telefono: TELEFONO};
const GENERA = {servir: generaServir, comparar: generaComparar, telefono: generaTelefono};
const NOMBRE_J = {servir: 'Servir', comparar: 'Comparar', telefono: 'Por teléfono'};
const P = {RUTA, GENERA, NOMBRE_J, CARTA, NOMBRE, enLetra, conAzar: f => { azar = f; }};
if(typeof module !== 'undefined' && module.exports) module.exports = P;
else raiz.Pedidos = P;
})(typeof window !== 'undefined' ? window : globalThis);
