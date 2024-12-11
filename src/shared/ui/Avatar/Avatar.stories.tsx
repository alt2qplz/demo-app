import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from 'shared/assets/tests/alpha.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarPrimary = Template.bind({});

export const AvatarSmallSize = Template.bind({});
AvatarSmallSize.args = {
  size: 50
};

export const AvatarBigSize = Template.bind({});
AvatarBigSize.args = {
  size: 300
};

