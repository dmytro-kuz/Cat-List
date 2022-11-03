import { createReducer, on } from '@ngrx/store';
import { GetCatsSuccess } from './actions';
import { initialState } from './state';

export const catsReducer = createReducer(
  initialState,
  on(GetCatsSuccess, (state, { cats }) => {
    return cats;
  })
);
