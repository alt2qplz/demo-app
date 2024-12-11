import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageLoader } from './PageLoader';

export default {
  title: 'widgets/Page Loader',
  component: PageLoader,
  argTypes: {

  }
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});

export const PageLoaderDark = Template.bind({});
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
