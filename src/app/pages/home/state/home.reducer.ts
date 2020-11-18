import { createReducer, Action, on } from '@ngrx/store'

import * as fromHomeAction from './home.actions';

export interface HomeState {
    text: string;
}

export const homeInitialState: HomeState = {
    text: "Pimenta",
}

const reducer = createReducer(
    homeInitialState,
    on(fromHomeAction.changeText, (state, {text}) => ({
        ...state,
        text,
    })),
);

export function homeReducer (state: HomeState | undefined, action: Action): HomeState {
    return reducer(state, action);
}