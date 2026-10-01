/* Los personajes de la app, en vectorial para las fichas: node personajes/hazlos.mjs
   (necesita rsvg-convert). Salen del mismo src/personajes.js que dibuja la app. */
import fs from 'fs'; import vm from 'vm'; import { execSync } from 'child_process';
const src = fs.readFileSync(new URL('../../src/personajes.js', import.meta.url), 'utf8');
const ctx = {matchMedia: () => ({matches: true})}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(src.replace('})(window);', '})(this);'), ctx);
const PJ = ctx.Personajes;
const limpia = (svg, vb) => svg
  .replace(/<clipPath id="pp\d+">[\s\S]*?<\/clipPath><g clip-path="url\(#pp\d+\)">[\s\S]*?<\/g>/g, '')
  .replace(/viewBox="[^"]*"/, 'viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" width="300" height="300"');
const LISTA = {
  'nick': [PJ.nick('habla'), '12 4 76 76'],
  'nick-senala': [PJ.nick('senala'), '6 2 88 88'],
  'nick-piensa': [PJ.nick('piensa'), '12 4 76 76'],
  'migas': [PJ.migas('habla'), '14 10 68 68'],
  'migas-sorpresa': [PJ.migas('sorpresa'), '10 4 76 76'],
  'nicoleta': [PJ.nicoleta('telefono'), '16 10 68 68']
};
const dir = new URL('.', import.meta.url).pathname;
for(const n in LISTA){
  const [svg, vb] = LISTA[n];
  fs.writeFileSync(dir + n + '.svg', limpia(svg, vb));
  execSync('rsvg-convert -f pdf -o ' + dir + n + '.pdf ' + dir + n + '.svg');
  fs.unlinkSync(dir + n + '.svg');
}
console.log('hechos:', Object.keys(LISTA).join(', '));
