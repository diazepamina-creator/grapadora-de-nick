/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · la escena de inicio
   La app en pequeño: cae una pizza entera en la caja, el cortador la parte
   en cuatro, dos cuartos se levantan y la grapadora los junta: sale media
   pizza, y el nombre. Unos cuatro segundos; se salta tocando, o con Intro,
   espacio o Esc. Solo al abrir la app, no al recargar en la misma sesión.
   No hay dibujo propio: la pizza es la de verdad y los pasos, del motor.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const M = raiz.Motor, PZ = raiz.Pizza, S = raiz.Sonido;
const VISTA = 'grapadora.inicio';
function escena(el, alAcabar){
  try{ raiz.sessionStorage.setItem(VISTA, 'visto'); }catch(err){}
  const h = document.documentElement;
  h.dataset.inicio = 'si';
  el.hidden = false;
  const caja = el.querySelector('.inCaja'), titulo = el.querySelector('.inTitulo');
  const c = M.nuevaCaja(1);
  const pinta = () => { caja.innerHTML = ''; caja.appendChild(PZ.dibuja(c)); };
  pinta();
  const ts = [];
  let hecho = false;
  const luego = (ms, fn) => ts.push(setTimeout(fn, ms));
  function fin(){
    if(hecho) return;
    hecho = true;
    ts.forEach(clearTimeout);
    removeEventListener('keydown', tecla, true);
    el.classList.add('fuera');
    setTimeout(() => {
      el.hidden = true; delete h.dataset.inicio;
      const m = document.querySelector('main');
      if(m && m.animate) m.animate([{opacity: 0}, {opacity: 1}], {duration: 350, easing: 'ease-out'});
      if(alAcabar) alAcabar();
    }, 480);
  }
  function tecla(ev){ ev.stopPropagation(); if(['Enter', ' ', 'Escape'].includes(ev.key)){ ev.preventDefault(); fin(); } }
  el.addEventListener('click', fin);
  addEventListener('keydown', tecla, true);
  luego(900, () => { M.recorta(c, 4); pinta(); if(S) S.toca('corte'); });
  luego(1700, () => { M.toca(c, 0); pinta(); });
  luego(2100, () => { M.toca(c, 1); pinta(); });
  luego(2700, () => { M.grapa(c); pinta(); if(S) S.toca('grapa'); });
  luego(3200, () => titulo.classList.add('ve'));
  luego(5000, fin);
}
raiz.Arranque = {escena};
})(window);
