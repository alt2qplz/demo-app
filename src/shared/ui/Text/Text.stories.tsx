import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolar sit amet',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Lorem ipsum dolar sit amet',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Lorem ipsum dolar sit amet',
  theme: 'error'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolar sit amet',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  text: 'Lorem ipsum dolar sit amet',
  theme: 'error'
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Lorem ipsum dolar sit amet',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Lorem ipsum dolar sit amet',
  text: 'Lorem ipsum dolar sit amet',
  size: 'size_l'
};
SizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: 'size_m',
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: 'size_s',
};