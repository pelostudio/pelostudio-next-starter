import React from 'react';

export default {
  title: 'Design System/Typography',
};

export const Typography = (): JSX.Element => (
  <>
    <p className='typography__heading-1'>Heading 1</p>
    <p className='typography__heading-2'>Heading 2</p>
    <p className='typography__heading-3'>Heading 3</p>
    <hr />
    <p className='typography__body--large--light'>Large light</p>
    <p className='typography__body--large'>Large medium</p>
    <p className='typography__body--large--bold'>Large bold</p>
    <hr />
    <p className='typography__body--medium--light'>Medium light</p>
    <p className='typography__body--medium'>Medium medium</p>
    <p className='typography__body--medium--bold'>Medium bold</p>
    <hr />
    <p className='typography__body--small--light'>Large light</p>
    <p className='typography__body--small'>Large medium</p>
    <p className='typography__body--small--bold'>Large bold</p>
  </>
);
