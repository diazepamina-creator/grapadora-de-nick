/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · los personajes
   Nick, el pizzero: una morsa con gorro, delantal y la grapadora en alto.
   Es el mismo dibujo que en La pizzería de Nick, la pastelería y la línea
   del tiempo. Parpadea, el brazo da el clac al grapar y salta cuando el
   pedido sale redondo (las clases .ojo, .brazo, .boca y .boca-f).
   Nicoleta, su hermana, llama por teléfono desde la pastelería.
   Migas, el ratón del obrador de Nicoleta (el mismo de la pastelería:
   gris pardo, orejas grandes, cabeza en pera, delantal y gorro), que baja
   a echar una mano con el pañuelo rojo de la pizzería y el cortador de
   pizza, más grande que su cara. Nick junta con
   la grapadora; Migas reparte con el cortador. De pequeño cortaba tan
   fino que solo quedaban migas.
   ══════════════════════════════════════════════════════════════════════ */
(function (raiz) {
'use strict';
const NICK = `<svg viewBox="0 -12 78 108" class="cara">
  <ellipse cx="39" cy="92" rx="26" ry="3.6" fill="rgba(60,40,20,.22)"/>
  <path d="M12 92 Q12 64 26 57.5 L52 57.5 Q66 64 66 92 Z" fill="#F6EFE2" stroke="#3A2E22" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M52 57.5 Q66 64 66 92 L54 92 Q56 70 48 60 Z" fill="#DFD6C2" stroke="#3A2E22" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M24 66 L54 66 Q56 82 53 92 L27 92 Q23 80 24 66 Z" fill="#C4462F" stroke="#3A2E22" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M24 66 Q39 71 54 66" stroke="#9E3423" stroke-width="2" fill="none"/>
  <g fill="#E8B08F" opacity=".55"><circle cx="32" cy="78" r="2.4"/><circle cx="45" cy="84" r="1.8"/>
    <circle cx="38" cy="88" r="1.4"/></g>
  <path d="M50 58 Q60 56 63 63 Q57 64 54 70 Z" fill="#EFE6D2" stroke="#3A2E22" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M24 66 Q14 72 16 84" stroke="#3A2E22" stroke-width="7.5" fill="none" stroke-linecap="round"/>
  <path d="M24 66 Q14 72 16 84" stroke="#F6EFE2" stroke-width="5.4" fill="none" stroke-linecap="round"/>
  <circle cx="17" cy="85" r="4" fill="#C9A17C" stroke="#3A2E22" stroke-width="1.4"/>
  <g class="brazo">
  <path d="M54 64 Q66 58 68 46" stroke="#3A2E22" stroke-width="7.5" fill="none" stroke-linecap="round"/>
  <path d="M54 64 Q66 58 68 46" stroke="#F6EFE2" stroke-width="5.4" fill="none" stroke-linecap="round"/>
  <g transform="translate(56.8 34.4) rotate(-18)">
    <rect x="0" y="0" width="19" height="6.5" rx="2.2" fill="#9AA2AC" stroke="#3A2E22" stroke-width="1.3"/>
    <rect x="1.5" y="6" width="16" height="4.4" rx="1.6" fill="#6E7680" stroke="#3A2E22" stroke-width="1.2"/>
    <rect x="3" y="1.4" width="9" height="2" rx="1" fill="#C6CBD1"/>
  </g>
  <circle cx="68.5" cy="44" r="4.2" fill="#C9A17C" stroke="#3A2E22" stroke-width="1.4"/>
  <path d="M65.6 42.6 Q68.4 41.4 71.2 42.6 M65.4 44.8 Q68.4 43.6 71.4 44.8" fill="none" stroke="#8E6A4E" stroke-width=".9" stroke-linecap="round"/>
  </g>
  <path d="M32.6 44 Q33.2 52 31.4 58.5 L45 58.5 Q43.2 52 43.8 44 Z"
        fill="#C9A17C" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M32.6 44 Q33.2 52 31.4 58.5 L36.6 58.5 Q35.8 52 36.2 44 Z" fill="#B08A6A"/>
  <path d="M27.4 55 L38.2 65.5 L49 55 L52.4 57 L38.2 67.5 L24 57 Z"
        fill="#FBF7EE" stroke="#3A2E22" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M38.2 65.5 L49 55 L52.4 57 L38.2 67.5 Z" fill="#E6DDC9"/>
<g transform="translate(38 46) scale(1.18) translate(-38 -46)">  
  <ellipse cx="38" cy="34.5" rx="16.5" ry="15" fill="#D3AC88" stroke="#6B4A32" stroke-width="1.7"/>
  <path d="M23.5 32 Q25 44 30.5 48.5 Q26.5 42 26 31 Z" fill="#B08A6A"/>
  <g transform="rotate(-7 38 20) translate(0 -2.5)">
    <path d="M22 24 Q20 6 38 6.5 Q56 6 54 24 Z" fill="#FBF7EE" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M25 12 Q30 3 38 5 Q46 3 51 12 Q44 8 38 9.5 Q32 8 25 12 Z" fill="#FFFFFF" opacity=".8"/>
    <rect x="21" y="22.5" width="34" height="6" rx="2.4" fill="#EDE6D6" stroke="#3A2E22" stroke-width="1.5"/>
  </g>
  <ellipse cx="25" cy="39.5" rx="4.2" ry="2.8" fill="#E39A88" opacity=".5"/>
  <ellipse cx="51" cy="39.5" rx="4.2" ry="2.8" fill="#E39A88" opacity=".5"/>
  <ellipse cx="31.8" cy="34.4" rx="4.3" ry="4.6" fill="#FBF7EE" stroke="#6B4A32" stroke-width="1.3"/>
  <ellipse cx="44.2" cy="34.4" rx="4.3" ry="4.6" fill="#FBF7EE" stroke="#6B4A32" stroke-width="1.3"/>
  <circle class="ojo" cx="32.5" cy="35" r="2.7" fill="#241C14"/>
  <circle class="ojo" cx="44.9" cy="35" r="2.7" fill="#241C14"/>
  <circle cx="31.3" cy="33.6" r="1.15" fill="#fff"/><circle cx="43.7" cy="33.6" r="1.15" fill="#fff"/>
  <circle cx="33.7" cy="36.4" r=".55" fill="#fff" opacity=".8"/>
  <circle cx="46.1" cy="36.4" r=".55" fill="#fff" opacity=".8"/>
  <path d="M29.6 42.4 Q29.2 49.6 34 50.2 Q38 50.6 38 48 Q38 50.6 42 50.2
           Q46.8 49.6 46.4 42.4 Q42.6 40.2 38 40.4 Q33.4 40.2 29.6 42.4 Z"
        fill="#EBD2B8" stroke="#6B4A32" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M38 40 V51.3" stroke="#C39F7E" stroke-width="1.1" opacity=".8"/>
  <path d="M35.4 41 Q38 39.9 40.6 41 Q40.2 44.4 38 45.4 Q35.8 44.4 35.4 41 Z"
        fill="#E39A88" stroke="#B9705F" stroke-width=".9" stroke-linejoin="round"/>
  <ellipse cx="36.8" cy="41.6" rx=".6" ry=".45" fill="#fff" opacity=".7"/>
  <g stroke="#F2E8D6" stroke-width=".9" stroke-linecap="round" opacity=".85">
    <path d="M29.6 45 Q24.5 44.2 22.5 45.6"/><path d="M30.2 47.8 Q25.4 48.4 23.4 50"/>
    <path d="M46.4 45 Q51.5 44.2 53.5 45.6"/><path d="M45.8 47.8 Q50.6 48.4 52.6 50"/>
  </g>
  <g fill="#B08A6A" opacity=".55">
    <circle cx="31.4" cy="45.4" r=".7"/><circle cx="32.4" cy="48" r=".7"/>
    <circle cx="44.6" cy="45.4" r=".7"/><circle cx="43.6" cy="48" r=".7"/>
  </g>
  <path d="M34.4 50.2 Q34.3 52 35.3 52.5 Q36.1 51.9 36 50 Z"
        fill="#F6EEDC" stroke="#6B4A32" stroke-width="1" stroke-linejoin="round"/>
  <path d="M41.6 50.2 Q41.7 52 40.7 52.5 Q39.9 51.9 40 50 Z"
        fill="#F6EEDC" stroke="#6B4A32" stroke-width="1" stroke-linejoin="round"/>
  <path class="boca" d="M36.2 48.4 Q38 49.6 39.8 48.4" stroke="#8E5A44" stroke-width="1.4"
        fill="none" stroke-linecap="round"/>
  <path class="boca-f" d="M35 47.4 Q38 52.2 41 47.4 Q38 49.2 35 47.4 Z"
        fill="#8E5A44" stroke="#8E5A44" stroke-width="1.1" stroke-linejoin="round"/>
</g></svg>`;
const NICOLETA = `<svg viewBox="0 0 46 48" aria-hidden="true">
  <path d="M6 46 Q6 33 16 29.5 L30 29.5 Q40 33 40 46 Z" fill="#F6EFE2" stroke="#3A2E22" stroke-width="1.3"/>
  <path d="M13 33 L33 33 Q35 40 33.4 46 L12.6 46 Q11 40 13 33 Z" fill="#D98C9A" stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M13 33 Q23 36.6 33 33" stroke="#B96D7C" stroke-width="1.6" fill="none"/>
  <g fill="#EFD9C6" opacity=".6"><circle cx="18" cy="39.5" r="1.7"/><circle cx="28" cy="42" r="1.3"/></g>
  <path d="M31 32 Q39 28 39.6 21" stroke="#3A2E22" stroke-width="5.2" fill="none" stroke-linecap="round"/>
  <path d="M31 32 Q39 28 39.6 21" stroke="#F6EFE2" stroke-width="3.6" fill="none" stroke-linecap="round"/>
  <path d="M36.8 20.6 L42.4 20.6 L40.4 12.6 Q39.6 11.2 38.8 12.6 Z" fill="#EFE7D6" stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M38.6 12.8 Q39.6 9.2 40.8 12" fill="none" stroke="#D98C9A" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="39.6" cy="20.8" r="2.4" fill="#D3AC88" stroke="#3A2E22" stroke-width="1"/>
  <path d="M38.2 20 Q39.6 19.4 41 20" fill="none" stroke="#8E6A4E" stroke-width=".7" stroke-linecap="round"/>
  <g fill="#B08A6A" stroke="#6B4A32" stroke-width="1.1" stroke-linejoin="round">
    <path d="M12.4 16 Q8 21.6 10 28.4 Q13.8 29.2 15 25.4 Q11.4 22.2 13.8 16 Z"/>
    <path d="M29.6 16 Q34 21.6 32 28 Q28.2 28.8 27 25.2 Q30.6 22.2 28.2 16 Z"/>
  </g>
  <ellipse cx="21" cy="18.6" rx="11.2" ry="10.2" fill="#D3AC88" stroke="#6B4A32" stroke-width="1.4"/>
  <path d="M11 16.6 Q11.6 25.4 15.6 28.4 Q12.4 23.6 12 15.6 Z" fill="#B08A6A" opacity=".8"/>
  <ellipse cx="12.8" cy="22" rx="2.8" ry="1.9" fill="#E39A88" opacity=".45"/>
  <ellipse cx="29.2" cy="22" rx="2.8" ry="1.9" fill="#E39A88" opacity=".45"/>
  <ellipse cx="16.9" cy="18.2" rx="3.1" ry="3.4" fill="#FBF7EE" stroke="#6B4A32" stroke-width="1.1"/>
  <ellipse cx="25.1" cy="18.2" rx="3.1" ry="3.4" fill="#FBF7EE" stroke="#6B4A32" stroke-width="1.1"/>
  <circle cx="17.4" cy="18.7" r="1.9" fill="#241C14"/><circle cx="25.6" cy="18.7" r="1.9" fill="#241C14"/>
  <circle cx="16.6" cy="17.5" r=".8" fill="#fff"/><circle cx="24.8" cy="17.5" r=".8" fill="#fff"/>
  <g stroke="#3A2E22" stroke-width="1" stroke-linecap="round" fill="none">
    <path d="M13.7 16.2 Q12.4 15 11.8 13.8"/><path d="M13.4 18 Q11.8 17.4 10.9 16.5"/>
    <path d="M28.3 16.2 Q29.6 15 30.2 13.8"/><path d="M28.6 18 Q30.2 17.4 31.1 16.5"/>
  </g>
  <path d="M16.4 23.6 Q16.2 28.4 18.9 28.8 Q21 29.1 21 27.4 Q21 29.1 23.1 28.8
           Q25.8 28.4 25.6 23.6 Q23.5 22.2 21 22.3 Q18.5 22.2 16.4 23.6 Z"
        fill="#EBD2B8" stroke="#6B4A32" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M19.3 22.8 Q21 22 22.7 22.8 Q22.4 24.9 21 25.6 Q19.6 24.9 19.3 22.8 Z"
        fill="#E39A88" stroke="#B9705F" stroke-width=".7" stroke-linejoin="round"/>
  <path d="M19 28.7 Q18.95 29.9 19.5 30.2 Q20.05 29.8 20 28.6 Z" fill="#F6EEDC" stroke="#6B4A32" stroke-width=".85" stroke-linejoin="round"/>
  <path d="M23 28.7 Q23.05 29.9 22.5 30.2 Q21.95 29.8 22 28.6 Z" fill="#F6EEDC" stroke="#6B4A32" stroke-width=".85" stroke-linejoin="round"/>
  <path class="boca" d="M20.2 27.3 Q21 27.9 21.8 27.3" stroke="#8E5A44" stroke-width="1" fill="none" stroke-linecap="round"/><path class="boca-f" d="M19.9 27 Q21 29.6 22.1 27 Q21 27.8 19.9 27 Z" fill="#8E5A44" stroke="#8E5A44" stroke-width=".8" stroke-linejoin="round"/>
  <path d="M10.6 13.6 Q21 4.6 31.4 13.6 Q21 9.4 10.6 13.6 Z" fill="#D98C9A" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M10.6 13.6 Q21 9.4 31.4 13.6 L31 15.8 Q21 11.8 11 15.8 Z" fill="#C97E8C" stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M30.6 11 Q34.4 10.4 35.4 13 Q33.2 14.4 30.2 13.6 Z" fill="#D98C9A" stroke="#3A2E22" stroke-width="1.1" stroke-linejoin="round"/>
  <g fill="#F6EFE2" opacity=".65"><circle cx="16.4" cy="10.6" r=".9"/><circle cx="23" cy="8.8" r=".9"/><circle cx="27.4" cy="11" r=".9"/></g>
</svg>`;
const MIGAS = `<svg viewBox="0 0 100 100" class="cara-migas" aria-hidden="true">
  <!-- la sombra -->
  <ellipse cx="46" cy="96" rx="30" ry="3.2" fill="#140F1F" opacity=".22"/>
  <!-- la cola, que sale de detrás y se enrosca -->
  <g class="cola">
    <path d="M31 84 Q12 86 10 72 Q9 61 17 59" fill="none" stroke="#3A2E22" stroke-width="4" stroke-linecap="round"/>
    <path d="M31 84 Q12 86 10 72 Q9 61 17 59" fill="none" stroke="#E8A9B4" stroke-width="2.3" stroke-linecap="round"/>
  </g>
  <!-- los pies, con sus tres deditos -->
  <g stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round">
    <path d="M31 94.6 Q30 90.6 36.4 90.4 Q43 90.6 42.4 94.6 Z" fill="#E8A9B4"/>
    <path d="M50 94.6 Q49.4 90.6 56 90.4 Q62.4 90.6 61.4 94.6 Z" fill="#E8A9B4"/>
  </g>
  <g stroke="#B9707C" stroke-width=".8" stroke-linecap="round"><path d="M34.4 94.4 V92.8 M36.8 94.4 V92.4 M39.2 94.4 V92.8 M53.4 94.4 V92.8 M55.8 94.4 V92.4 M58.2 94.4 V92.8"/></g>
  <!-- el cuerpo, en pera -->
  <path d="M28.6 91 Q25 70 35 60 Q46 54 57 60 Q67 70 63.4 91 Z" fill="#9A8A80" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
  <!-- el delantal blanco, con sus tirantes y la harina del día -->
  <path d="M34 67 Q46 64 58 67 Q61 80 59.6 91 L32.4 91 Q31 80 34 67 Z" fill="#F6EFE2" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M34 67 Q46 70 58 67" fill="none" stroke="#DCCFB4" stroke-width="1.4"/>
  <path d="M39 79 H53 V85 Q46 87 39 85 Z" fill="none" stroke="#DCCFB4" stroke-width="1.2" stroke-linejoin="round"/>
  <g fill="#E4D9C4"><circle cx="37.6" cy="73" r="1.2"/><circle cx="54" cy="75" r="1"/><circle cx="48" cy="88" r="1.1"/></g>
  <!-- el brazo de atrás, con la mano abierta -->
  <path d="M36 66 Q29.6 72 32.6 79" fill="none" stroke="#3A2E22" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M36 66 Q29.6 72 32.6 79" fill="none" stroke="#9A8A80" stroke-width="3.4" stroke-linecap="round"/>
  <g stroke="#3A2E22" stroke-width="1" stroke-linejoin="round">
    <path d="M30.4 79.4 Q30.8 76.8 33.2 77 Q35.6 77.4 35 80 Q34.4 82.4 32.2 82 Q30.2 81.6 30.4 79.4 Z" fill="#E8A9B4"/>
  </g>
  <path d="M31 81.4 L30 83 M32.6 82.2 L32.4 84 M34.2 81.6 L34.8 83.2" stroke="#3A2E22" stroke-width=".9" stroke-linecap="round"/>
  <!-- el cortador de pizza: el mango de madera, la horquilla y la rueda -->
  <g class="cortador">
    <path d="M58.6 75.6 L68.4 64.6" stroke="#3A2E22" stroke-width="6" stroke-linecap="round"/>
    <path d="M58.6 75.6 L68.4 64.6" stroke="#B07A45" stroke-width="4" stroke-linecap="round"/>
    <path d="M60.4 72 L63.6 68.4" stroke="#8A5A2E" stroke-width="1" stroke-linecap="round"/>
    <path d="M68 65 L78.6 53.2" stroke="#3A2E22" stroke-width="3.8" stroke-linecap="round"/>
    <path d="M68 65 L78.6 53.2" stroke="#8C949E" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="80" cy="51.6" r="12.6" fill="#C6CBD1" stroke="#3A2E22" stroke-width="1.6"/>
    <circle cx="80" cy="51.6" r="9.8" fill="none" stroke="#EDF1F4" stroke-width="1.3"/>
    <path d="M71.4 45.2 Q75 40.6 80.4 40.4" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".85"/>
    <circle cx="80" cy="51.6" r="2.8" fill="#6E7680" stroke="#3A2E22" stroke-width="1.1"/>
  </g>
  <!-- el brazo que empuña el cortador, y la mano que rodea el mango -->
  <path d="M56 65 Q60.4 69.6 60.8 72.6" fill="none" stroke="#3A2E22" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M56 65 Q60.4 69.6 60.8 72.6" fill="none" stroke="#9A8A80" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M58.2 73.4 Q58.4 70.4 61.2 70.6 Q64 71 63.6 73.8 Q63 76.6 60.4 76.2 Q58 75.8 58.2 73.4 Z" fill="#E8A9B4" stroke="#3A2E22" stroke-width="1" stroke-linejoin="round"/>
  <path d="M59.6 72.4 Q61.6 71.8 62.6 73.2 M59.4 74.4 Q61.4 73.8 62.4 75" fill="none" stroke="#B9707C" stroke-width=".8" stroke-linecap="round"/>
  <!-- las orejas, grandes y redondas, rosas por dentro -->
  <g stroke="#3A2E22" stroke-width="1.6">
    <circle cx="29.6" cy="26" r="11.6" fill="#9A8A80"/>
    <circle cx="62.4" cy="26" r="11.6" fill="#9A8A80"/>
  </g>
  <circle cx="30.4" cy="26.8" r="7" fill="#E8A9B4"/><circle cx="61.6" cy="26.8" r="7" fill="#E8A9B4"/>
  <!-- la cabeza, en pera hacia el hocico, como en la pastelería -->
  <path d="M46 25.6 Q63.6 25.6 62.6 42.6 Q61.4 54.4 46 58.2 Q30.6 54.4 29.4 42.6 Q28.4 25.6 46 25.6 Z" fill="#B0A196" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
  <!-- el hocico claro -->
  <ellipse cx="46" cy="50.4" rx="8.6" ry="5.8" fill="#D9CDC2"/>
  <!-- el pañuelo rojo de la pizzería, anudado al cuello, justo bajo la barbilla -->
  <path d="M34.6 55.4 Q46 62.6 57.4 55.4 L58.6 59.6 Q46 67 33.4 59.6 Z" fill="#C4462F" stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M52.8 60.6 L58.4 67.4 L51 64.8 Z" fill="#C4462F" stroke="#3A2E22" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="52.6" cy="61.8" r="2.1" fill="#B03C27" stroke="#3A2E22" stroke-width="1"/>
  <g fill="#F6EFE2"><circle cx="38.6" cy="59.6" r=".9"/><circle cx="44" cy="61.8" r=".9"/><circle cx="49.4" cy="61.6" r=".9"/><circle cx="55.6" cy="58.4" r=".8"/></g>
  <!-- los mofletes -->
  <ellipse cx="35.4" cy="48" rx="3" ry="1.9" fill="#E8A9B4" opacity=".55"/>
  <ellipse cx="56.6" cy="48" rx="3" ry="1.9" fill="#E8A9B4" opacity=".55"/>
  <!-- los ojos -->
  <ellipse cx="40" cy="40.6" rx="3.3" ry="3.8" fill="#241C14"/>
  <ellipse cx="52" cy="40.6" rx="3.3" ry="3.8" fill="#241C14"/>
  <circle class="ojo" cx="38.9" cy="39.2" r="1.3" fill="#fff"/><circle class="ojo" cx="50.9" cy="39.2" r="1.3" fill="#fff"/>
  <circle cx="41" cy="42.2" r=".55" fill="#fff" opacity=".8"/><circle cx="53" cy="42.2" r=".55" fill="#fff" opacity=".8"/>
  <!-- los bigotes: salen de las almohadillas del hocico, finos y un poco curvos -->
  <g fill="#8A7A6E"><circle cx="40.6" cy="50" r=".55"/><circle cx="41" cy="52" r=".55"/><circle cx="51.4" cy="50" r=".55"/><circle cx="51" cy="52" r=".55"/></g>
  <g stroke="#3A2E22" stroke-width=".75" stroke-linecap="round" fill="none" opacity=".75">
    <path d="M39.6 49.6 Q34 47.6 28.6 48.2"/><path d="M39.8 51.8 Q34.4 52 29 54"/>
    <path d="M52.4 49.6 Q58 47.6 63.4 48.2"/><path d="M52.2 51.8 Q57.6 52 63 54"/>
  </g>
  <!-- la nariz, y el surco hasta la boca -->
  <ellipse cx="46" cy="47.8" rx="2.3" ry="1.7" fill="#E39A88" stroke="#B9705F" stroke-width=".7"/>
  <ellipse cx="45.3" cy="47.3" rx=".7" ry=".45" fill="#fff" opacity=".7"/>
  <path d="M46 49.5 V50.8" stroke="#3A2E22" stroke-width=".7" stroke-linecap="round"/>
  <!-- las dos bocas: la de diario y la abierta, con los dos incisivos en su sitio -->
  <path class="boca" d="M42.6 50.8 Q44.4 52.4 46 51 Q47.6 52.4 49.4 50.8" fill="none" stroke="#3A2E22" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="boca-f" d="M42.8 51 Q46 57 49.2 51 Q46 51.8 42.8 51 Z" fill="#8E4A50" stroke="#3A2E22" stroke-width=".9" stroke-linejoin="round"/>
  <path d="M45 51.1 H47 V52.7 Q46 53.1 45 52.7 Z" fill="#FBF7EE" stroke="#3A2E22" stroke-width=".45" stroke-linejoin="round"/>
  <path d="M46 51.2 V52.9" stroke="#3A2E22" stroke-width=".4"/>
  <!-- el gorro de cocinero de Migas, bien asentado entre las orejas -->
  <path d="M35.4 30.4 Q46 25.6 56.6 30.4 L56 34 Q46 29.8 36 34 Z" fill="#EDE6D6" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M36.2 30.6 Q33 20.4 41 20.2 Q43 15.4 46 15.6 Q49 15.4 51 20.2 Q59 20.4 55.8 30.6 Q46 26.6 36.2 30.6 Z" fill="#FBF7EE" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M41 22 Q42 25.6 41.2 28.4 M51 22 Q50 25.6 50.8 28.4" fill="none" stroke="#DCCFB4" stroke-width="1" stroke-linecap="round"/>
</svg>`;
raiz.Personajes = {NICK, NICOLETA, MIGAS};
})(window);
