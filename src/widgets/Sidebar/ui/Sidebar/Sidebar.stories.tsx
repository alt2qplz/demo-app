import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'name'
    }
  }
})];

export const SidebarDark = Template.bind({});
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'name'
      }
    }
  })
];

export const SidebarNoAuth = Template.bind({});
SidebarNoAuth.decorators = [StoreDecorator({
  user: {
    authData: undefined
  }
})];
