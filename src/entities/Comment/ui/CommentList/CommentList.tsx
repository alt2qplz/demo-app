import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
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
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  if (!comments?.length) return (
    <div className={classNames('', {}, [className])}>
      <Text text={t('Комментарии отсутствуют')} />
    </div>
  );

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          isLoading={isLoading}
          comment={comment}
        />
      ))}
    </VStack>
  );
});

CommentList.displayName = 'CommentList';