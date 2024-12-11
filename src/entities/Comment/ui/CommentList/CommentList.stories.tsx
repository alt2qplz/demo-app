import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';
import AvatarImg from 'shared/assets/tests/alpha.jpg';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      user: {
        id: 1,
        avatar: AvatarImg,
        username: 'username'
      },
      text: 'Это комментарий'
    },
    {
      id: '2',
      user: {
        id: 2,
        avatar: AvatarImg,
        username: 'username 2'
      },
      text: 'Это комментарий 2'
    }
  ]
};
