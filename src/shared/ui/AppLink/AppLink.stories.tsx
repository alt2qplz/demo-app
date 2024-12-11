import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    title: 'This is link',
    children: 'LINK',
    theme: AppLinkTheme.PRIMARY
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkPrimaryLight = Template.bind({});

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimaryLight.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkSecondaryLight = Template.bind({});
AppLinkSecondaryLight.args = {
  theme: AppLinkTheme.SECONDARY
};

export const AppLinkSecondaryDark = Template.bind({});
AppLinkSecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
