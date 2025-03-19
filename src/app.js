const prefijos = ["super", "ultra", "mega", "thelegendof"];
const juegos = ["zelda", "mario", "assassinscreed", "minecraft", "skyrim"];
const sufijos = ["world", "series", "chronicles", "odyssey", "planet"];
const extensiones = [".es", ".com", ".net", ".org"];

const generarDominios = (pref, juegos, suf, exts) => {
  const dominiosPorExtension = {};
  exts.forEach(ext => {
    const listaDominios = [];
    pref.forEach(p => {
      juegos.forEach(j => {
        suf.forEach(s => {
          const extLetras = ext.slice(1).toLowerCase();
          const modS = s.toLowerCase().endsWith(extLetras) ? s.slice(0, -extLetras.length) : s;
          listaDominios.push(`${p}${j}${modS}${ext}`);
        });
      });
    });
    dominiosPorExtension[ext] = listaDominios.sort();
  });
  return dominiosPorExtension;
};

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