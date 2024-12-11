import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import MainPage from './MainPage';

export default {
  title: 'pages/Main Page',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageLight = Template.bind({});

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
