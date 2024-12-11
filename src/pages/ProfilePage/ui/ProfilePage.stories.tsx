import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/alpha.jpg';

export default {
  title: 'pages/Profile Page',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const profileData: Profile = {
  first: 'Name',
  country: Country.RU,
  age: 29,
  lastname: 'Last',
  avatar: AvatarImg
};

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};
ProfilePageLight.decorators = [StoreDecorator({
  profile: {
    form: profileData
  }
})];

export const ProfilePageDark = Template.bind({});
ProfilePageLight.args = {};
ProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: profileData
    }
  })
];

