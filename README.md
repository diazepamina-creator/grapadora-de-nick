# La grapadora de Nick

Fracciones equivalentes y comparación para 1.º y 2.º de ESO, rehechas desde cero a partir de lo aprendido con *La pizzería de Nick*, y en el formato de *Las piezas de Miut*. Un manipulativo de una sola página para el aula, publicado con GitHub Pages.

**Cortar reparte, grapar junta.** La equivalencia no se enuncia: es lo que sale de un gesto. Dos cuartos grapados *son* media pizza.

## Los tres juegos

- **Servir** — el cliente pide una fracción y la pizza viene cortada de otra manera. Con el cortador (multiplica arriba y abajo) y la grapadora (divide arriba y abajo) hay que preparar justo lo que pide.
- **Comparar** — dos mesas, dos fracciones: ¿quién se lleva más? La escalera, en el orden en que se demuestra: mismo denominador, mismo numerador, un corte cabe en el otro, ninguno cabe (el denominador común) e iguales disfrazados. Antes de tocar nada, la pizarra pide el signo: la comparación es una apuesta que se comprueba.
- **Por teléfono** — Nicoleta llama desde la pastelería con dos fracciones que el cortador no alcanza. Se cortan sobre el papel, y de ahí salen, demostrados, los productos en cruz.

Cada juego tiene su ruta de pedidos fijos y, en **Practicar**, pedidos nuevos sin fin con tres dificultades. Nick contesta a cada respuesta mala diciendo en voz alta el razonamiento que la produjo. En la cocina le ayuda **Migas**, el ratón del obrador de Nicoleta, que baja a encargarse del cortador y da los avisos de la mesa.

**Entrevistas** (el micrófono de arriba): Nick, Nicoleta y Migas contestan a lo que se les pregunte.

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
- `src/pizza.js` — la pizza en SVG. `src/personajes.js` — Nick, Nicoleta y Migas, articulados: una función por personaje que dibuja cada postura. `src/entrevistas.*` — las entrevistas. `src/sonido.js` — el clac, el cortador, la tiza y el teléfono, sintetizados.
- `src/trampa.*` — la trampa para ratones: las viñetas del fallo y del acierto.
- `src/piel.css` — la encimera de mármol, las hojas y los botones (el formato de Miut). `src/mesa.css` — la mesa, la pizarra y el tique. `src/arranque.*` — la escena de inicio.
- `pruebas/` — `node --test pruebas/*.test.mjs`: el motor, los pedidos y que `index.html` esté construido.

## Historial

1. ✅ Versión 0.1: los tres juegos, la ruta, Practicar, la guía, los ajustes, el acta y la escena de inicio.
2. ✅ Versión 0.2: pizzas con textura (corteza tostada, tomate, queso fundido, pepperoni, aceitunas, albahaca); Migas, el ratón pinche del cortador, que da los avisos de la mesa; y las entrevistas a Nick, Nicoleta y Migas.
3. ✅ Versión 0.3: Migas es el ratón del obrador de Nicoleta, el mismo de la pastelería, y está pulido: el gorro asentado entre las orejas, los incisivos bajo el labio, las manos con sus dedos (una rodea el mango del cortador), los bigotes desde el hocico y el pañuelo anudado bajo la barbilla. Nick agarra de verdad la grapadora y Nicoleta, la manga pastelera.
4. ✅ Versión 0.4: la trampa para ratones, como el choque de manos de Miut: al fallar una pregunta, Nick pisa la trampa y se pilla el dedo gordo (¡AY!); al servir o acertar, Migas se lleva el queso sin que salte. Con su clac, su ¡ay! y la risita de Migas; se quita en Ajustes.
5. ✅ Versión 0.5: Nick, Nicoleta y Migas, articulados como Jeferión y Listillón en La palestra: brazos con hombro y codo, ojos que miran, cejas y boca que se abre al hablar. Cada uno tiene sus posturas —habla, señala, sorpresa, celebra, piensa; Nick, además, el clac de la grapadora, y Nicoleta, el teléfono—, y las usan el encargo, los avisos de Migas, la llamada de Nicoleta y las entrevistas.
6. ✅ Versión 0.6: los dos gestos, a la vista. Al cortar, la rueda de Migas recorre la pizza por cada corte nuevo —de borde a borde si es un diámetro— y la raya se dibuja a su paso; luego, la pizza cortada. Al grapar, la grapadora de Nick baja sobre cada junta, una tras otra, y cada grapa se clava con su clac. Mientras pasan, la mesa no se toca, y la viñeta del acierto espera a que acaben y sale donde no tapa la pizza.
7. ✅ Versión 0.7: la réplica, donde se mira, y el parpadeo de verdad. Al fallar «¿quién se lleva más?», Nick contesta en un bocadillo justo debajo de los botones, con la cola hacia el que se ha pulsado, y ese botón queda tachado. Nick, Nicoleta y Migas parpadean con un párpado del color de la cara que baja y sube, cada uno a su aire y a veces dos veces seguidas; hablar o cambiar de postura ya no lo reinicia.
8. ✅ Versión 0.8: la porción y la regla, vivas. Al elegir un trozo, sube de la pizza con un rebote; al soltarlo, vuelve a su sitio. En el tique, cada marca se desliza por la regla desde donde estaba —desde el 0, la primera vez— y, al acertar una comparación, el hueco entre las dos marcas crece de la menor a la mayor.
9. ✅ Versión 0.9: los detalles. El signo de la apuesta se escribe con tiza en la pizarra, trazo a trazo y con su grano; el auricular de Nicoleta tiembla mientras suena el teléfono; y, al final de la escena de inicio, Nick y Migas asoman por los lados de la caja. La viñeta del acierto, rehecha: Migas entra entero, de puntillas, agarra la punta del queso, da un paso atrás —la trampa salta sobre nada— y lo levanta de fiesta; ya no sale recortado.
10. ✅ Versión 0.10: Migas, de lado. En la viñeta del acierto, Migas entra de perfil andando —las patas se turnan, el brazo se balancea y el cuerpo sube y baja con cada paso—, alcanza la punta del queso, tira de él (la trampa salta sobre nada) y da un saltito con el queso en alto, y otro más pequeño.

© 2026 Andrés Asensio · [CC BY-NC-ND 4.0](LICENSE.md) · [La pizzería de Nick](https://diazepamina-creator.github.io/pizzeria-de-nick/), la app anterior.
