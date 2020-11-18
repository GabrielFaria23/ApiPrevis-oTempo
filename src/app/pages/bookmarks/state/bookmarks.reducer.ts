import { createReducer, Action, on } from '@ngrx/store'
import { BookMark } from 'src/app/shared/models/bookmark.model';

import * as fromHomeActions from '../../home/state/home.actions'
import * as fromBookmarksAction from './bookmarks.actions'

export interface BookmarksState {
    list: BookMark[];
}

export const bookmarksInitialState: BookmarksState = {
    list: [],
}

const reducer = createReducer(
    bookmarksInitialState,
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
        ...state,
        list: toggleBookmark(state.list, entity),
    })),
    on(fromBookmarksAction.removeBookmark, (state, { id }) => ({
        ...state,
        list: state.list.filter(b => b.id !== id),
    }))
);

export function bookmarkReducer (state: BookmarksState | undefined, action: Action) {
    return reducer(state, action);
}

function toggleBookmark(list: BookMark[], entity: BookMark): BookMark[]{
    if (!!list.find(bookmark => bookmark.id === entity.id)) {
        return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
}