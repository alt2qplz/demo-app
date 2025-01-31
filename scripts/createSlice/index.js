const createTemplate = require('./templates/createTemplate');
const firstCharUpperCase = require('./lib/firstCharUpperCase');

let layer = process.argv[2];
let sliceName = process.argv[3];

const shortLayerNames = ['f', 'e', 'p', 'w'];
if (shortLayerNames.includes(layer)) {
  const layersMap = {
    p: 'pages',
    w: 'widgets',
    f: 'features',
    e: 'entities'
  };

  layer = layersMap[layer];
}

const layers = ['features', 'entities', 'pages', 'widgets'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

if (layers.filter(el => el !== 'features').includes(layer)) {
  sliceName = firstCharUpperCase(sliceName);
}

createTemplate(layer, sliceName);
