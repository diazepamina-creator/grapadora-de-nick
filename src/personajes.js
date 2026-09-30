/* ══════════════════════════════════════════════════════════════════════
   LA GRAPADORA DE NICK · los personajes
   Nick, el pizzero: una morsa con gorro, delantal y la grapadora en alto.
   Es el mismo dibujo que en La pizzería de Nick, la pastelería y la línea
   del tiempo. Parpadea, el brazo da el clac al grapar y salta cuando el
   pedido sale redondo (las clases .ojo, .brazo, .boca y .boca-f).
   Nicoleta, su hermana, llama por teléfono desde la pastelería.
   Migas, el pinche: un ratón gris con gorrito de papel, pañuelo rojo de
   lunares y el cortador de pizza, más grande que su cara. Nick junta con
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
  <circle cx="68.5" cy="44" r="4.2" fill="#C9A17C" stroke="#3A2E22" stroke-width="1.4"/>
  <g transform="translate(59 32) rotate(-18)">
    <rect x="0" y="0" width="19" height="6.5" rx="2.2" fill="#9AA2AC" stroke="#3A2E22" stroke-width="1.3"/>
    <rect x="1.5" y="6" width="16" height="4.4" rx="1.6" fill="#6E7680" stroke="#3A2E22" stroke-width="1.2"/>
    <rect x="3" y="1.4" width="9" height="2" rx="1" fill="#C6CBD1"/>
  </g>
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
  <!-- la cola, que asoma por detrás y se enrosca -->
  <path d="M30 82 Q10 84 9 70 Q8 60 16 58" fill="none" stroke="#3A2E22" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M30 82 Q10 84 9 70 Q8 60 16 58" fill="none" stroke="#E8A6A0" stroke-width="2.4" stroke-linecap="round"/>
  <!-- los pies -->
  <ellipse cx="37" cy="93" rx="7" ry="3.4" fill="#E8A6A0" stroke="#3A2E22" stroke-width="1.3"/>
  <ellipse cx="55" cy="93" rx="7" ry="3.4" fill="#E8A6A0" stroke="#3A2E22" stroke-width="1.3"/>
  <!-- el cuerpo: una pera gris, con la barriga clara -->
  <path d="M28 90 Q24 68 34 58 Q46 50 58 58 Q68 68 64 90 Z" fill="#A99C92" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
  <!-- el delantal de pinche, blanco y con harina -->
  <path d="M33 66 Q46 62 59 66 Q62 80 60 90 L32 90 Q30 80 33 66 Z" fill="#FBF7EE" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
  <path d="M40 76 H52" stroke="#D9CDB8" stroke-width="1.2" stroke-linecap="round"/>
  <g fill="#E8DFCF"><circle cx="38" cy="83" r="1.3"/><circle cx="53" cy="80" r="1"/><circle cx="47" cy="86" r="1.1"/></g>
  <!-- el pañuelo rojo al cuello, con sus lunares -->
  <path d="M33 60 Q46 67 59 60 L57 65 Q46 71 35 65 Z" fill="#C4462F" stroke="#3A2E22" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M44 66 L40 73 L47 69 Z" fill="#C4462F" stroke="#3A2E22" stroke-width="1.1" stroke-linejoin="round"/>
  <g fill="#FBF7EE"><circle cx="39" cy="63.5" r=".9"/><circle cx="46" cy="66" r=".9"/><circle cx="53" cy="63.5" r=".9"/></g>
  <!-- el brazo de atrás -->
  <path d="M35 68 Q29 74 33 80" fill="none" stroke="#3A2E22" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M35 68 Q29 74 33 80" fill="none" stroke="#A99C92" stroke-width="3.4" stroke-linecap="round"/>
  <circle cx="33.5" cy="80.5" r="2.6" fill="#E8A6A0" stroke="#3A2E22" stroke-width="1.1"/>
  <!-- el cortador de pizza: la rueda, más grande que su cara -->
  <g class="cortador">
    <path d="M60 72 L71 60" stroke="#3A2E22" stroke-width="5.6" stroke-linecap="round"/>
    <path d="M60 72 L71 60" stroke="#B07A45" stroke-width="3.6" stroke-linecap="round"/>
    <circle cx="80" cy="51" r="13" fill="#C6CBD1" stroke="#3A2E22" stroke-width="1.6"/>
    <circle cx="80" cy="51" r="10.2" fill="none" stroke="#EDF1F4" stroke-width="1.4"/>
    <path d="M71 60 L80 51" stroke="#6E7680" stroke-width="3" stroke-linecap="round"/>
    <circle cx="80" cy="51" r="3" fill="#6E7680" stroke="#3A2E22" stroke-width="1.1"/>
    <path d="M72 44 Q76 40 81 40" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".8"/>
  </g>
  <!-- el brazo que empuña el cortador -->
  <path d="M56 66 Q61 70 62 72" fill="none" stroke="#3A2E22" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M56 66 Q61 70 62 72" fill="none" stroke="#A99C92" stroke-width="3.4" stroke-linecap="round"/>
  <circle cx="61.5" cy="71.5" r="2.8" fill="#E8A6A0" stroke="#3A2E22" stroke-width="1.1"/>
  <!-- las orejas: grandes, redondas y rosas por dentro -->
  <circle cx="28" cy="24" r="12" fill="#A99C92" stroke="#3A2E22" stroke-width="1.6"/>
  <circle cx="28.6" cy="24.6" r="7.6" fill="#E8A6A0"/>
  <circle cx="64" cy="24" r="12" fill="#A99C92" stroke="#3A2E22" stroke-width="1.6"/>
  <circle cx="63.4" cy="24.6" r="7.6" fill="#E8A6A0"/>
  <!-- la cabeza -->
  <path d="M46 57 Q30 57 29 42 Q29 28 46 27 Q63 28 63 42 Q62 57 46 57 Z" fill="#B7AA9F" stroke="#3A2E22" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M46 57 Q37 56 35 49 Q41 46 46 46 Q51 46 57 49 Q55 56 46 57 Z" fill="#E6DCD2"/>
  <!-- el gorrito de papel de pinche, ladeado -->
  <g transform="rotate(-8 46 28)">
    <path d="M35 30 Q35 20 46 19 Q57 20 57 30 Z" fill="#FBF7EE" stroke="#3A2E22" stroke-width="1.3" stroke-linejoin="round"/>
    <rect x="33.5" y="28.4" width="25" height="4.2" rx="1.6" fill="#EDE6D6" stroke="#3A2E22" stroke-width="1.2"/>
  </g>
  <!-- los mofletes -->
  <ellipse cx="34" cy="47" rx="3.4" ry="2.2" fill="#E8A6A0" opacity=".6"/>
  <ellipse cx="58" cy="47" rx="3.4" ry="2.2" fill="#E8A6A0" opacity=".6"/>
  <!-- los ojos, grandes y con brillo -->
  <ellipse cx="39.5" cy="40" rx="3.6" ry="4.2" fill="#241C14"/>
  <ellipse cx="52.5" cy="40" rx="3.6" ry="4.2" fill="#241C14"/>
  <circle class="ojo" cx="38.4" cy="38.6" r="1.4" fill="#fff"/><circle class="ojo" cx="51.4" cy="38.6" r="1.4" fill="#fff"/>
  <circle cx="40.6" cy="41.6" r=".6" fill="#fff" opacity=".8"/><circle cx="53.6" cy="41.6" r=".6" fill="#fff" opacity=".8"/>
  <!-- la nariz, los bigotes y los dos dientes -->
  <ellipse cx="46" cy="47" rx="2.6" ry="2" fill="#D9707A" stroke="#8E4A50" stroke-width=".8"/>
  <g stroke="#3A2E22" stroke-width=".7" stroke-linecap="round" opacity=".7">
    <path d="M40 48 L30 46.5"/><path d="M40 49.5 L30.5 51"/><path d="M52 48 L62 46.5"/><path d="M52 49.5 L61.5 51"/>
  </g>
  <path class="boca" d="M43.4 50.6 Q46 52.2 48.6 50.6" fill="none" stroke="#3A2E22" stroke-width="1.1" stroke-linecap="round"/>
  <path class="boca-f" d="M43 50.2 Q46 55.4 49 50.2 Z" fill="#8E4A50" stroke="#3A2E22" stroke-width="1" stroke-linejoin="round"/>
  <rect x="44.6" y="50.8" width="1.3" height="2" rx=".3" fill="#fff" stroke="#3A2E22" stroke-width=".5"/>
  <rect x="46.1" y="50.8" width="1.3" height="2" rx=".3" fill="#fff" stroke="#3A2E22" stroke-width=".5"/>
</svg>`;
raiz.Personajes = {NICK, NICOLETA, MIGAS};
})(window);
