/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · las entrevistas
   Nick, Nicoleta y Migas contestan a lo que se les pregunte, como en Las
   piezas de Miut y en La palestra. Cada respuesta se escribe poco a poco
   mientras mueven la boca; algunas preguntas abren una repregunta.
   Las respuestas enseñan de verdad: lo que dicen es lo que hace la app.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const REDUCIDO = raiz.matchMedia && raiz.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ENTREVISTAS = {
  nick: {nombre: 'Nick', cargo: 'pizzero, y dueño de la grapadora',
    hola: 'Pregunte, pregunte, que el horno no espera. Y si le sobra un minuto, le grapo algo.',
    preguntas: [
      {id: 'n1', pose: 'senala', p: '¿Por qué grapa las pizzas?',
       r: 'Porque el cliente siempre quiere su pedido <b>en una pieza</b>. Dos cuartos grapados son media pizza: la misma cantidad, con otro nombre. Grapar de dos en dos es <b>dividir arriba y abajo entre 2</b>: 2/4 = 1/2.'},
      {id: 'n1b', pose: 'piensa', tras: 'n1', p: '¿Y si grapo tres octavos?',
       r: 'Sale una pieza, sí, pero 3 no cabe en 8: esa pieza no es <b>un trozo de nada entero</b>. No hay división que enseñar. La grapadora grapa lo que le echen; las cuentas, no.'},
      {id: 'n2', pose: 'celebra', p: '¿No se notan las grapas al comer?', feliz: true,
       r: 'Se quitan antes de servir. Casi siempre. Lo que importa es que, grapada o suelta, <b>la pizza pesa lo mismo</b>: ni grapar ni cortar cambia la cantidad. Solo el nombre.'},
      {id: 'n3', pose: 'senala', p: '¿Por qué todas sus pizzas miden lo mismo?',
       r: 'Porque si una fuera más grande, un cuarto de esa no sería un cuarto de las otras, y no habría manera de comparar. En esta casa <b>el 1 es la superficie de una pizza</b>. Sin la misma unidad, las fracciones no se hablan.'},
      {id: 'n4', pose: 'senala', p: '¿Por qué 1/4 es menos que 1/3, si 4 es más que 3?',
       r: 'Esa me la hacen todos los días. El 4 de abajo dice <b>en cuántos trozos se corta</b>, no cuánto te llevas. Pizza para cuatro, trozo pequeño; pizza para tres, trozo más grande. <b>Más comensales, menos ración.</b>'},
      {id: 'n5', pose: 'celebra', p: '¿Es verdad que es usted una morsa?', feliz: true,
       r: 'Y a mucha honra. El bigote de pizzero lo traía de serie. Lo malo son los colmillos: para probar la salsa hay que tener <b>mucho pulso</b>.'},
      {id: 'n6', pose: 'sorpresa', p: '¿Qué es eso de «sumar como Nick»?',
       r: '…Eso lo dice mi hermana. Una vez, para doblar una receta de 4 personas a 8, <b>le sumé 4 a cada cosa</b> en vez de multiplicar por 2. Salió una masa con ocho huevos para dos tazas de harina. No se hable más del tema.'},
      {id: 'n7', pose: 'celebra', p: '¿Qué hace un ratón en su cocina?', feliz: true,
       r: '¿Migas? Es el ratón del obrador de mi hermana, pero los días de mucho lío me lo presta. Es el mejor con el cortador: yo <b>junto</b>, él <b>reparte</b>. Entre los dos, cualquier fracción. Y no se come el queso. Casi nunca.'}
    ]},
  nicoleta: {nombre: 'Nicoleta', cargo: 'pastelera, hermana de Nick, dos portales más allá',
    hola: 'Te atiendo, pero rápido: tengo magdalenas en el horno y a mi hermano al teléfono.',
    preguntas: [
      {id: 'c1', pose: 'telefono', p: '¿Por qué siempre encarga por teléfono?',
       r: 'Porque mis encargos son de los difíciles: <b>7/8 contra 6/7</b>. Harían falta 56 trozos, y el cortador de Nick no hila tan fino. Así que lo cortamos <b>sobre el papel</b>.'},
      {id: 'c2', pose: 'senala', p: '¿Qué es eso de multiplicar en cruz?', tras: 'c1',
       r: 'Nada de trucos. Para ponerlas en la misma secuencia, cada una se multiplica arriba y abajo por el denominador de la otra: <b>7/8 = 49/56</b> y <b>6/7 = 48/56</b>. Y fíjate: 49 = 7×7, 48 = 8×6. Esos son <b>los productos en cruz</b>.'},
      {id: 'c3', pose: 'celebra', p: '¿Quién cocina mejor, usted o Nick?', feliz: true,
       r: 'Él hace pizzas y yo hago pasteles. Pero yo <b>multiplico</b> las recetas y él las suma. Saca tus propias conclusiones.'},
      {id: 'c4', pose: 'habla', p: '¿Qué tienen que ver las fracciones con la pastelería?',
       r: 'Todo. Media receta, un tercio de azúcar, tres huevos por cada dos tazas… Una pastelería es el sitio donde <b>las razones se usan sin llamarlas así</b>.'},
      {id: 'c5', pose: 'senala', p: '¿Y cómo sabe quién se lleva más?',
       r: 'Cuando las dos están en la misma secuencia, <b>gana el numerador mayor</b>: 49 trozos de 56 son más que 48 de 56. Antes de igualarlas, contar trozos no sirve de nada.'},
      {id: 'c6', pose: 'celebra', p: '¿Le cae bien Migas?', feliz: true,
       r: 'Es mi ratón del obrador: vive debajo del mostrador y se come lo que sobra de cada reparto, por eso sabe tanto de porcentajes. Se lo presto a Nick, con una condición: que no <b>corte las magdalenas en quinceavos</b>, que se me desmoronan.'}
    ]},
  migas: {nombre: 'Migas', cargo: 'el ratón del obrador de Nicoleta, que baja a llevar el cortador',
    hola: '¡Hola! ¿Es para mí? ¡Nadie me pregunta nunca nada! ¿Quiere que le corte algo?',
    preguntas: [
      {id: 'm1', pose: 'celebra', p: '¿Por qué te llamas Migas?', feliz: true,
       r: 'Porque de pequeño cortaba las pizzas en tantos trozos que al final solo quedaban migas. Pero aprendí una cosa: <b>cortar más fino no cambia la cantidad</b>. La pizza entera sigue siendo 1, esté en 4 trozos o en 400.'},
      {id: 'm2', pose: 'senala', p: '¿Qué hace exactamente el cortador?',
       r: 'Si una pizza está en cuartos y la corto en 8, cada cuarto se hace dos octavos: <b>hay el doble de trozos y cada uno es la mitad</b>. Por eso 3/4 = 6/8: se multiplica arriba y abajo por 2.'},
      {id: 'm3', pose: 'sorpresa', p: '¿Por qué a veces el cortador avisa?',
       r: 'Porque pasar de cuartos a tercios <b>no respeta las piezas</b>: los cortes nuevos caen donde no había, y se pierde lo grapado. Si el corte nuevo es un múltiplo del viejo —de 4 a 8, a 12—, lo grapado aguanta.'},
      {id: 'm4', pose: 'senala', p: '¿Qué es un denominador?',
       r: 'El número de trozos en que corto la pizza: el de <b>abajo</b>. El de arriba, el numerador, es cuántos trozos te llevas tú. Yo me encargo del de abajo; de lo que te llevas, se encarga tu hambre.'},
      {id: 'm5', pose: 'piensa', p: '¿Cuál es el máximo de trozos?',
       r: 'Quince. Más allá, los trozos se me hacen <b>migas</b> y el jefe se enfada. Para 56 trozos, lo que hace Nicoleta: <b>se corta sobre el papel</b>, que ahí no se desmorona nada.'},
      {id: 'm6', pose: 'senala', p: '¿Cómo se comparan dos pizzas cortadas distinto?',
       r: 'Primero las corto <b>igual</b>, donde quepan los dos cortes. Tercios y quintos: en 15. Entonces los trozos son del mismo tamaño y ya solo hay que <b>contar</b>. Eso es el denominador común.'},
      {id: 'm7', pose: 'sorpresa', p: '¿Te comes el queso?', feliz: true,
       r: '¡Yo no! …Bueno, alguna hebra que se queda en el cortador. Eso no cuenta: es <b>menos de un quinceavo</b>.'}
    ]}
};

