import {Meta} from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Design System/Colors',
} as Meta;

export const Colors = (): JSX.Element => (
  <>
    <div className='color__cards'>
      <div className='color__card color__card--black' />
      <div className='color__card color__card--white' />
    </div>

    <div className='color__cards'>
      <div className='color__card color__card--grey-100' />
      <div className='color__card color__card--grey-200' />
      <div className='color__card color__card--grey-300' />
    </div>

    <div className='color__cards'>
      <div className='color__card color__card--grey-400' />
      <div className='color__card color__card--grey-500' />
    </div>
  </>
);
