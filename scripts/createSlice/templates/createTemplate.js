const fs = require('fs/promises');
const resolveRoot = require('../lib/resolveRoot');
const createModel = require('./model/createModel');
const createUI = require('./ui/createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  let error = false;

  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    error = true;
    console.log(`Не удалось создать директорию для слайса ${sliceName}, error: ${e}`);
  }

  if (!error) {
    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicApi(layer, sliceName);
  }
};
