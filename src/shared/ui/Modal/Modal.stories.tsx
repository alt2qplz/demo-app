import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    onClose: () => {}
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  // eslint-disable-next-line i18next/no-literal-string
  return <Modal {...args} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ultricies sem.
    In dictum eleifend tempor. Maecenas sed dui non nunc tristique egestas. Cras dignissim sed sem a bibendum.
  </Modal>;
};

export const ModalLight = Template.bind({});

export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
