import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageError } from './PageError';

export default {
  title: 'widgets/Page Error',
  component: PageError,
  argTypes: {

  }
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});

export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
