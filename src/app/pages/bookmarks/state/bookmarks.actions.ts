import { createAction, props } from '@ngrx/store';

export const removeBookmark = createAction (
    '[Bookmark] Remove Bookmark',
    props<{ id: number }>(), 
);