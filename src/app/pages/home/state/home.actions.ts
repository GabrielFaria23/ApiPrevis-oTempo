import { createAction, props } from '@ngrx/store';

export const loadCurrentWeather = createAction (
    '[Home] Load Current Weather',
    props<{ query: string}>(), 
);

export const loadCurrentWeatherSuccess = createAction (
    '[Home] Load Current Weather Success',
    props<{ entity: any}>(), 
);

export const loadCurrentWeatherFail = createAction (
    '[Home] Load Current Weather Fail', 
);