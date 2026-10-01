# Pendiente

## ✅ Hecho en la versión 0.4: la trampa para ratones

La idea de Andrés (1 de octubre de 2026). Se queda aquí como registro de lo que se pensó.

Como en Las piezas de Miut, cada respuesta tendrá su animación: una para el acierto y otra para el fallo o para lo que no se puede hacer. El objeto de la casa es **la típica trampa para ratones**, de tabla de madera, muelle, arco de alambre y un taco de queso en el cebo.

- **Si hay fallo:** Nick se pilla **un dedo del pie** con la trampa. ¡Clac! Da un salto, pone cara de dolor y la trampa se le queda colgando un momento del pie.
- **Si hay acierto:** Migas hace algo gracioso. Por ejemplo, se lleva el queso de la trampa sin que salte, o la desarma con el cortador y se come el cebo, o baila con el queso. Hay que decidirlo.

### Lo que hace Miut, para inspirarse (revisado en su `index.html`)

- **El golpe que no vale** (`cancela`): cuando Miut va a golpear con un primo que no divide, un gato naranja de calcetín blanco le da un manotazo en la pata antes de que llegue. Salta un chispazo de rayitas y suena una riña. La piedra ni se toca.
- **El choque de manos** (`chocaCinco`): una viñeta redonda, como una pegatina, por encima de todo. Las dos manos chocan, salen rayos dorados y suena un «¡plas!» con un «¡prrr!» contento.
- **El acierto en la obra**: el borde de la obra se enciende en verde dos veces y caen unas pocas piezas diminutas, de los colores de los primos usados. Poco, y en su caja: la mesa no se llena de papelitos. Sin animaciones, solo queda el borde verde.
- **Las siete vidas**: al fallar, la cabeza recibe un zarpazo, se queda en hueco y de ella sale un angelito, pálido, con aureola y alitas, que sube y se desvanece.
- **Las reglas**: todo es cortito, se ve una vez y no tapa la mesa. Se desactiva con «patas sin animación» y con `prefers-reduced-motion`, y lleva su sonido sintetizado.

### Cómo encajaría aquí

- El fallo: una respuesta mala en Comparar o por teléfono, una grapa entre piezas sueltas, un corte que rompe lo grapado. Nick dice ya la réplica; la trampa sería el remate visual. Hay que decidir si salta en todos los fallos o solo en los de pregunta.
- El acierto: el pedido servido y la comparación bien contestada.
- Sonidos nuevos en `src/sonido.js`: el clac de la trampa, un «¡ay!» de Nick y la risita de Migas.
- Un ajuste para quitarlo, «Sin animaciones», y respeto de `prefers-reduced-motion`.
