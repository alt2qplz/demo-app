import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {

  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.decorators = [StoreDecorator({})];

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [
  StoreDecorator({}),
  ThemeDecorator(Theme.DARK)
];

export const NavbarAuth = Template.bind({});
NavbarAuth.decorators = [
  StoreDecorator({
    user: { authData: { username: 'user', id: '0' } }
  }),
  ThemeDecorator(Theme.DARK)
];
