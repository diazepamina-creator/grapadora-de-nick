# La grapadora de Nick

Fracciones equivalentes y comparación para 1.º y 2.º de ESO, rehechas desde cero a partir de lo aprendido con *La pizzería de Nick*, y en el formato de *Las piezas de Miut*. Un manipulativo de una sola página para el aula, publicado con GitHub Pages.

**Cortar reparte, grapar junta.** La equivalencia no se enuncia: es lo que sale de un gesto. Dos cuartos grapados *son* media pizza.

## Los tres juegos

- **Servir** — el cliente pide una fracción y la pizza viene cortada de otra manera. Con el cortador (multiplica arriba y abajo) y la grapadora (divide arriba y abajo) hay que preparar justo lo que pide.
- **Comparar** — dos mesas, dos fracciones: ¿quién se lleva más? La escalera, en el orden en que se demuestra: mismo denominador, mismo numerador, un corte cabe en el otro, ninguno cabe (el denominador común) e iguales disfrazados. Antes de tocar nada, la pizarra pide el signo: la comparación es una apuesta que se comprueba.
- **Por teléfono** — Nicoleta llama desde la pastelería con dos fracciones que el cortador no alcanza. Se cortan sobre el papel, y de ahí salen, demostrados, los productos en cruz.

Cada juego tiene su ruta de pedidos fijos y, en **Practicar**, pedidos nuevos sin fin con tres dificultades. Nick contesta a cada respuesta mala diciendo en voz alta el razonamiento que la produjo.

## Las reglas de la casa

- **El 1 es la superficie de una pizza entera.** Todo pedido termina en la regla del tique: la pizza es el envase; el número vive en la regla.
- **El cortador respeta lo grapado:** 1/2 pasa a 4/8 y sigue siendo una pieza. Un corte que no respeta las piezas avisa y pide un segundo toque.
- **Nada se resuelve solo:** la máquina grande no elige la pieza por el cliente; cortar no marca nada.
- **Poco texto en pantalla, y nada que parpadee.**

## Ficheros

La app es **un solo `index.html`**: se genera con `node construye.mjs` a partir de `src/`. Se edita `src/`, no `index.html`.

- `src/pagina.html` — la página: la cabecera, el encargo, la mesa, el tique, los ajustes, la guía y el acta.
- `src/motor.js` — la caja de pizza: cortar, grapar, la máquina, el valor. No dibuja nada; vale en el navegador y en Node.
- `src/pedidos.js` — los pedidos fijos de los tres juegos y los generadores de Practicar.
- `src/pizza.js` — la pizza en SVG. `src/personajes.js` — Nick y Nicoleta. `src/sonido.js` — el clac, el cortador, la tiza y el teléfono, sintetizados.
- `src/piel.css` — la encimera de mármol, las hojas y los botones (el formato de Miut). `src/mesa.css` — la mesa, la pizarra y el tique. `src/arranque.*` — la escena de inicio.
- `pruebas/` — `node --test pruebas/*.test.mjs`: el motor, los pedidos y que `index.html` esté construido.

## Historial

1. ✅ Versión 0.1: los tres juegos, la ruta, Practicar, la guía, los ajustes, el acta y la escena de inicio.

© 2026 Andrés Asensio · [CC BY-NC-ND 4.0](LICENSE.md) · [La pizzería de Nick](https://diazepamina-creator.github.io/pizzeria-de-nick/), la app anterior.
