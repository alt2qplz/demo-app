import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args}><div/></Page>;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({}),
];
