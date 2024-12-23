import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      view: ArticleView.SMALL,
      page: 1,
      hasMore: true,
      _inited: false,
      limit: 9,
      sort: ArticleSortField.CREATED,
      search: '',
      order: 'asc',
      type: ArticleType.ALL,
    }
  })
];
