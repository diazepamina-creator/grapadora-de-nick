/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · la pizza dibujada
   Una caja del motor, en SVG: cada pieza (los trozos grapados van juntos)
   con su corteza, su queso y sus ingredientes a escala del trozo. La
   porción elegida se separa de la pizza siguiendo su bisectriz; las grapas
   nuevas se ven y se van, en este orden: la costura y las grapas juntas,
   luego se va la costura, y al final las grapas.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const M = raiz.Motor, NS = 'http://www.w3.org/2000/svg';
const el = (tag, at) => { const e = document.createElementNS(NS, tag); for(const k in at) e.setAttribute(k, at[k]); return e; };
function sector(cx, cy, r, a0, a1){
  const rad = a => (a - 90) * Math.PI / 180;
  if(a1 - a0 >= 359.9) return `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`;
  const x0 = cx + r * Math.cos(rad(a0)), y0 = cy + r * Math.sin(rad(a0));
  const x1 = cx + r * Math.cos(rad(a1)), y1 = cy + r * Math.sin(rad(a1));
  return `M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${(a1 - a0) > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
}
/* c: la caja; alTocar(i): qué hacer al tocar el trozo i (si no hay, no se toca) */
function dibuja(c, alTocar){
  const svg = el('svg', {viewBox: '0 0 300 300', class: 'pizza'});
  const cx = 150, cy = 148, R = 126, paso = 360 / c.cortes;
  /* a quince cortes el trozo tiene 24 grados: huecos e ingredientes van a escala */
  const gC = Math.min(.9, paso * .03), gQ = Math.min(2.6, paso * .09);
  const esc = Math.max(.55, Math.min(1, paso / 70));
  const nTop = paso >= 70 ? 4 : paso >= 40 ? 3 : paso >= 26 ? 2 : 1;
  svg.appendChild(el('ellipse', {cx, cy: cy + R + 8, rx: R * .86, ry: 8, fill: 'rgba(60,40,20,.25)'}));
  M.grupos(c).forEach(t => {
    const a0 = t[0] * paso, a1 = a0 + t.length * paso, ele = c.sel.has(t[0]);
    const g = el('g', {class: 'corte' + (ele ? ' elegida' : (c.sel.size ? ' apagada' : ''))});
    if(ele){ const bis = ((a0 + a1) / 2 - 90) * Math.PI / 180; g.setAttribute('transform', `translate(${(10 * Math.cos(bis)).toFixed(1)} ${(10 * Math.sin(bis)).toFixed(1)})`); }
    g.appendChild(el('path', {d: sector(cx, cy, R, a0 + gC, a1 - gC), fill: 'var(--corteza)', stroke: ele ? '#FFF3D0' : 'var(--cortezaO)', 'stroke-width': ele ? 6 : 2.5, 'stroke-linejoin': 'round'}));
    g.appendChild(el('path', {d: sector(cx, cy, R - 13, a0 + gQ, a1 - gQ), fill: 'var(--queso)'}));
    for(let k = 0; k < t.length; k++){
      const a = (t[0] + k + .5) * paso - 90;
      [[.60, 9.5, 1], [.80, 6, 0], [.36, 7, 1], [.72, 5, 0]].slice(0, nTop).forEach(([d, rr, tomate], q) => {
        const ang = (a + (q - (nTop - 1) / 2) * Math.min(9, paso / 3.2)) * Math.PI / 180;
        const px = cx + (R - 15) * d * Math.cos(ang), py = cy + (R - 15) * d * Math.sin(ang);
        if(tomate){
          g.appendChild(el('circle', {cx: px, cy: py + 1.4, r: rr * esc, fill: 'var(--tomateO)', opacity: .5}));
          g.appendChild(el('circle', {cx: px, cy: py, r: rr * esc, fill: 'var(--tomate)'}));
        }else g.appendChild(el('ellipse', {cx: px, cy: py, rx: rr * 1.5 * esc, ry: rr * .85 * esc, fill: 'var(--albahaca)', transform: `rotate(${a + 40} ${px} ${py})`}));
      });
    }
    for(let k = 0; k < t.length - 1; k++){                 // las grapas, solo las nuevas
      if(!c.recien.has(t[k])) continue;
      const gr = (t[k] + 1) * paso, a = (gr - 90) * Math.PI / 180;
      g.appendChild(el('path', {d: `M${cx} ${cy} L${(cx + R * Math.cos(a)).toFixed(1)} ${(cy + R * Math.sin(a)).toFixed(1)}`, stroke: 'var(--cortezaO)', 'stroke-width': 2.6, 'stroke-dasharray': '7 6', class: 'costura-nueva'}));
      [[.38, 1], [.72, -1]].forEach(([d, lado], q) => {
        const px = cx + R * d * Math.cos(a), py = cy + R * d * Math.sin(a);
        const fuera = el('g', {transform: `translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${gr + (q ? 8 : -8)})`});
        const dentro = el('g', {class: 'grapa-nueva'});
        const forma = `M-12 ${6.5 * lado} L-12 0 L12 0 L12 ${6.5 * lado}`;
        dentro.appendChild(el('path', {d: forma, fill: 'none', stroke: 'rgba(60,45,30,.35)', 'stroke-width': 7.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', transform: 'translate(1 1.6)'}));
        dentro.appendChild(el('path', {d: forma, fill: 'none', stroke: 'var(--grapa)', 'stroke-width': 5.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'}));
        dentro.appendChild(el('path', {d: 'M-11 -1.5 L11 -1.5', fill: 'none', stroke: '#EDF1F4', 'stroke-width': 1.4, 'stroke-linecap': 'round'}));
        fuera.appendChild(dentro); g.appendChild(fuera);
      });
    }
    if(alTocar){ g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0'); g.setAttribute('aria-label', 'trozo ' + (t[0] + 1) + (ele ? ', elegido' : ''));
      g.addEventListener('click', ev => { ev.stopPropagation(); alTocar(t[0]); });
      g.addEventListener('keydown', ev => { if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); alTocar(t[0]); } }); }
    svg.appendChild(g);
  });
  return svg;
}
raiz.Pizza = {dibuja};
})(window);
