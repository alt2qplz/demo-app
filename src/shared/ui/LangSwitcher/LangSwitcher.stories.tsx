import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LangSwitcher } from './LangSwitcher';

export default {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  args: {

  }
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const LangSwitcherLight = Template.bind({});

export const LangSwitcherPrimaryDark = Template.bind({});
LangSwitcherLight.decorators = [ThemeDecorator(Theme.DARK)];