function monta(el, PJ){
  const q = el.querySelector('.ev-quien'), cartel = el.querySelector('.ev-cartel'), cara = el.querySelector('.ev-cara'),
        pre = el.querySelector('.ev-pregunta'), txt = el.querySelector('.ev-respuesta'), lista = el.querySelector('.ev-lista');
  const CARAS = {nick: PJ.nick('habla'), nicoleta: PJ.nicoleta('habla'), migas: PJ.migas('habla')};
  const ev = {quien: 'nick', hechas: new Set(), tok: 0};
  q.innerHTML = Object.keys(ENTREVISTAS).map(k => '<button type="button" data-q="' + k + '"><span class="ev-mini" aria-hidden="true">' + CARAS[k] + '</span>' + ENTREVISTAS[k].nombre + '</button>').join('');
  q.querySelectorAll('button').forEach(b => b.addEventListener('click', () => elige(b.dataset.q)));
  function elige(k){
    ev.quien = k; ev.tok++;
    const E = ENTREVISTAS[k];
    q.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.q === k)));
    el.dataset.quien = k;
    cartel.innerHTML = '<b>' + E.nombre + '</b>, ' + E.cargo + '.';
    cara.dataset.q = k;
    pre.textContent = '';
    habla(E.hola, k === 'migas' ? 'celebra' : 'habla');
    pintaLista();
  }
  function pintaLista(){
    const E = ENTREVISTAS[ev.quien];
    lista.innerHTML = '';
    E.preguntas.filter(p => !p.tras || ev.hechas.has(p.tras)).forEach(p => {
      const b = document.createElement('button'); b.type = 'button';
      b.className = 'ev-p' + (ev.hechas.has(p.id) ? ' hecha' : '') + (p.tras ? ' repregunta' : '');
      b.innerHTML = (p.tras ? '<span class="ev-re">Y además… </span>' : '') + p.p;
      b.addEventListener('click', () => {
        ev.hechas.add(p.id); pre.textContent = '—' + p.p;
        habla(p.r, p.pose || (p.feliz ? 'celebra' : 'habla')); pintaLista();
        if(raiz.Sonido) raiz.Sonido.toca(p.feliz ? 'bien' : 'tiza');
      });
      lista.appendChild(b);
    });
  }
  /* la respuesta se escribe poco a poco mientras mueve la boca; al acabar,
     la postura de la respuesta (contento, pensando, señalando…) */
  const HABLAN = ['habla', 'senala', 'telefono'];
  function habla(html, pose){
    const tok = ++ev.tok, quien = ev.quien, dibu = PJ.DIBUJA[quien];
    const trozos = html.split(/(<[^>]+>)/).filter(Boolean);
    const total = trozos.reduce((s, t) => s + (t[0] === '<' ? 0 : t.length), 0);
    const mientras = HABLAN.includes(pose) ? pose : 'habla';
    const cierre = () => { if(ev.tok !== tok) return; txt.innerHTML = html; cara.innerHTML = dibu(pose); cara.classList.toggle('feliz', pose === 'celebra'); };
    cara.classList.remove('feliz');
    if(REDUCIDO){ cierre(); return; }
    let n = 0;
    const paso = () => {
      if(ev.tok !== tok) return;
      n = Math.min(total, n + 2);
      let quedan = n, h = '';
      for(const t of trozos){ if(t[0] === '<'){ h += t; continue; } if(quedan <= 0) break; h += t.slice(0, quedan); quedan -= t.length; }
      txt.innerHTML = h;
      cara.innerHTML = dibu(Math.floor(n / 6) % 2 ? 'calla' : mientras);
      if(n < total) setTimeout(paso, 26); else cierre();
    };
    paso();
  }
  return {abre: () => elige(ev.quien), calla: () => { ev.tok++; }};
}
raiz.Entrevistas = {ENTREVISTAS, monta};
})(window);
