import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])} style={{  }}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  if (!comments?.length) return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      <Text text={t('Комментарии отсутствуют')} />
    </div>
  );

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          isLoading={isLoading}
          className={cls.comment}
          comment={comment}
        />
      ))}
    </div>
  );
});

CommentList.displayName = 'CommentList';