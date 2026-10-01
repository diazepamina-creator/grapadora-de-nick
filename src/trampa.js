/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · la trampa para ratones
   Como la viñeta del choque de manos de Las piezas de Miut: un sticker
   redondo que aparece encima de todo con un saltito, cuenta un chiste de
   un segundo y medio y se cierra. Dos escenas, con la misma trampa de
   siempre —la tabla de madera, el muelle, el arco de alambre y el taco de
   queso en el cebo—, vista de lado:
     fallo    baja un pie de Nick, pisa el cebo y ¡clac!: el arco le pilla
              el dedo gordo. El dedo se pone rojo, sale un «¡AY!» y el pie
              da un respingo con la trampa colgando.
     acierto  Migas entra de puntillas, agarra la punta del queso y da un
              paso atrás con él: la trampa salta sobre el vacío y Migas lo
              levanta, de fiesta.
   Se salta con «Sin trampas» en Ajustes y con «menos movimiento».
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const T = '#3A2E22';
const HINGE = [86, 136];
/* la trampa, de lado: la tabla, el muelle, el cebo con su queso y el arco */
const TABLA =
  '<path d="M28 142 H142 Q146 142 146 146 V156 Q146 160 142 160 H28 Q24 160 24 156 V146 Q24 142 28 142 Z" fill="#C99A5E" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
  '<path d="M26 147 H144" stroke="#E2BE86" stroke-width="2.4" stroke-linecap="round"/>' +
  '<path d="M38 152 Q56 150 74 153 M96 151 Q114 154 134 151" fill="none" stroke="#A97A42" stroke-width="1.6" stroke-linecap="round"/>' +
  /* las grapas que sujetan el alambre a la tabla */
  '<path d="M79 142 V137 H93 V142" fill="none" stroke="#6E7680" stroke-width="2.6" stroke-linejoin="round"/>';
const MUELLE =
  '<g fill="none" stroke="#8C949E" stroke-width="2.4"><ellipse cx="86" cy="136" rx="7" ry="5"/><ellipse cx="86" cy="136" rx="4" ry="2.8"/></g>' +
  '<circle cx="86" cy="136" r="1.8" fill="#6E7680"/>';
const CEBO =
  '<path d="M96 142 V138 H122 V142" fill="#B6BCC4" stroke="' + T + '" stroke-width="2" stroke-linejoin="round"/>';
const QUESO =
  '<path d="M99 137 L119 137 L119 124 Z" fill="#F4C64A" stroke="' + T + '" stroke-width="2.2" stroke-linejoin="round"/>' +
  '<path d="M99 137 L119 124 L119 120 Q110 122 99 133 Z" fill="#E2A82C" stroke="' + T + '" stroke-width="2" stroke-linejoin="round"/>' +
  '<g fill="#D99A22"><circle cx="113" cy="132" r="1.8"/><circle cx="116" cy="127.4" r="1.2"/><circle cx="108" cy="134" r="1.1"/></g>';
/* el arco de alambre: tumbado hacia la izquierda, armado; al saltar gira
   media vuelta por arriba y golpea a la derecha */
const ARCO =
  '<path d="M86 136 L38 136" stroke="' + T + '" stroke-width="5.4" stroke-linecap="round"/>' +
  '<path d="M86 136 L38 136" stroke="#C6CBD1" stroke-width="3" stroke-linecap="round"/>' +
  '<path d="M40 131 V141" stroke="' + T + '" stroke-width="5.4" stroke-linecap="round"/>' +
  '<path d="M40 131 V141" stroke="#C6CBD1" stroke-width="3" stroke-linecap="round"/>';
const RAYOS = [[100, 82, 100, 66], [128, 92, 140, 80], [72, 92, 60, 80], [146, 112, 162, 106], [54, 112, 38, 106]]
  .map(([a, b, c, d]) => '<path d="M' + (a - 14) + ' ' + b + ' L' + (c - 14) + ' ' + d + '"/>').join('');

