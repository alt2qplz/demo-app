const fs = require('fs/promises');
const resolveRoot = require('../lib/resolveRoot');
const firstCharUpperCase = require('../lib/firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';\nexport { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
