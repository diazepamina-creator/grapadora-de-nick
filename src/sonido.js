/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · el sonido del local
   Sintetizado en el navegador, sin archivos. Se quita en Ajustes.
     grapa    el clac de la grapadora
     corte    el silbido del cortador
     tiza     la tiza en la pizarra
     timbre   el teléfono
     bien     el pedido sale redondo
     mal      eso no
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
  mal(t){ tono(t, 160, .22, .16, 'square'); }
};
function toca(nombre){
  if(!activo || !SONIDOS[nombre]) return;
  try{
    if(!prepara()) return;
    if(A.ctx.state === 'suspended') A.ctx.resume();
    SONIDOS[nombre](A.ctx.currentTime + .02);
  }catch(err){}
}
if(raiz.addEventListener) raiz.addEventListener('pointerdown', () => {
  if(activo) try{ const a = prepara(); if(a && a.ctx.state === 'suspended') a.ctx.resume(); }catch(err){}
}, {once: true});
raiz.Sonido = {toca, activo: v => { activo = !!v; }};
})(window);
