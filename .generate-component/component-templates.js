// Inspired by
// https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862

exports.component = (name) => `import {T${name}} from '@/common/types';

import styles from './${name}.module.scss';

const ${name} = ({}: T${name}): JSX.Element => {
  return <div>Hello ${name}</div>;
};

export default ${name};
`;

exports.story = (name) => `import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';

import {T${name}} from '@/common/types';
import {get${name}} from '@/storybook/mocks';

import ${name}Component from './${name}';

export default {
  title: 'Components/${name}',
  component: ${name}Component,
} as Meta;

const Template: Story<T${name}> = (args) => <${name}Component {...args} />;

export const ${name} = Template.bind({});
${name}.args = get${name}();
`;

exports.styles = () => `@use '@/styles/utils' as *;

// ------------------------------------------------------------
//  MOBILE FIRST BREAKPOINT
// ------------------------------------------------------------



// ------------------------------------------------------------
//  TABLET BREAKPOINT
// ------------------------------------------------------------

@media (min-width: getBreakpoint('m-min')) {}

// ------------------------------------------------------------
//  DESKTOP BREAKPOINT
// ------------------------------------------------------------

@media (min-width: getBreakpoint('l-min')) {}
`;

exports.barrel = (name) => `import ${name} from './${name}';
export default ${name};
`;

exports.type = (name) => `\nexport type T${name} = {};`;

exports.mock = (name) => `\nexport const get${name} = (): T${name} => {
  return {};
};`;
