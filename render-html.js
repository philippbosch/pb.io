const { readFile, writeFile } = require('fs/promises');
const jsx = require('jsx-template-engine/dist');

(async function () {
  const src = await readFile('./src/index.jsx');
  const html = await jsx.render(src);
  await writeFile('./dist/index.html', `<!DOCTYPE html>\n${html}`);
})();
