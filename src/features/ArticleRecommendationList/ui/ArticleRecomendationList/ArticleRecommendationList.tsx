import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (error) return null;

  return (
    <VStack gap={'8'} className={classNames('', {}, [className])}>
      <Text
        size="size_l"
        title={t('Рекомендуем')}
      />
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
});

ArticleRecommendationList.displayName = 'ArticleRecommendationList';
