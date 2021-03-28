// Inspired by
// https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862

exports.component = (name) => `import styles from './${name}.module.scss';

export type Props = {}

const ${name} = ({}: Props): JSX.Element => {
  return <div>Hello World!</div>;
};

export default ${name};
`;

exports.story = (name) => `import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';

import ${name}, {Props} from './${name}';

export default {
  title: 'Components/${name}',
  component: ${name},
} as Meta;

const Template: Story<Props> = (args) => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;

exports.styles = () => `@use '@/styles/utils' as *;
`;

exports.barrel = (name) => `import ${name} from './${name}';
export default ${name};
`;
