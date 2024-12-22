import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? ''; // work only for null or undefined
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;