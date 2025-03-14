const prefijos = ["super", "ultra", "mega", "thelegendof"];
const juegos = ["zelda", "mario", "assassinscreed", "minecraft", "skyrim"];
const sufijos = ["world", "series", "chronicles", "odyssey", "planet"];
const extensiones = [".es", ".com", ".net", ".org"];

const generarDominios = (pref, juegos, suf, exts) =>
  exts.reduce((acc, ext) => (
    acc[ext] = pref.flatMap(p =>
      juegos.flatMap(j =>
         suf.map(s => {
           const extLetras = ext.slice(1).toLowerCase();
           const modS = s.toLowerCase().endsWith(extLetras) ? s.slice(0, -extLetras.length) : s;
           return `${p}${j}${modS}${ext}`;
         })
      )
    ).sort(), acc
  ), {});

const dominios = generarDominios(prefijos, juegos, sufijos, extensiones);

(() => {
  const res = document.getElementById('resultado');
  Object.keys(dominios).sort().forEach(ext => {
    const div = document.createElement('div');
    div.className = 'extension';
    div.innerHTML = `<h2>${ext}</h2><ul>${dominios[ext].map(d => `<li>${d}</li>`).join('')}</ul>`;
    res.appendChild(div);
  });
})();
