/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · los personajes, articulados
   Como Jeferión y Listillón en La palestra: cada personaje es una función
   que dibuja una postura. Los brazos tienen hombro y codo, la boca se abre
   lo que diga la postura, los ojos miran hacia donde toca y las cejas
   dicen el resto. Mismo lienzo para los tres (0 0 100 100), el cuerpo
   apoyado abajo.
     nick(pose)      el pizzero, morsa, con la grapadora
     nicoleta(pose)  su hermana, pastelera, con la manga pastelera
     migas(pose)     el ratón del obrador, con el cortador
   Posturas: habla, calla (la de hablar con la boca cerrada: se alternan),
   senala, sorpresa, celebra, piensa; Nick tiene además «grapa» (el clac)
   y Nicoleta «telefono» (el auricular en la oreja).
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const T = '#3A2E22';
const f1 = x => +x.toFixed(1);
/* un brazo con codo: dos tramos, contorno y relleno; devuelve también dónde acaba */
function brazo(x0, y0, a1, l1, a2, l2, g, color){
  const r1 = a1 * Math.PI / 180, r2 = a2 * Math.PI / 180;
  const xc = x0 + Math.cos(r1) * l1, yc = y0 + Math.sin(r1) * l1;
  const x1 = xc + Math.cos(r2) * l2, y1 = yc + Math.sin(r2) * l2;
  const d = 'M' + x0 + ' ' + y0 + ' L' + f1(xc) + ' ' + f1(yc) + ' L' + f1(x1) + ' ' + f1(y1);
  return {x: x1, y: y1, ang: a2,
    svg: '<path d="' + d + '" fill="none" stroke="' + T + '" stroke-width="' + (g + 2.6) + '" stroke-linecap="round" stroke-linejoin="round"/>' +
         '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + g + '" stroke-linecap="round" stroke-linejoin="round"/>'};
}
const en = (x, y, ang, html) => '<g transform="translate(' + f1(x) + ' ' + f1(y) + ') rotate(' + f1(ang) + ')">' + html + '</g>';
/* una mano redonda; «dedo»: con el índice estirado hacia donde va el brazo */
function mano(x, y, ang, color, borde, dedo){
  let s = '<circle cx="' + f1(x) + '" cy="' + f1(y) + '" r="3.9" fill="' + color + '" stroke="' + T + '" stroke-width="1.3"/>';
  if(dedo){
    const r = ang * Math.PI / 180, x2 = x + Math.cos(r) * 6, y2 = y + Math.sin(r) * 6;
    s = '<path d="M' + f1(x) + ' ' + f1(y) + ' L' + f1(x2) + ' ' + f1(y2) + '" stroke="' + T + '" stroke-width="4.2" stroke-linecap="round"/>' +
        '<path d="M' + f1(x) + ' ' + f1(y) + ' L' + f1(x2) + ' ' + f1(y2) + '" stroke="' + color + '" stroke-width="2.2" stroke-linecap="round"/>' + s;
  }
  return s + '<path d="M' + f1(x - 1.8) + ' ' + f1(y - 1) + ' q1.8 -1.2 3.6 0" fill="none" stroke="' + borde + '" stroke-width=".8" stroke-linecap="round"/>';
}
/* el párpado: una tapa del color de la cara, recortada al ojo y guardada
   encima; parpadea() la baja y la sube. Cada ojo, su recorte */
let nOjo = 0;
function parpado(x, y, rx, ry, color, borde){
  /* h: arriba, fuera del ojo; c: cerrado, con el borde del párpado como una raya curva abajo */
  const id = 'pp' + (++nOjo), h = f1(ry * 2 + 1.4), c = f1(ry * .3 + .9);
  return '<clipPath id="' + id + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + f1(rx + .2) + '" ry="' + f1(ry + .2) + '"/></clipPath>' +
    '<g clip-path="url(#' + id + ')"><ellipse class="parpado" data-h="' + h + '" data-c="' + c + '" style="transform:translateY(-' + h + 'px)" cx="' + x + '" cy="' + y + '" rx="' + f1(rx + .9) + '" ry="' + f1(ry + .9) + '" fill="' + color + '" stroke="' + borde + '" stroke-width="1.3"/></g>';
}
/* los ojos: blancos con pupila que mira, o en arco si está contento */
function ojos(xs, y, rx, ry, mira, tipo, borde, piel){
  return xs.map(x => {
    if(tipo === 'feliz') return '<path d="M' + (x - rx) + ' ' + (y + 1) + ' Q' + x + ' ' + (y - ry - 1) + ' ' + (x + rx) + ' ' + (y + 1) + '" fill="none" stroke="' + T + '" stroke-width="1.8" stroke-linecap="round"/>';
    const k = tipo === 'grande' ? 1.15 : 1, rp = tipo === 'grande' ? 2.1 : 2.6;
    const px = x + mira[0] * 1.5, py = y + mira[1] * 1.6;
    return '<ellipse class="ojo" cx="' + x + '" cy="' + y + '" rx="' + f1(rx * k) + '" ry="' + f1(ry * k) + '" fill="#FBF7EE" stroke="' + borde + '" stroke-width="1.3"/>' +
      '<circle cx="' + f1(px) + '" cy="' + f1(py) + '" r="' + rp + '" fill="#241C14"/>' +
      '<circle cx="' + f1(px - 1) + '" cy="' + f1(py - 1.1) + '" r="1" fill="#fff"/>' +
      parpado(x, y, f1(rx * k), f1(ry * k), piel, borde);
  }).join('');
}
/* las cejas: un arco suave por ojo, más o menos alto y torcido */
function cejas(xs, y, tipo, color){
  const C = {normal: [[0, 0], [0, 0]], alta: [[-2.6, 0], [-2.6, 0]], piensa: [[-2.2, -2], [.6, 1.4]], feliz: [[-1, 0], [-1, 0]], seria: [[.6, 1.6], [.6, -1.6]]}[tipo] || [[0, 0], [0, 0]];
  return xs.map((x, i) => {
    const [dy, inc] = C[i], s = i ? 1 : -1;
    return '<path d="M' + f1(x - 3.6) + ' ' + f1(y + dy + inc * s * -.5) + ' Q' + x + ' ' + f1(y + dy - 2.2) + ' ' + f1(x + 3.6) + ' ' + f1(y + dy + inc * s * .5) + '" fill="none" stroke="' + color + '" stroke-width="1.6" stroke-linecap="round"/>';
  }).join('');
}

/* ── NICK, el pizzero: morsa, chaqueta blanca, delantal rojo con harina,
   el paño al hombro, el gorro ladeado y la grapadora ── */
const NV = {piel: '#D3AC88', sombra: '#B08A6A', borde: '#6B4A32', hocico: '#EBD2B8', mano: '#C9A17C', manoB: '#8E6A4E', tela: '#F6EFE2', telaS: '#DFD6C2', mandil: '#C4462F', mandilS: '#9E3423'};
const GRAPADORA =
  '<rect x="-9" y="-7.4" width="19" height="6.5" rx="2.2" fill="#9AA2AC" stroke="' + T + '" stroke-width="1.3"/>' +
  '<rect x="-7.5" y="-1.4" width="16" height="4.4" rx="1.6" fill="#6E7680" stroke="' + T + '" stroke-width="1.2"/>' +
  '<rect x="-6" y="-6" width="9" height="2" rx="1" fill="#C6CBD1"/>';
function nick(pose){
  pose = pose || 'habla';
  const P = {
    habla:    {bI: [150, 11, 70, 12], bD: [-30, 12, -80, 11], g: true, boca: .5, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    calla:    {bI: [150, 11, 70, 12], bD: [-30, 12, -80, 11], g: true, boca: 0, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    grapa:    {bI: [150, 11, 70, 12], bD: [-10, 12, -35, 11], g: true, boca: .2, ojo: 'normal', mira: [1, .4], ceja: 'seria'},
    senala:   {bI: [150, 11, 70, 12], bD: [-8, 12, -18, 10], dedo: true, boca: .4, ojo: 'normal', mira: [1, 0], ceja: 'normal'},
    sorpresa: {bI: [-150, 11, -105, 10], bD: [-30, 11, -78, 10], g: true, boca: .9, redonda: true, ojo: 'grande', mira: [0, 0], ceja: 'alta'},
    celebra:  {bI: [-125, 12, -95, 11], bD: [-40, 12, -68, 12], g: true, boca: 1, ojo: 'feliz', mira: [0, 0], ceja: 'feliz'},
    piensa:   {bI: [150, 11, 70, 12], bD: [100, 8, -121, 18], boca: 0, ojo: 'normal', mira: [.6, -1], ceja: 'piensa'}
  }[pose] || {};
  let s = '<svg viewBox="0 0 100 100" class="pj pj-nick pose-' + pose + '" aria-hidden="true">';
  s += '<ellipse cx="50" cy="98" rx="30" ry="2.6" fill="#140F1F" opacity=".18"/>';
  /* el cuerpo: chaqueta blanca, con su lado en sombra */
  s += '<path d="M21 100 Q21 75 35 68 L65 68 Q79 75 79 100 Z" fill="' + NV.tela + '" stroke="' + T + '" stroke-width="1.6" stroke-linejoin="round"/>';
  s += '<path d="M65 68 Q79 75 79 100 L68 100 Q70 82 61 70 Z" fill="' + NV.telaS + '"/>';
  /* el delantal, con la harina del día */
  s += '<path d="M32 78 L68 78 Q70 90 68 100 L32 100 Q30 90 32 78 Z" fill="' + NV.mandil + '" stroke="' + T + '" stroke-width="1.4" stroke-linejoin="round"/>';
  s += '<path d="M32 78 Q50 82.6 68 78" fill="none" stroke="' + NV.mandilS + '" stroke-width="2"/>';
  s += '<g fill="#E8B08F" opacity=".55"><circle cx="40" cy="88" r="2.2"/><circle cx="56" cy="93" r="1.7"/><circle cx="48" cy="96" r="1.3"/></g>';
  /* el cuello de la chaqueta, en pico */
  s += '<path d="M39 66 L50 76 L61 66 L64 68.4 L50 79 L36 68.4 Z" fill="#FBF7EE" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  /* el paño, al hombro */
  s += '<path d="M60 68.6 Q70 66.6 73 73 Q67 74 64 80 Z" fill="#EFE6D2" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  s += '<path d="M64 71 L69 70 M65 74 L69.6 73.4" stroke="#C4462F" stroke-width="1" stroke-linecap="round" opacity=".7"/>';
  /* el brazo izquierdo (el de nuestra izquierda) */
  const bi = brazo(34, 71, ...P.bI, 6, NV.tela);
  s += bi.svg + mano(bi.x, bi.y, bi.ang, NV.mano, NV.manoB);
  /* la cabeza: grande sobre el cuerpo, que es lo que la hace simpática */
  s += '<ellipse cx="50" cy="45" rx="18" ry="16.4" fill="' + NV.piel + '" stroke="' + NV.borde + '" stroke-width="1.7"/>';
  s += '<path d="M34 42 Q35.4 55 41 59.6 Q36.6 53 36.2 41 Z" fill="' + NV.sombra + '" opacity=".8"/>';
  s += '<ellipse cx="36" cy="51" rx="4.4" ry="2.8" fill="#E39A88" opacity=".45"/><ellipse cx="64" cy="51" rx="4.4" ry="2.8" fill="#E39A88" opacity=".45"/>';
  s += ojos([43.4, 56.6], 44, 4.4, 4.8, P.mira, P.ojo, NV.borde, NV.piel);
  s += cejas([43.4, 56.6], 37.4, P.ceja, '#8E6A4E');
  /* el hocico de dos lóbulos, la nariz rosa y las vibrisas */
  s += '<path d="M41.4 51.4 Q41 58.6 45.8 59.2 Q50 59.6 50 57 Q50 59.6 54.2 59.2 Q59 58.6 58.6 51.4 Q54.6 49.2 50 49.4 Q45.4 49.2 41.4 51.4 Z" fill="' + NV.hocico + '" stroke="' + NV.borde + '" stroke-width="1.4" stroke-linejoin="round"/>';
  s += '<path d="M47.2 50 Q50 48.8 52.8 50 Q52.4 53.6 50 54.6 Q47.6 53.6 47.2 50 Z" fill="#E39A88" stroke="#B9705F" stroke-width=".9" stroke-linejoin="round"/>';
  s += '<ellipse cx="48.6" cy="50.6" rx=".7" ry=".45" fill="#fff" opacity=".7"/>';
  s += '<g fill="' + NV.sombra + '" opacity=".6"><circle cx="44" cy="54.4" r=".7"/><circle cx="45" cy="57" r=".7"/><circle cx="56" cy="54.4" r=".7"/><circle cx="55" cy="57" r=".7"/></g>';
  s += '<g stroke="#F2E8D6" stroke-width=".9" stroke-linecap="round" opacity=".9"><path d="M41.4 54 Q36 53.2 34 54.6"/><path d="M42 56.8 Q37 57.4 35 59"/><path d="M58.6 54 Q64 53.2 66 54.6"/><path d="M58 56.8 Q63 57.4 65 59"/></g>';
  /* la boca, bajo el hocico, y los dos colmillos cortos */
  const ab = P.boca;
  if(P.redonda) s += '<ellipse cx="50" cy="61.2" rx="2.2" ry="' + f1(1.6 + ab * 1.4) + '" fill="#8E5A44" stroke="' + NV.borde + '" stroke-width=".9"/>';
  else if(ab > .05) s += '<path d="M46.6 59.6 Q50 ' + f1(60.6 + ab * 4.6) + ' 53.4 59.6 Q50 60.6 46.6 59.6 Z" fill="#8E5A44" stroke="' + NV.borde + '" stroke-width=".9" stroke-linejoin="round"/>';
  else s += '<path d="M48 59.8 Q50 61 52 59.8" fill="none" stroke="#8E5A44" stroke-width="1.3" stroke-linecap="round"/>';
  s += '<path d="M46.2 59.2 Q46.1 61.2 47.1 61.7 Q47.9 61.1 47.8 59.1 Z M53.8 59.2 Q53.9 61.2 52.9 61.7 Q52.1 61.1 52.2 59.1 Z" fill="#F6EEDC" stroke="' + NV.borde + '" stroke-width=".9" stroke-linejoin="round"/>';
  /* el gorro de pizzero, ladeado */
  s += '<g transform="rotate(-7 50 28)"><path d="M33 30 Q30.4 11 50 11.4 Q69.6 11 67 30 Z" fill="#FBF7EE" stroke="' + T + '" stroke-width="1.6" stroke-linejoin="round"/>' +
       '<path d="M37 19 Q42 10.6 50 12.4 Q58 10.6 63 19 Q56 15 50 16.4 Q44 15 37 19 Z" fill="#fff" opacity=".85"/>' +
       '<rect x="32" y="27.4" width="36" height="6.2" rx="2.4" fill="#EDE6D6" stroke="' + T + '" stroke-width="1.5"/></g>';
  /* el brazo derecho, con la grapadora o con el dedo */
  const bd = brazo(66, 71, ...P.bD, 6, NV.tela);
  s += bd.svg;
  if(P.g) s += en(bd.x, bd.y - 2.6, bd.ang + 62, GRAPADORA);
  s += mano(bd.x, bd.y, bd.ang, NV.mano, NV.manoB, P.dedo);
  return s + '</svg>';
}

/* ── NICOLETA, la pastelera: su hermana, más menuda; pañuelo rosa, el pelo
   asomando, pestañas, delantal rosa y la manga pastelera ── */
const CV = {piel: '#D3AC88', sombra: '#B08A6A', borde: '#6B4A32', pelo: '#B08A6A', hocico: '#EBD2B8', rosa: '#D98C9A', rosaS: '#C97E8C', mano: '#C9A17C', manoB: '#8E6A4E', tela: '#F6EFE2'};
const MANGA = '<path d="M-3.2 -1 L3.2 -1 L1 -13 Q0 -15 -1 -13 Z" fill="#EFE7D6" stroke="' + T + '" stroke-width="1.2" stroke-linejoin="round"/>' +
  '<path d="M-1 -12.6 Q0 -17 1.4 -13" fill="none" stroke="#D98C9A" stroke-width="2" stroke-linecap="round"/>' +
  '<path d="M-2.2 -4 L2.2 -4" stroke="#D9CDB8" stroke-width="1"/>';
/* el auricular de baquelita: de la oreja a la boca, y el cordón que cae */
const AURICULAR = '<path d="M65 41 Q71.4 50 58 57.6" fill="none" stroke="' + T + '" stroke-width="5" stroke-linecap="round"/>' +
  '<path d="M65 41 Q71.4 50 58 57.6" fill="none" stroke="#2A2420" stroke-width="3.2" stroke-linecap="round"/>' +
  '<ellipse cx="64.2" cy="40.4" rx="3.2" ry="2.4" transform="rotate(40 64.2 40.4)" fill="#2A2420" stroke="' + T + '" stroke-width="1"/>' +
  '<ellipse cx="57.4" cy="58.4" rx="3" ry="2.2" transform="rotate(-30 57.4 58.4)" fill="#2A2420" stroke="' + T + '" stroke-width="1"/>' +
  '<path d="M69 51 q4 3 1 6 q-3 3 1 6 q4 3 1 6" fill="none" stroke="#2A2420" stroke-width="1" stroke-linecap="round"/>';
function nicoleta(pose){
  pose = pose || 'habla';
  const P = {
    habla:    {bI: [120, 11, 60, 10], bD: [-40, 11, -86, 10], manga: true, boca: .5, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    calla:    {bI: [120, 11, 60, 10], bD: [-40, 11, -86, 10], manga: true, boca: 0, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    senala:   {bI: [120, 11, 60, 10], bD: [-8, 12, -16, 10], dedo: true, boca: .4, ojo: 'normal', mira: [1, 0], ceja: 'normal'},
    sorpresa: {bI: [-150, 10, -100, 9], bD: [-30, 10, -80, 9], boca: .9, redonda: true, ojo: 'grande', mira: [0, 0], ceja: 'alta'},
    celebra:  {bI: [-130, 11, -100, 10], bD: [-55, 11, -88, 11], manga: true, boca: 1, ojo: 'feliz', mira: [0, 0], ceja: 'feliz'},
    piensa:   {bI: [120, 11, 60, 10], bD: [95, 6, -110, 20], dedo: true, boca: 0, ojo: 'normal', mira: [.6, -1], ceja: 'piensa'},
    telefono: {bI: [120, 11, 60, 10], bD: [-50, 10, -101, 15.6], tel: true, boca: .5, ojo: 'normal', mira: [-.6, -.2], ceja: 'normal'}
  }[pose] || {};
  let s = '<svg viewBox="0 0 100 100" class="pj pj-nicoleta pose-' + pose + '" aria-hidden="true">';
  s += '<ellipse cx="50" cy="98" rx="26" ry="2.6" fill="#140F1F" opacity=".18"/>';
  /* la blusa blanca y el delantal rosa con su peto */
  s += '<path d="M25 100 Q25 77 37 70.4 L63 70.4 Q75 77 75 100 Z" fill="' + CV.tela + '" stroke="' + T + '" stroke-width="1.5" stroke-linejoin="round"/>';
  s += '<path d="M37 75 L63 75 Q66 88 64 100 L36 100 Q34 88 37 75 Z" fill="' + CV.rosa + '" stroke="' + T + '" stroke-width="1.4" stroke-linejoin="round"/>';
  s += '<path d="M37 75 Q50 79.4 63 75" fill="none" stroke="#B96D7C" stroke-width="1.8"/>';
  s += '<g fill="#EFD9C6" opacity=".6"><circle cx="44" cy="86" r="1.9"/><circle cx="56" cy="91" r="1.5"/></g>';
  const bi = brazo(38, 73, ...P.bI, 5.4, CV.tela);
  s += bi.svg + mano(bi.x, bi.y, bi.ang, CV.mano, CV.manoB);
  /* el pelo, por los lados y por detrás */
  s += '<g fill="' + CV.pelo + '" stroke="' + CV.borde + '" stroke-width="1.2" stroke-linejoin="round">' +
       '<path d="M36 40 Q30 49 33 59 Q38 60 39.4 55 Q35 50 38.4 40 Z"/><path d="M64 40 Q70 49 67 59 Q62 60 60.6 55 Q65 50 61.6 40 Z"/></g>';
  s += '<ellipse cx="50" cy="44" rx="15" ry="13.8" fill="' + CV.piel + '" stroke="' + CV.borde + '" stroke-width="1.6"/>';
  s += '<path d="M36.6 42 Q37.4 53 42.6 57.4 Q38.6 51 38.6 41 Z" fill="' + CV.sombra + '" opacity=".75"/>';
  s += '<ellipse cx="39" cy="49" rx="3.6" ry="2.4" fill="#E39A88" opacity=".45"/><ellipse cx="61" cy="49" rx="3.6" ry="2.4" fill="#E39A88" opacity=".45"/>';
  s += ojos([44.4, 55.6], 43.4, 4, 4.4, P.mira, P.ojo, CV.borde, CV.piel);
  /* las pestañas: tres por ojo, hacia fuera */
  if(P.ojo !== 'feliz') s += '<g stroke="' + T + '" stroke-width="1" stroke-linecap="round" fill="none"><path d="M40.6 40.8 Q39.2 39.4 38.6 38.2"/><path d="M40.2 43 Q38.6 42.4 37.6 41.4"/><path d="M59.4 40.8 Q60.8 39.4 61.4 38.2"/><path d="M59.8 43 Q61.4 42.4 62.4 41.4"/></g>';
  else s += '<g stroke="' + T + '" stroke-width="1" stroke-linecap="round"><path d="M40.4 43 L38.6 41.6"/><path d="M59.6 43 L61.4 41.6"/></g>';
  s += cejas([44.4, 55.6], 37.2, P.ceja, '#8E6A4E');
  /* el hocico, la nariz y la boca */
  s += '<path d="M43.4 50 Q43.2 55.6 46.6 56 Q50 56.4 50 54.2 Q50 56.4 53.4 56 Q56.8 55.6 56.6 50 Q53.6 48.4 50 48.6 Q46.4 48.4 43.4 50 Z" fill="' + CV.hocico + '" stroke="' + CV.borde + '" stroke-width="1.2" stroke-linejoin="round"/>';
  s += '<path d="M47.6 49 Q50 48 52.4 49 Q52 51.8 50 52.6 Q48 51.8 47.6 49 Z" fill="#E39A88" stroke="#B9705F" stroke-width=".8" stroke-linejoin="round"/>';
  const ab = P.boca;
  if(P.redonda) s += '<ellipse cx="50" cy="58" rx="1.8" ry="' + f1(1.3 + ab * 1.2) + '" fill="#8E5A44" stroke="' + CV.borde + '" stroke-width=".8"/>';
  else if(ab > .05) s += '<path d="M47.4 56.6 Q50 ' + f1(57.4 + ab * 3.6) + ' 52.6 56.6 Q50 57.4 47.4 56.6 Z" fill="#8E5A44" stroke="' + CV.borde + '" stroke-width=".8" stroke-linejoin="round"/>';
  else s += '<path d="M48.6 56.8 Q50 57.8 51.4 56.8" fill="none" stroke="#8E5A44" stroke-width="1.1" stroke-linecap="round"/>';
  s += '<path d="M47 56.2 Q46.9 57.7 47.7 58 Q48.3 57.6 48.2 56.1 Z M53 56.2 Q53.1 57.7 52.3 58 Q51.7 57.6 51.8 56.1 Z" fill="#F6EEDC" stroke="' + CV.borde + '" stroke-width=".8" stroke-linejoin="round"/>';
  /* el pañuelo rosa, con el nudo atrás y sus lunares de harina */
  s += '<path d="M35.6 38.4 Q50 25 64.4 38.4 Q50 32 35.6 38.4 Z" fill="' + CV.rosa + '" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  s += '<path d="M35.6 38.4 Q50 32 64.4 38.4 L63.8 41 Q50 35.2 36.2 41 Z" fill="' + CV.rosaS + '" stroke="' + T + '" stroke-width="1.2" stroke-linejoin="round"/>';
  s += '<path d="M63.4 34.6 Q68.6 33.4 70 37.4 Q66.6 39 63 37.6 Z" fill="' + CV.rosa + '" stroke="' + T + '" stroke-width="1.1" stroke-linejoin="round"/>';
  s += '<g fill="#F6EFE2" opacity=".7"><circle cx="43" cy="33.4" r="1"/><circle cx="50" cy="31" r="1"/><circle cx="57" cy="33.4" r="1"/></g>';
  const bd = brazo(62, 73, ...P.bD, 5.4, CV.tela);
  s += bd.svg;
  if(P.manga) s += en(bd.x, bd.y - 1.6, bd.ang + 90, MANGA);
  if(P.tel) s += AURICULAR;
  s += mano(bd.x, bd.y, bd.ang, CV.mano, CV.manoB, P.dedo);
  return s + '</svg>';
}

/* ── MIGAS, el ratón del obrador: gris pardo, orejas grandes, la cabeza en
   pera hacia el hocico, delantal, gorro, el pañuelo rojo de la pizzería y
   el cortador de pizza ── */
const MV = {pelo: '#9A8A80', cabeza: '#B0A196', hocico: '#D9CDC2', rosa: '#E8A9B4', rosaB: '#B9707C', tela: '#F6EFE2'};
const CORTADOR = '<path d="M0 0 L0 -14" stroke="' + T + '" stroke-width="5.6" stroke-linecap="round"/>' +
  '<path d="M0 0 L0 -14" stroke="#B07A45" stroke-width="3.6" stroke-linecap="round"/>' +
  '<path d="M0 -13 L0 -25" stroke="' + T + '" stroke-width="3.6" stroke-linecap="round"/><path d="M0 -13 L0 -25" stroke="#8C949E" stroke-width="2" stroke-linecap="round"/>' +
  '<circle cx="0" cy="-27" r="11.4" fill="#C6CBD1" stroke="' + T + '" stroke-width="1.5"/>' +
  '<circle cx="0" cy="-27" r="8.8" fill="none" stroke="#EDF1F4" stroke-width="1.2"/>' +
  '<path d="M-7.4 -32 Q-4.4 -36.6 0.4 -37" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".85"/>' +
  '<circle cx="0" cy="-27" r="2.6" fill="#6E7680" stroke="' + T + '" stroke-width="1"/>';
function migas(pose){
  pose = pose || 'habla';
  const P = {
    habla:    {bI: [140, 8, 80, 8], bD: [-20, 8, -50, 8], c: true, cAng: 28, boca: .5, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    calla:    {bI: [140, 8, 80, 8], bD: [-20, 8, -50, 8], c: true, cAng: 28, boca: 0, ojo: 'normal', mira: [.4, 0], ceja: 'normal'},
    senala:   {bI: [140, 8, 80, 8], bD: [-5, 8, -15, 6], c: true, cAng: 38, boca: .4, ojo: 'normal', mira: [1, 0], ceja: 'normal'},
    sorpresa: {bI: [-150, 8, -110, 8], bD: [-30, 8, -75, 8], c: true, boca: .9, redonda: true, ojo: 'grande', mira: [0, 0], ceja: 'alta', orejas: -6},
    celebra:  {bI: [-130, 8, -100, 8], bD: [-60, 8, -85, 9], c: true, boca: 1, ojo: 'feliz', mira: [0, 0], ceja: 'feliz', salto: 3},
    piensa:   {bI: [140, 8, 80, 8], bD: [80, 7, -120, 10], dedo: true, boca: 0, ojo: 'normal', mira: [.6, -1], ceja: 'piensa'}
  }[pose] || {};
  const dy = -(P.salto || 0);
  let s = '<svg viewBox="0 0 100 100" class="pj pj-migas pose-' + pose + '" aria-hidden="true">';
  s += '<ellipse cx="46" cy="96" rx="' + (24 - (P.salto || 0) * 2) + '" ry="3" fill="#140F1F" opacity=".2"/>';
  s += '<g transform="translate(0 ' + dy + ')">';
  /* la cola, enroscada por detrás */
  s += '<g class="cola"><path d="M31 84 Q12 86 10 72 Q9 61 17 59" fill="none" stroke="' + T + '" stroke-width="4" stroke-linecap="round"/>' +
       '<path d="M31 84 Q12 86 10 72 Q9 61 17 59" fill="none" stroke="' + MV.rosa + '" stroke-width="2.3" stroke-linecap="round"/></g>';
  /* los pies, con sus deditos */
  s += '<g stroke="' + T + '" stroke-width="1.2" stroke-linejoin="round"><path d="M31 94.6 Q30 90.6 36.4 90.4 Q43 90.6 42.4 94.6 Z" fill="' + MV.rosa + '"/><path d="M50 94.6 Q49.4 90.6 56 90.4 Q62.4 90.6 61.4 94.6 Z" fill="' + MV.rosa + '"/></g>';
  s += '<g stroke="' + MV.rosaB + '" stroke-width=".8" stroke-linecap="round"><path d="M34.4 94.4 V92.8 M36.8 94.4 V92.4 M39.2 94.4 V92.8 M53.4 94.4 V92.8 M55.8 94.4 V92.4 M58.2 94.4 V92.8"/></g>';
  /* el cuerpo y el delantal */
  s += '<path d="M28.6 91 Q25 70 35 60 Q46 54 57 60 Q67 70 63.4 91 Z" fill="' + MV.pelo + '" stroke="' + T + '" stroke-width="1.6" stroke-linejoin="round"/>';
  s += '<path d="M34 67 Q46 64 58 67 Q61 80 59.6 91 L32.4 91 Q31 80 34 67 Z" fill="' + MV.tela + '" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  s += '<path d="M34 67 Q46 70 58 67" fill="none" stroke="#DCCFB4" stroke-width="1.4"/><path d="M39 79 H53 V85 Q46 87 39 85 Z" fill="none" stroke="#DCCFB4" stroke-width="1.2" stroke-linejoin="round"/>';
  s += '<g fill="#E4D9C4"><circle cx="37.6" cy="73" r="1.2"/><circle cx="54" cy="75" r="1"/><circle cx="48" cy="88" r="1.1"/></g>';
  const bi = brazo(36, 66, ...P.bI, 3.6, MV.pelo);
  s += bi.svg + mano(bi.x, bi.y, bi.ang, MV.rosa, MV.rosaB);
  /* las orejas */
  const o = P.orejas || 0;
  s += '<g stroke="' + T + '" stroke-width="1.6"><circle cx="' + (29.6 - o * .3) + '" cy="' + (26 + o) + '" r="11.6" fill="' + MV.pelo + '"/><circle cx="' + (62.4 + o * .3) + '" cy="' + (26 + o) + '" r="11.6" fill="' + MV.pelo + '"/></g>';
  s += '<circle cx="' + (30.4 - o * .3) + '" cy="' + (26.8 + o) + '" r="7" fill="' + MV.rosa + '"/><circle cx="' + (61.6 + o * .3) + '" cy="' + (26.8 + o) + '" r="7" fill="' + MV.rosa + '"/>';
  /* la cabeza en pera y el hocico claro */
  s += '<path d="M46 25.6 Q63.6 25.6 62.6 42.6 Q61.4 54.4 46 58.2 Q30.6 54.4 29.4 42.6 Q28.4 25.6 46 25.6 Z" fill="' + MV.cabeza + '" stroke="' + T + '" stroke-width="1.6" stroke-linejoin="round"/>';
  s += '<ellipse cx="46" cy="50.4" rx="8.6" ry="5.8" fill="' + MV.hocico + '"/>';
  /* el pañuelo rojo, anudado bajo la barbilla */
  s += '<path d="M34.6 55.4 Q46 62.6 57.4 55.4 L58.6 59.6 Q46 67 33.4 59.6 Z" fill="#C4462F" stroke="' + T + '" stroke-width="1.2" stroke-linejoin="round"/>';
  s += '<path d="M52.8 60.6 L58.4 67.4 L51 64.8 Z" fill="#C4462F" stroke="' + T + '" stroke-width="1.1" stroke-linejoin="round"/><circle cx="52.6" cy="61.8" r="2.1" fill="#B03C27" stroke="' + T + '" stroke-width="1"/>';
  s += '<g fill="#F6EFE2"><circle cx="38.6" cy="59.6" r=".9"/><circle cx="44" cy="61.8" r=".9"/><circle cx="49.4" cy="61.6" r=".9"/><circle cx="55.6" cy="58.4" r=".8"/></g>';
  s += '<ellipse cx="35.4" cy="48" rx="3" ry="1.9" fill="' + MV.rosa + '" opacity=".55"/><ellipse cx="56.6" cy="48" rx="3" ry="1.9" fill="' + MV.rosa + '" opacity=".55"/>';
  /* los ojos de ratón: negros y brillantes; en arco si está contento */
  if(P.ojo === 'feliz') s += '<path d="M36.8 41.4 Q40 37 43.2 41.4 M48.8 41.4 Q52 37 55.2 41.4" fill="none" stroke="#241C14" stroke-width="2" stroke-linecap="round"/>';
  else{
    const k = P.ojo === 'grande' ? 1.18 : 1, [mx, my] = P.mira;
    [40, 52].forEach(x => { s += '<ellipse class="ojo" cx="' + x + '" cy="40.6" rx="' + f1(3.3 * k) + '" ry="' + f1(3.8 * k) + '" fill="#241C14"/>' +
      '<circle cx="' + f1(x - 1.1 + mx * .9) + '" cy="' + f1(39.2 + my * .9) + '" r="1.3" fill="#fff"/>' +
      '<circle cx="' + f1(x + 1 + mx * .5) + '" cy="' + f1(42.2 + my * .5) + '" r=".55" fill="#fff" opacity=".8"/>' +
      parpado(x, 40.6, f1(3.3 * k), f1(3.8 * k), MV.cabeza, T); });
  }
  s += cejas([40, 52], 34.4, P.ceja, '#6E6058');
  /* los bigotes, desde las almohadillas del hocico */
  s += '<g fill="#8A7A6E"><circle cx="40.6" cy="50" r=".55"/><circle cx="41" cy="52" r=".55"/><circle cx="51.4" cy="50" r=".55"/><circle cx="51" cy="52" r=".55"/></g>';
  s += '<g stroke="' + T + '" stroke-width=".75" stroke-linecap="round" fill="none" opacity=".75"><path d="M39.6 49.6 Q34 47.6 28.6 48.2"/><path d="M39.8 51.8 Q34.4 52 29 54"/><path d="M52.4 49.6 Q58 47.6 63.4 48.2"/><path d="M52.2 51.8 Q57.6 52 63 54"/></g>';
  s += '<ellipse cx="46" cy="47.8" rx="2.3" ry="1.7" fill="#E39A88" stroke="#B9705F" stroke-width=".7"/><ellipse cx="45.3" cy="47.3" rx=".7" ry=".45" fill="#fff" opacity=".7"/>';
  s += '<path d="M46 49.5 V50.8" stroke="' + T + '" stroke-width=".7" stroke-linecap="round"/>';
  /* la boca, y los dos incisivos bajo el labio */
  const ab = P.boca;
  if(P.redonda) s += '<ellipse cx="46" cy="53.4" rx="1.9" ry="' + f1(1.4 + ab * 1.2) + '" fill="#8E4A50" stroke="' + T + '" stroke-width=".8"/>';
  else if(ab > .05) s += '<path d="M42.8 51 Q46 ' + f1(52 + ab * 5) + ' 49.2 51 Q46 51.8 42.8 51 Z" fill="#8E4A50" stroke="' + T + '" stroke-width=".9" stroke-linejoin="round"/>';
  else s += '<path d="M42.6 50.8 Q44.4 52.4 46 51 Q47.6 52.4 49.4 50.8" fill="none" stroke="' + T + '" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>';
  if(!P.redonda) s += '<path d="M45 51.1 H47 V52.7 Q46 53.1 45 52.7 Z" fill="#FBF7EE" stroke="' + T + '" stroke-width=".45" stroke-linejoin="round"/><path d="M46 51.2 V52.9" stroke="' + T + '" stroke-width=".4"/>';
  /* el gorro, entre las orejas */
  s += '<path d="M35.4 30.4 Q46 25.6 56.6 30.4 L56 34 Q46 29.8 36 34 Z" fill="#EDE6D6" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  s += '<path d="M36.2 30.6 Q33 20.4 41 20.2 Q43 15.4 46 15.6 Q49 15.4 51 20.2 Q59 20.4 55.8 30.6 Q46 26.6 36.2 30.6 Z" fill="#FBF7EE" stroke="' + T + '" stroke-width="1.3" stroke-linejoin="round"/>';
  s += '<path d="M41 22 Q42 25.6 41.2 28.4 M51 22 Q50 25.6 50.8 28.4" fill="none" stroke="#DCCFB4" stroke-width="1" stroke-linecap="round"/>';
  /* el brazo del cortador: el mango sale de la mano en la dirección del antebrazo */
  const bd = brazo(56, 65, ...P.bD, 3.6, MV.pelo);
  s += bd.svg;
  if(P.c) s += en(bd.x, bd.y, (P.cAng !== undefined ? P.cAng : bd.ang + 90 + 10), CORTADOR);
  s += mano(bd.x, bd.y, bd.ang, MV.rosa, MV.rosaB, P.dedo);
  return s + '</g></svg>';
}

const DIBUJA = {nick, nicoleta, migas};
const REDUCIDO = raiz.matchMedia && raiz.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* pone una postura en un hueco; si «hablar», mueve la boca un momento
   (alterna la postura con «calla») y se queda en la postura */
function ponCara(c, quien, pose, hablar){
  if(!c) return;
  clearInterval(c._parla);
  /* en los huecos pequeños, un plano más cerrado: el que diga data-vb */
  const pinta = p => { c.innerHTML = DIBUJA[quien](p); const vb = c.dataset.vb, sv = c.firstElementChild; if(vb && sv) sv.setAttribute('viewBox', vb); };
  pinta(pose);
  c.dataset.pose = pose;
  if(!hablar || REDUCIDO || !['habla', 'senala', 'telefono'].includes(pose)) return;
  let n = 0;
  c._parla = setInterval(() => {
    n++;
    pinta(n % 2 ? 'calla' : pose);
    if(n >= 7){ clearInterval(c._parla); pinta(pose); }
  }, 170);
}
/* el parpadeo: cada cara, a su aire, cada 2,5–5,5 s (a veces, dos seguidos).
   Lo lleva un reloj aparte, así que cambiar de postura o hablar no lo reinicia */
const toca = new WeakMap();
function parpadea(){
  const ahora = Date.now();
  document.querySelectorAll('svg.pj').forEach(sv => {
    const hueco = sv.parentElement || sv, t = toca.get(hueco);
    if(!t){ toca.set(hueco, ahora + 800 + Math.random() * 3000); return; }
    if(ahora < t || !sv.getClientRects().length) return;
    const doble = Math.random() < .2;
    toca.set(hueco, ahora + 2500 + Math.random() * 3000 + (doble ? 300 : 0));
    sv.querySelectorAll('.parpado').forEach(p => {
      const arriba = 'translateY(-' + p.dataset.h + 'px)', abajo = 'translateY(-' + p.dataset.c + 'px)';
      const k = doble ? [{transform: arriba}, {transform: abajo, offset: .2}, {transform: arriba, offset: .45}, {transform: abajo, offset: .7}, {transform: arriba}]
                      : [{transform: arriba}, {transform: abajo, offset: .45}, {transform: arriba}];
      p.animate(k, {duration: doble ? 380 : 170, easing: 'ease-in-out'});
    });
  });
}
if(!REDUCIDO && raiz.document) setInterval(parpadea, 120);
const POSES = {nick: ['habla', 'senala', 'grapa', 'sorpresa', 'celebra', 'piensa'], nicoleta: ['habla', 'senala', 'telefono', 'sorpresa', 'celebra', 'piensa'], migas: ['habla', 'senala', 'sorpresa', 'celebra', 'piensa']};
/* las caras de siempre, para quien no necesita postura */
raiz.Personajes = {nick, nicoleta, migas, DIBUJA, POSES, ponCara,
  get NICK(){ return nick('habla'); }, get NICOLETA(){ return nicoleta('habla'); }, get MIGAS(){ return migas('habla'); }};
})(window);
