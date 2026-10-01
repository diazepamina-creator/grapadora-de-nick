/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · el sonido del local
   Sintetizado en el navegador, sin archivos. Se quita en Ajustes.
     grapa    el clac de la grapadora
     corte    el silbido del cortador
     tiza     la tiza en la pizarra
     timbre   el teléfono
     bien     el pedido sale redondo
     mal      eso no
     trampa   el clac de la trampa para ratones
     ay       Nick, con el dedo pillado
     risita   Migas, con el queso
   El navegador no deja sonar nada hasta el primer toque.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
let activo = true, A = null;
function prepara(){
  if(A) return A;
  const AC = raiz.AudioContext || raiz.webkitAudioContext;
  if(!AC) return null;
  const ctx = new AC(), salida = ctx.createGain(); salida.gain.value = .8; salida.connect(ctx.destination);
  const ruido = ctx.createBuffer(1, ctx.sampleRate * .5, ctx.sampleRate), d = ruido.getChannelData(0);
  for(let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return A = {ctx, salida, ruido};
}
function rafaga(t, f, dur, vol, q){
  const s = A.ctx.createBufferSource(); s.buffer = A.ruido;
  const fl = A.ctx.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = f; fl.Q.value = q || 1.2;
  const g = A.ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  s.connect(fl); fl.connect(g); g.connect(A.salida); s.start(t); s.stop(t + dur + .02);
}
function tono(t, f, dur, vol, tipo){
  const o = A.ctx.createOscillator(); o.type = tipo || 'sine'; o.frequency.value = f;
  const g = A.ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .01);
  g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  o.connect(g); g.connect(A.salida); o.start(t); o.stop(t + dur + .02);
}
const SONIDOS = {
  grapa(t){ rafaga(t, 1400, .05, .35, 1.2); rafaga(t + .04, 600, .08, .3, 1); },
  corte(t){ rafaga(t, 3200, .12, .16, .8); rafaga(t + .05, 4200, .08, .1, .8); },
  tiza(t){ rafaga(t, 2400, .05, .14, 2); },
  timbre(t){ for(let k = 0; k < 6; k++) tono(t + k * .08, k % 2 ? 1180 : 980, .07, .08, 'square'); },
  bien(t){ tono(t, 659, .18, .14, 'triangle'); tono(t + .11, 988, .26, .12, 'triangle'); },
  mal(t){ tono(t, 160, .22, .16, 'square'); },
  /* la trampa: el chasquido seco del arco y el golpe de la tabla */
  trampa(t){ rafaga(t, 3800, .04, .5, 1.4); rafaga(t + .005, 1600, .06, .4, 1.2); tono(t, 180, .12, .22, 'triangle'); },
  /* el ¡ay! de Nick: una voz que sube de golpe y cae */
  ay(t){
    const o = A.ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(330, t); o.frequency.linearRampToValueAtTime(560, t + .07); o.frequency.exponentialRampToValueAtTime(260, t + .42);
    const f = A.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 1.6;
    const g = A.ctx.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.35, t + .03); g.gain.exponentialRampToValueAtTime(.0001, t + .45);
    o.connect(f); f.connect(g); g.connect(A.salida); o.start(t); o.stop(t + .5);
  },
  /* la risita de Migas: tres «ji» agudos y cortos */
  risita(t){ [0, .11, .22].forEach((d, i) => { tono(t + d, 1700 + i * 140, .07, .1, 'triangle'); tono(t + d + .02, 2300 + i * 160, .05, .05, 'sine'); }); }
};
function toca(nombre, retraso){
  if(!activo || !SONIDOS[nombre]) return;
  try{
    if(!prepara()) return;
    if(A.ctx.state === 'suspended') A.ctx.resume();
    SONIDOS[nombre](A.ctx.currentTime + .02 + (retraso || 0));
  }catch(err){}
}
if(raiz.addEventListener) raiz.addEventListener('pointerdown', () => {
  if(activo) try{ const a = prepara(); if(a && a.ctx.state === 'suspended') a.ctx.resume(); }catch(err){}
}, {once: true});
raiz.Sonido = {toca, activo: v => { activo = !!v; }};
})(window);
