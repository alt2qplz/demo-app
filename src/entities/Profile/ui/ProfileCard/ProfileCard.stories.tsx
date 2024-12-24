import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import AvatarImg from 'shared/assets/tests/alpha.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const profileData: Profile = {
  first: 'Name',
  country: Country.RU,
  age: 29,
  lastname: 'Last',
  avatar: AvatarImg
};

export const Primary = Template.bind({});
Primary.args = {
  readonly: true,
  data: profileData
};

export const Error = Template.bind({});
Error.args = {
  readonly: true,
  error: 'Сообщение об ошибке'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const EditCard = Template.bind({});
EditCard.args = {
  data: profileData
};
