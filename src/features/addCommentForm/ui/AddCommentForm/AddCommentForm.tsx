import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';

interface AddCommentFormProps {
  className?: string;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onChangeCommentFormText = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={{ addCommentForm: addCommentFormReducer }}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onChangeCommentFormText}
          className={cls.input}
        />
        <Button>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;