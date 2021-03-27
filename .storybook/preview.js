import '@/styles/globals.scss';

import {addDecorator} from '@storybook/react';
import {withNextRouter} from 'storybook-addon-next-router';

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    push() {},
  })
);

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};
