import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text'
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text'
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
};

export const ButtonSquareSizeM = Template.bind({});
ButtonSquareSizeM.args = {
  children: '>',
  size: ButtonSize.M,
  square: true,
  theme: 'backgroundInverted'
};

export const ButtonSquareSizeL = Template.bind({});
ButtonSquareSizeL.args = {
  children: '>',
  size: ButtonSize.L,
  square: true,
  theme: 'backgroundInverted',
};

export const ButtonSquareSizeXL = Template.bind({});
ButtonSquareSizeXL.args = {
  children: '>',
  size: ButtonSize.XL,
  square: true,
  theme: 'backgroundInverted'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true
};

export const Danger = Template.bind({});
Disabled.args = {
  children: 'Text',
  theme: 'danger'
};
