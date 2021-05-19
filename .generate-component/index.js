/* eslint-disable @typescript-eslint/no-var-requires */

// Inspired by
// https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862

const fs = require('fs');
const {component, story, styles, barrel, type, mock} = require('./component-templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const componentsDir = './src/components/';

if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir);

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// component.module.scss
fs.writeFile(`${dir}/${name}.module.scss`, styles(), writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);
// types.ts
fs.appendFile('./src/common/types.ts', type(name), writeFileErrorHandler);
// mocks.ts
fs.appendFile('./src/storybook/mocks.ts', mock(name), writeFileErrorHandler);

console.log(`Don't forget to:
- Add the type in ./src/storybook/mocks.ts
`);