/* el pie de Nick: grande, de dibujo, con el dedo gordo delante; baja desde arriba a la derecha */
const PIE =
  '<g transform="translate(-2 0)"><path d="M150 -20 L150 82 Q150 96 138 100 L112 106 Q100 108 100 118 Q100 128 112 128 L150 128 Q172 128 176 108 L178 -20 Z" fill="#C9A17C" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
  '<path d="M156 -20 Q154 40 160 70" fill="none" stroke="#B08A6A" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>' +
  /* los dedos pequeños, y el gordo, que es el que va a pagar */
  '<g fill="#C9A17C" stroke="' + T + '" stroke-width="2.4"><circle cx="122" cy="126" r="5"/><circle cx="133" cy="127" r="4.6"/><circle cx="143" cy="127.4" r="4.2"/></g>' +
  '<g class="dedo"><ellipse cx="108" cy="122" rx="9" ry="8" fill="#C9A17C" stroke="' + T + '" stroke-width="2.6"/>' +
  '<path d="M102 118 Q105 115 109 116" fill="none" stroke="#E6CDB2" stroke-width="2" stroke-linecap="round"/></g></g>';
const AY =
  '<g class="ay"><path d="M34 46 Q36 28 58 28 L86 28 Q106 28 106 46 Q106 64 86 64 L72 64 L80 78 L60 64 Q34 64 34 46 Z" fill="#FFF8E8" stroke="' + T + '" stroke-width="3" stroke-linejoin="round"/>' +
  '<text x="70" y="55" text-anchor="middle" font-family="Bree Serif,Georgia,serif" font-size="25" fill="#B0442C">¡AY!</text></g>';

/* Migas, entero y sin recortes: de puntillas con el brazo estirado («coge»)
   y, ya con el queso, de fiesta. Está de pie detrás de la trampa (los pies,
   tapados por la tabla); la mano de «coge» cae justo en la punta del queso */
const MS = 96, MX = 119 - 20 * MS / 100, MY = 130 - 67.5 * MS / 100, ATRAS = 6;
const MANO_FIESTA = [MX + ATRAS + 29.5 * MS / 100, MY + (52 - 3) * MS / 100];
function migasEntero(PJ){
  const pon = (cls, pose, vis) => '<svg x="' + MX + '" y="' + MY + '" width="' + MS + '" height="' + MS + '" viewBox="0 0 100 100" overflow="visible"' + (vis ? '' : ' opacity="0"') + '>' +
    PJ.migas(pose).replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '') + '</svg>';
  return '<g class="mPasa"><g class="mCoge">' + pon('', 'coge', true) + '</g><g class="mFiesta" opacity="0">' + pon('', 'fiesta', true).replace('x="' + MX + '"', 'x="' + (MX + ATRAS) + '"') + '</g></g>';
}

function svg(escena, PJ){
  const fondo = escena === 'fallo' ? ['#FBE3D8', '#F2C2B0'] : ['#E6F0D4', '#CFE0B0'];
  const g = (cls, html) => '<g class="' + cls + '">' + html + '</g>';
  return '<svg viewBox="0 0 200 200" aria-hidden="true"><defs><clipPath id="trCirculo"><circle cx="100" cy="100" r="94"/></clipPath>' +
    '<radialGradient id="trFondo-' + escena + '" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="' + fondo[0] + '"/><stop offset="1" stop-color="' + fondo[1] + '"/></radialGradient></defs>' +
    '<circle cx="100" cy="100" r="94" fill="url(#trFondo-' + escena + ')"/>' +
    '<g clip-path="url(#trCirculo)">' +
      '<ellipse cx="100" cy="164" rx="84" ry="7" fill="rgba(60,35,10,.18)"/>' +
      (escena === 'acierto' ? migasEntero(PJ) : '') +
      g('trampa', TABLA + CEBO + MUELLE + g('queso', QUESO) +
        (escena === 'fallo' ? g('pie', PIE) : '') + g('arco', ARCO)) +
      g('rayos', '<g fill="none" stroke="#E8A93A" stroke-width="4" stroke-linecap="round">' + RAYOS + '</g>') +
      (escena === 'fallo' ? AY : '') +
    '</g><circle cx="100" cy="100" r="94" fill="none" stroke="' + T + '" stroke-width="5"/></svg>';
}

