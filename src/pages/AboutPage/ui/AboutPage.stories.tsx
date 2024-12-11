import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import AboutPage from './AboutPage';

export default {
  title: 'pages/About Page',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageLight = Template.bind({});

export const AboutPageDark = Template.bind({});
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
