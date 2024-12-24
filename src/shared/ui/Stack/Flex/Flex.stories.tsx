import React, { CSSProperties } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const divStyle: CSSProperties = {
  width: '64px',
  height: '64px',
  backgroundColor: '#06b3f7',
  borderRadius: '4px',
  border: '1px solid red'
};

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  direction: 'column',
  align: 'end',
  children: (
    <>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
      <div style={divStyle}/>
    </>
  ),
};