let nT = 0;
function lanza(escena, PJ, opts){
  opts = opts || {};
  if(opts.quieto) return null;
  document.querySelectorAll('.trampa-vineta').forEach(v => v.remove());
  const S = Math.round(opts.tam || Math.min(230, innerWidth * .56));
  const v = document.createElement('div');
  v.className = 'trampa-vineta ' + escena;
  v.innerHTML = svg(escena, PJ).replace(/trCirculo/g, 'trCirculo' + (++nT));
  const ref = opts.cerca && opts.cerca.getBoundingClientRect();
  const cx = opts.punto ? opts.punto.x : ref ? ref.left + ref.width / 2 : innerWidth / 2;
  const cy = opts.punto ? opts.punto.y : ref ? Math.max(S / 2 + 10, Math.min(innerHeight - S / 2 - 10, ref.top + ref.height / 2)) : innerHeight / 2;
  v.style.cssText = 'left:' + Math.round(cx - S / 2) + 'px;top:' + Math.round(cy - S / 2) + 'px;width:' + S + 'px;height:' + S + 'px';
  document.body.appendChild(v);
  const D = 1700;
  const o = x => x / D;
  const anima = (sel, kf, origen) => {
    const e = v.querySelector(sel); if(!e) return;
    if(origen){ e.style.transformBox = 'view-box'; e.style.transformOrigin = origen; }
    return e.animate(kf, {duration: D, fill: 'forwards'});
  };
  /* la viñeta: aparece con un saltito y se cierra al final */
  const anV = v.animate([
    {transform: 'scale(.4) rotate(-8deg)', opacity: 0, offset: 0},
    {transform: 'scale(1.06) rotate(2deg)', opacity: 1, offset: o(170), easing: 'ease-out'},
    {transform: 'scale(1) rotate(0)', opacity: 1, offset: o(270)},
    {transform: 'scale(1) rotate(0)', opacity: 1, offset: o(1500), easing: 'ease-in'},
    {transform: 'scale(.5) rotate(6deg)', opacity: 0, offset: 1}
  ], {duration: D, fill: 'forwards'});
  /* el arco salta: media vuelta por arriba en una décima */
  const salto = escena === 'fallo' ? 640 : 820;
  anima('.arco', [
    {transform: 'rotate(0deg)', offset: 0}, {transform: 'rotate(0deg)', offset: o(salto)},
    {transform: 'rotate(172deg)', offset: o(salto + 70), easing: 'ease-in'},
    {transform: 'rotate(166deg)', offset: o(salto + 110)}, {transform: 'rotate(172deg)', offset: o(salto + 150)},
    {transform: 'rotate(172deg)', offset: 1}], HINGE[0] + 'px ' + HINGE[1] + 'px');
  anima('.rayos', [{opacity: 0, offset: 0}, {opacity: 0, offset: o(salto + 60)}, {opacity: 1, offset: o(salto + 80)}, {opacity: 0, offset: o(salto + 300)}, {opacity: 0, offset: 1}]);
  if(escena === 'fallo'){
    /* el pie baja hasta el cebo, se queda pillado, y da un respingo con la trampa colgando */
    const pie = [
      {transform: 'translate(0,-130px)', offset: 0}, {transform: 'translate(0,-130px)', offset: o(260)},
      {transform: 'translate(0,2px)', offset: o(560), easing: 'ease-in'}, {transform: 'translate(0,0)', offset: o(640)},
      {transform: 'translate(0,0)', offset: 1}];
    anima('.pie', pie, '138px 120px');
    /* la trampa entera sube con el pie: va colgando del dedo */
    anima('.trampa', [
      {transform: 'translate(0,0)', offset: 0}, {transform: 'translate(0,0)', offset: o(760)},
      {transform: 'translate(-4px,-30px) rotate(-6deg)', offset: o(900), easing: 'ease-out'},
      {transform: 'translate(4px,-26px) rotate(7deg)', offset: o(1020)},
      {transform: 'translate(-3px,-28px) rotate(-5deg)', offset: o(1140)},
      {transform: 'translate(0,-27px) rotate(2deg)', offset: o(1260)}, {transform: 'translate(0,-27px) rotate(2deg)', offset: 1}], '106px 128px');
    /* el dedo pillado se pone rojo */
    const dedo = v.querySelector('.dedo ellipse');
    if(dedo) dedo.animate([{fill: '#C9A17C', offset: 0}, {fill: '#C9A17C', offset: o(660)}, {fill: '#E0705A', offset: o(760)}, {fill: '#E0705A', offset: 1}], {duration: D, fill: 'forwards'});
    anima('.ay', [{transform: 'scale(0)', opacity: 0, offset: 0}, {transform: 'scale(0)', opacity: 0, offset: o(700)},
      {transform: 'scale(1.15)', opacity: 1, offset: o(800), easing: 'ease-out'}, {transform: 'scale(1)', opacity: 1, offset: o(880)}, {transform: 'scale(1)', opacity: 1, offset: 1}], '72px 70px');
  }else{
    /* Migas entra de puntillas desde el borde, agarra la punta del queso, da un paso
       atrás con él —la trampa salta sobre nada— y lo levanta de fiesta */
    const [hx, hy] = MANO_FIESTA, qx = hx - 119, qy = hy - 128;
    const paso = (x, y) => ({transform: 'translate(' + x + 'px,' + y + 'px)'});
    anima('.mPasa', [
      Object.assign(paso(74, 0), {offset: 0}), Object.assign(paso(74, 0), {offset: o(200)}),
      Object.assign(paso(54, -3), {offset: o(280)}), Object.assign(paso(38, 0), {offset: o(350)}),
      Object.assign(paso(22, -3), {offset: o(420)}), Object.assign(paso(8, 0), {offset: o(490)}),
      Object.assign(paso(0, -1), {offset: o(560), easing: 'ease-out'}), Object.assign(paso(0, 0), {offset: o(640)}),
      Object.assign(paso(0, 0), {offset: o(840)}), Object.assign(paso(0, 0), {offset: 1})]);
    /* el paso atrás: la figura de «coge» recula con el queso; luego, la de fiesta */
    anima('.mCoge', [{transform: 'translate(0,0)', offset: 0}, {transform: 'translate(0,0)', offset: o(640)},
      {transform: 'translate(' + ATRAS + 'px,1px) rotate(5deg)', offset: o(780), easing: 'ease-in'}, {transform: 'translate(' + ATRAS + 'px,1px) rotate(5deg)', offset: 1}], (MX + 46 * MS / 100) + 'px ' + (MY + 95 * MS / 100) + 'px');
    anima('.mCoge', [{opacity: 1, offset: 0}, {opacity: 1, offset: o(860)}, {opacity: 0, offset: o(870)}, {opacity: 0, offset: 1}]);
    anima('.mFiesta', [{opacity: 0, offset: 0}, {opacity: 0, offset: o(860)}, {opacity: 1, offset: o(870)}, {opacity: 1, offset: 1}]);
    anima('.queso', [
      {transform: 'translate(0,0)', offset: 0}, {transform: 'translate(0,0)', offset: o(640)},
      {transform: 'translate(' + ATRAS + 'px,-1px) rotate(4deg)', offset: o(780), easing: 'ease-in'}, {transform: 'translate(' + ATRAS + 'px,-1px) rotate(4deg)', offset: o(860)},
      {transform: 'translate(' + qx.toFixed(1) + 'px,' + (qy - 6).toFixed(1) + 'px) rotate(-14deg)', offset: o(940), easing: 'ease-out'},
      {transform: 'translate(' + qx.toFixed(1) + 'px,' + qy.toFixed(1) + 'px) rotate(-10deg)', offset: o(1020)},
      {transform: 'translate(' + qx.toFixed(1) + 'px,' + qy.toFixed(1) + 'px) rotate(-10deg)', offset: 1}], '119px 128px');
  }
  if(raiz.Sonido){
    if(escena === 'fallo'){ raiz.Sonido.toca('trampa', salto / 1000); raiz.Sonido.toca('ay', (salto + 90) / 1000); }
    else{ raiz.Sonido.toca('trampa', salto / 1000); raiz.Sonido.toca('risita', (salto + 160) / 1000); }
  }
  const fin = () => v.remove();
  anV.finished.then(fin, fin);
  return v;
}
raiz.Trampa = {lanza, svg};
})(window);
