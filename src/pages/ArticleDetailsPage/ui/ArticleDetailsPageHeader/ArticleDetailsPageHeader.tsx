import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${routePath.article}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme="outline" onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && <Button className={cls.editBtn} theme="outline" onClick={onEditArticle}>
        {t('Редактировать')}
      </Button>}
    </div>
  );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
