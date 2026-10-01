/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · la pizza dibujada
   Una sola pizza de verdad, dibujada una vez: la corteza tostada con sus
   burbujas, el borde del tomate, la mozzarella fundida con su textura y
   sus manchas doradas, el pepperoni, la albahaca y las aceitunas. Cada
   trozo de una caja es esa misma pizza vista a través de su sector: así
   un corte parte el pepperoni por donde pasa, como en la cocina, y el
   dibujo no cambia por cortar más fino (la cantidad tampoco).
   La porción elegida se separa siguiendo su bisectriz; las grapas nuevas
   se ven y se van: la costura y las grapas, luego la costura, luego las
   grapas.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const M = raiz.Motor, NS = 'http://www.w3.org/2000/svg';
const el = (tag, at) => { const e = document.createElementNS(NS, tag); for(const k in at) e.setAttribute(k, at[k]); return e; };
const CX = 150, CY = 148, R = 126;

/* un azar con semilla: la pizza sale igual cada vez */
let sem = 11;
const az = () => { sem = (sem * 16807) % 2147483647; return (sem - 1) / 2147483646; };
/* un borde irregular: un círculo que respira */
function blob(r, amp, n, fase){
  let d = '';
  const k = 72;
  for(let i = 0; i <= k; i++){
    const a = i / k * Math.PI * 2;
    const rr = r + amp * (Math.sin(a * n + fase) * .6 + Math.sin(a * (n + 3) + fase * 2) * .4);
    d += (i ? 'L' : 'M') + (CX + rr * Math.cos(a)).toFixed(1) + ' ' + (CY + rr * Math.sin(a)).toFixed(1);
  }
  return d + 'Z';
}
function pizzaEntera(){
  let s = '';
  /* la corteza: tostada por fuera, dorada por dentro, con su grano y sus burbujas */
  s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="url(#pzCorteza)"/>';
  s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#8A5A24" filter="url(#pzGrano)" opacity=".55"/>';
  for(let i = 0; i < 26; i++){
    const a = az() * Math.PI * 2, d = R - 7 - az() * 6, rr = 1.6 + az() * 3.2;
    s += '<ellipse cx="' + (CX + d * Math.cos(a)).toFixed(1) + '" cy="' + (CY + d * Math.sin(a)).toFixed(1) + '" rx="' + rr.toFixed(1) + '" ry="' + (rr * .7).toFixed(1) +
      '" transform="rotate(' + (a * 180 / Math.PI + 90).toFixed(0) + ' ' + (CX + d * Math.cos(a)).toFixed(1) + ' ' + (CY + d * Math.sin(a)).toFixed(1) + ')" fill="' + (i % 3 ? '#9A5E22' : '#F2CE8A') + '" opacity="' + (i % 3 ? .55 : .7) + '"/>';
  }
  /* el tomate, que asoma entre la corteza y el queso */
  s += '<path d="' + blob(112, 2.2, 9, .7) + '" fill="#B8402A"/>';
  s += '<path d="' + blob(112, 2.2, 9, .7) + '" fill="#7E2414" filter="url(#pzGrano)" opacity=".35"/>';
  /* la mozzarella fundida: un borde que se derrama, su textura y sus dorados */
  s += '<path d="' + blob(104, 4.5, 7, 1.9) + '" fill="url(#pzQueso)"/>';
  s += '<path d="' + blob(104, 4.5, 7, 1.9) + '" fill="#E8B04A" filter="url(#pzFundido)" opacity=".45"/>';
  for(let i = 0; i < 18; i++){
    const a = az() * Math.PI * 2, d = az() * 90, rr = 2 + az() * 4;
    s += '<ellipse cx="' + (CX + d * Math.cos(a)).toFixed(1) + '" cy="' + (CY + d * Math.sin(a)).toFixed(1) + '" rx="' + rr.toFixed(1) + '" ry="' + (rr * .6).toFixed(1) + '" fill="#C98A34" opacity=".35"/>';
  }
  /* el pepperoni: rodajas con su borde, su grasa y su brillo */
  const PEP = [[0, 0], [52, 18], [-48, 30], [20, -58], [-30, -50], [66, -34], [-72, -8], [8, 62], [-40, 72], [58, 60], [80, 22], [-12, -92], [44, -84], [-82, 42]];
  PEP.forEach(([x, y], i) => {
    const px = CX + x, py = CY + y, r = 11 + (i % 3) * 1.4;
    s += '<circle cx="' + px + '" cy="' + (py + 1.6) + '" r="' + r + '" fill="#6E1C12" opacity=".35"/>';
    s += '<circle cx="' + px + '" cy="' + py + '" r="' + r + '" fill="url(#pzPep)" stroke="#8E2A1C" stroke-width="1.2"/>';
    for(let k = 0; k < 4; k++){ const a = az() * 6.28, d = az() * r * .65;
      s += '<circle cx="' + (px + d * Math.cos(a)).toFixed(1) + '" cy="' + (py + d * Math.sin(a)).toFixed(1) + '" r="' + (.9 + az() * 1.1).toFixed(1) + '" fill="#8E2A1C" opacity=".6"/>'; }
    s += '<path d="M' + (px - r * .55) + ' ' + (py - r * .35) + ' Q' + (px - r * .2) + ' ' + (py - r * .75) + ' ' + (px + r * .3) + ' ' + (py - r * .6) + '" fill="none" stroke="#F4A38A" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>';
  });
  /* las aceitunas negras */
  [[-20, 26], [34, -20], [-62, -30], [30, 34], [-8, -30], [72, 2], [-54, 58], [18, 88]].forEach(([x, y]) => {
    const px = CX + x, py = CY + y;
    s += '<circle cx="' + px + '" cy="' + py + '" r="4.6" fill="none" stroke="#2A2420" stroke-width="3"/>';
    s += '<path d="M' + (px - 2.4) + ' ' + (py - 2.8) + ' q2 -1 4 0" fill="none" stroke="#7A7068" stroke-width="1" stroke-linecap="round"/>';
  });
  /* la albahaca: hojas con su nervio */
  [[-26, -12, 30], [28, 4, -40], [-6, 36, 80], [48, -56, 10], [-64, 12, 120], [0, -70, -60], [72, 44, 60], [-36, -78, 150]].forEach(([x, y, g]) => {
    const px = CX + x, py = CY + y;
    s += '<g transform="translate(' + px + ' ' + py + ') rotate(' + g + ')"><path d="M-9 0 Q-2 -7 9 0 Q-2 7 -9 0 Z" fill="#4F7A2E" stroke="#34561C" stroke-width=".9"/>' +
      '<path d="M-7 0 H7" stroke="#8DB36A" stroke-width=".9" stroke-linecap="round"/></g>';
  });
  /* el brillo del horno, arriba a la izquierda */
  s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="url(#pzBrillo)"/>';
  return s;
}
/* las piezas comunes: una sola vez en la página */
function prepara(){
  if(document.getElementById('pzDefs')) return;
  const d = document.createElementNS(NS, 'svg');
  d.setAttribute('id', 'pzDefs'); d.setAttribute('width', '0'); d.setAttribute('height', '0');
  d.setAttribute('aria-hidden', 'true'); d.style.position = 'absolute';
  d.innerHTML = '<defs>' +
    '<radialGradient id="pzCorteza" cx="50%" cy="50%" r="50%"><stop offset="80%" stop-color="#E7B666"/><stop offset="91%" stop-color="#D19446"/><stop offset="100%" stop-color="#A9692A"/></radialGradient>' +
    '<radialGradient id="pzQueso" cx="45%" cy="42%" r="60%"><stop offset="0%" stop-color="#FCEFC4"/><stop offset="70%" stop-color="#F5DA92"/><stop offset="100%" stop-color="#E9BE62"/></radialGradient>' +
    '<radialGradient id="pzPep" cx="40%" cy="38%" r="65%"><stop offset="0%" stop-color="#D2533A"/><stop offset="100%" stop-color="#A93522"/></radialGradient>' +
    '<radialGradient id="pzBrillo" cx="32%" cy="26%" r="75%"><stop offset="0%" stop-color="#fff" stop-opacity=".22"/><stop offset="45%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#3a1c05" stop-opacity=".12"/></radialGradient>' +
    '<filter id="pzGrano" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.6 -.85"/><feComposite in2="SourceGraphic" operator="in"/></filter>' +
    '<filter id="pzFundido" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="3" seed="9"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 3.2 -1.9"/><feComposite in2="SourceGraphic" operator="in"/></filter>' +
    '<symbol id="pzEntera" viewBox="0 0 300 300">' + pizzaEntera() + '</symbol></defs>';
  document.body.appendChild(d);
}
function sector(cx, cy, r, a0, a1){
  const rad = a => (a - 90) * Math.PI / 180;
  if(a1 - a0 >= 359.9) return `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
  const x0 = cx + r * Math.cos(rad(a0)), y0 = cy + r * Math.sin(rad(a0));
  const x1 = cx + r * Math.cos(rad(a1)), y1 = cy + r * Math.sin(rad(a1));
  return `M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${(a1 - a0) > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
}
let nP = 0;
/* c: la caja; alTocar(i): qué hacer al tocar el trozo i (si no hay, no se toca) */
function dibuja(c, alTocar){
  prepara();
  const id = 'pz' + (++nP);
  const svg = el('svg', {viewBox: '0 0 300 300', class: 'pizza'});
  const paso = 360 / c.cortes, hueco = Math.min(1.1, paso * .035);
  const defs = el('defs', {});
  svg.appendChild(defs);
  svg.appendChild(el('ellipse', {cx: CX, cy: CY + R + 8, rx: R * .86, ry: 8, fill: 'rgba(60,40,20,.25)'}));
  /* la grapadora, si toca: las juntas nuevas, en orden, una cada «cada» ms */
  const animar = c.animar === 'grapa'; c.animar = null;
  const juntas = [...c.recien].sort((a, b) => a - b), cada = Math.min(260, 1100 / Math.max(1, juntas.length));
  const retraso = j => animar ? Math.round(juntas.indexOf(j) * cada + 170) : 0;
  M.grupos(c).forEach((t, n) => {
    const a0 = t[0] * paso, a1 = a0 + t.length * paso, ele = c.sel.has(t[0]);
    const g = el('g', {class: 'corte' + (ele ? ' elegida' : (c.sel.size ? ' apagada' : ''))});
    if(ele){ const bis = ((a0 + a1) / 2 - 90) * Math.PI / 180; g.setAttribute('transform', `translate(${(10 * Math.cos(bis)).toFixed(1)} ${(10 * Math.sin(bis)).toFixed(1)})`); }
    const forma = sector(CX, CY, R + 1, a0 + hueco, a1 - hueco);
    const cp = el('clipPath', {id: id + 's' + n}); cp.appendChild(el('path', {d: forma})); defs.appendChild(cp);
    const vista = el('g', {'clip-path': `url(#${id}s${n})`});
    vista.appendChild(el('use', {href: '#pzEntera', x: 0, y: 0, width: 300, height: 300}));
    g.appendChild(vista);
    /* el canto del corte: un filo más oscuro, que da grosor al trozo */
    g.appendChild(el('path', {d: forma, fill: 'none', stroke: ele ? '#FFF3D0' : 'rgba(110,62,20,.55)', 'stroke-width': ele ? 4.5 : 1.4, 'stroke-linejoin': 'round'}));
    for(let k = 0; k < t.length - 1; k++){                 // las grapas, solo las nuevas
      if(!c.recien.has(t[k])) continue;
      const gr = (t[k] + 1) * paso, a = (gr - 90) * Math.PI / 180;
      const ms = retraso(t[k]);
      g.appendChild(el('path', {d: `M${CX} ${CY} L${(CX + R * Math.cos(a)).toFixed(1)} ${(CY + R * Math.sin(a)).toFixed(1)}`, stroke: '#7E4A1A', 'stroke-width': 2.6, 'stroke-dasharray': '7 6', class: 'costura-nueva', style: 'animation-delay:' + ms + 'ms'}));
      [[.38, 1], [.72, -1]].forEach(([d, lado], q) => {
        const px = CX + R * d * Math.cos(a), py = CY + R * d * Math.sin(a);
        const fuera = el('g', {transform: `translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${gr + (q ? 8 : -8)})`});
        const dentro = el('g', {class: 'grapa-nueva', style: 'animation-delay:' + ms + 'ms'});
        const f = `M-12 ${6.5 * lado} L-12 0 L12 0 L12 ${6.5 * lado}`;
        dentro.appendChild(el('path', {d: f, fill: 'none', stroke: 'rgba(60,45,30,.4)', 'stroke-width': 7.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', transform: 'translate(1 1.6)'}));
        dentro.appendChild(el('path', {d: f, fill: 'none', stroke: 'var(--grapa)', 'stroke-width': 5.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'}));
        dentro.appendChild(el('path', {d: 'M-11 -1.5 L11 -1.5', fill: 'none', stroke: '#EDF1F4', 'stroke-width': 1.4, 'stroke-linecap': 'round'}));
        fuera.appendChild(dentro); g.appendChild(fuera);
      });
    }
    if(alTocar){ g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0'); g.setAttribute('aria-label', 'trozo ' + (t[0] + 1) + (ele ? ', elegido' : ''));
      g.addEventListener('click', ev => { ev.stopPropagation(); alTocar(t[0]); });
      g.addEventListener('keydown', ev => { if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); alTocar(t[0]); } }); }
    svg.appendChild(g);
  });
  if(animar && juntas.length) grapadora(svg, juntas, paso, cada);
  return svg;
}

/* ── LA GRAPADORA DE NICK: llega desde fuera, baja sobre cada junta nueva
   —el clac—, sube y va a la siguiente; al final se va. Cada grapa aparece
   justo cuando la grapadora aprieta (el retraso de su animación) ── */
const GRAPADORA_SVG =
  '<g class="gpCuerpo"><rect x="-22" y="-30" width="44" height="13" rx="5" fill="#9AA2AC" stroke="#3A2E22" stroke-width="2.6"/>' +
  '<rect x="-16" y="-27.4" width="22" height="4" rx="2" fill="#C6CBD1"/></g>' +
  '<rect x="-19" y="-15" width="38" height="9" rx="3.4" fill="#6E7680" stroke="#3A2E22" stroke-width="2.4"/>' +
  '<path d="M-6 -6 V-2 H6 V-6" fill="none" stroke="#EDF1F4" stroke-width="2.2" stroke-linejoin="round"/>';
function grapadora(svg, juntas, paso, cada){
  const g = el('g', {class: 'grapadoraPasa'}); g.innerHTML = GRAPADORA_SVG;
  svg.appendChild(g);
  if(!g.animate) return;
  const sitio = j => { const gr = (j + 1) * paso, a = (gr - 90) * Math.PI / 180, d = R * .55;
    return {x: CX + d * Math.cos(a), y: CY + d * Math.sin(a), gr}; };
  const pos = (x, y, gr, alto) => 'translate(' + x.toFixed(1) + 'px,' + (y - alto).toFixed(1) + 'px) rotate(' + gr.toFixed(0) + 'deg) scale(1.35)';
  const total = 170 + juntas.length * cada + 260, o = ms => Math.min(1, ms / total), K = [];
  const p0 = sitio(juntas[0]);
  K.push({transform: pos(p0.x + 90, p0.y - 70, p0.gr, 30), opacity: 0, offset: 0});
  juntas.forEach((j, i) => {
    const p = sitio(j), t = 170 + i * cada;
    K.push({transform: pos(p.x, p.y, p.gr, 22), opacity: 1, offset: o(t - cada * .45), easing: 'ease-out'});
    K.push({transform: pos(p.x, p.y, p.gr, 2), opacity: 1, offset: o(t), easing: 'ease-in'});
    K.push({transform: pos(p.x, p.y, p.gr, 16), opacity: 1, offset: o(t + cada * .4)});
  });
  const pz = sitio(juntas[juntas.length - 1]);
  K.push({transform: pos(pz.x + 90, pz.y - 70, pz.gr, 30), opacity: 0, offset: 1});
  /* los offsets tienen que crecer: si dos coinciden, se separan un pelo */
  for(let i = 1; i < K.length; i++) if(K[i].offset <= K[i - 1].offset) K[i].offset = Math.min(1, K[i - 1].offset + .001);
  const an = g.animate(K, {duration: total, fill: 'forwards'});
  /* el cuerpo se aplasta un poco en cada clac */
  const cu = g.querySelector('.gpCuerpo'), KC = [{transform: 'translateY(0)', offset: 0}];
  juntas.forEach((j, i) => { const t = 170 + i * cada; KC.push({transform: 'translateY(0)', offset: o(t - 40)}, {transform: 'translateY(6px)', offset: o(t)}, {transform: 'translateY(0)', offset: o(t + 70)}); });
  KC.push({transform: 'translateY(0)', offset: 1});
  for(let i = 1; i < KC.length; i++) if(KC[i].offset <= KC[i - 1].offset) KC[i].offset = Math.min(1, KC[i - 1].offset + .001);
  cu.animate(KC, {duration: total, fill: 'forwards'});
  if(raiz.Sonido) juntas.forEach((j, i) => raiz.Sonido.toca('grapa', (170 + i * cada) / 1000));
  an.finished.then(() => g.remove(), () => {});
}
/* cuánto dura la grapadora con n juntas, para que el acierto espere */
const duraGrapa = n => n ? 170 + n * Math.min(260, 1100 / n) + 260 : 0;

/* ── EL CORTADOR DE MIGAS: sobre la pizza de antes, la rueda recorre cada
   corte nuevo —de borde a borde si es un diámetro, del borde al centro si
   no— y la raya se dibuja a su paso. Al acabar, «alAcabar» pone la pizza
   cortada. Devuelve cuánto dura ── */
function cortador(svg, antes, nuevo, alAcabar){
  const nuevos = [];
  for(let k = 0; k < nuevo; k++){
    const a = k * 360 / nuevo, viejo = (k * antes) % nuevo === 0;   // ya estaba ese corte
    if(!viejo || nuevo % antes !== 0) nuevos.push(a);
  }
  if(!svg || !svg.animate || !nuevos.length){ alAcabar(); return 0; }
  /* los diámetros: un corte y su opuesto van de una pasada */
  const pasadas = [], usado = new Set();
  nuevos.forEach(a => { if(usado.has(a)) return; const op = (a + 180) % 360;
    if(nuevos.some(b => Math.abs(b - op) < .01) && !usado.has(op)){ pasadas.push([a, op]); usado.add(op); } else pasadas.push([a]); usado.add(a); });
  const dur = Math.max(130, Math.min(360, 900 / pasadas.length)), paso = dur * .75, total = paso * (pasadas.length - 1) + dur + 80;
  const capa = el('g', {class: 'cortadorPasa'}); svg.appendChild(capa);
  const borde = a => { const r = (a - 90) * Math.PI / 180; return [CX + (R + 4) * Math.cos(r), CY + (R + 4) * Math.sin(r)]; };
  pasadas.forEach((pa, i) => {
    const [x0, y0] = borde(pa[0]), [x1, y1] = pa.length > 1 ? borde(pa[1]) : [CX, CY];
    const largo = Math.hypot(x1 - x0, y1 - y0), t0 = i * paso;
    const raya = el('path', {d: 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' L' + x1.toFixed(1) + ' ' + y1.toFixed(1), stroke: '#5A3510', 'stroke-width': 2.6, 'stroke-linecap': 'round', fill: 'none',
      'stroke-dasharray': largo.toFixed(1), 'stroke-dashoffset': largo.toFixed(1), opacity: .8});
    capa.appendChild(raya);
    raya.animate([{strokeDashoffset: largo}, {strokeDashoffset: 0}], {duration: dur, delay: t0, fill: 'forwards', easing: 'ease-in-out'});
    /* la rueda, con su mango detrás, girando mientras avanza */
    const ang = Math.atan2(y1 - y0, x1 - x0) * 180 / Math.PI;
    const rueda = el('g', {opacity: 0});
    rueda.innerHTML = '<g class="rMango"><path d="M0 0 L-26 -14" stroke="#3A2E22" stroke-width="7" stroke-linecap="round"/><path d="M0 0 L-26 -14" stroke="#B07A45" stroke-width="4.6" stroke-linecap="round"/></g>' +
      '<g class="rGira"><circle r="13" fill="#C6CBD1" stroke="#3A2E22" stroke-width="2.2"/><circle r="9.6" fill="none" stroke="#EDF1F4" stroke-width="1.6"/>' +
      '<path d="M0 -9 V9 M-9 0 H9" stroke="#9AA2AC" stroke-width="1.4"/><circle r="3" fill="#6E7680" stroke="#3A2E22" stroke-width="1.2"/></g>';
    capa.appendChild(rueda);
    const tr = (x, y) => 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + ang.toFixed(0) + 'deg) scale(1.35)';
    rueda.animate([{transform: tr(x0, y0), opacity: 0}, {transform: tr(x0, y0), opacity: 1, offset: .1}, {transform: tr(x1, y1), opacity: 1, offset: .9}, {transform: tr(x1, y1), opacity: 0}],
      {duration: dur, delay: t0, fill: 'forwards', easing: 'ease-in-out'});
    rueda.querySelector('.rGira').animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(' + Math.round(largo * 3) + 'deg)'}], {duration: dur, delay: t0, fill: 'forwards', easing: 'ease-in-out'});
    if(raiz.Sonido) raiz.Sonido.toca('corte', t0 / 1000);
  });
  setTimeout(alAcabar, total);
  return total;
}
raiz.Pizza = {dibuja, cortador, duraGrapa};
})(window);
