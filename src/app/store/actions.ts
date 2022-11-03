import { createAction, props } from '@ngrx/store';
import { Cat } from '../shared/interfaces/Cat';
import { Filter } from '../shared/interfaces/Filter';

export const CatsActions = {
  GetCats: '[Cats] Get Cats',
  GetCatsSuccess: '[Cats] Get Cats Success',
};

export const GetCats = createAction(
  CatsActions.GetCats,
  props<{ params: Filter }>() //add interface
);

export const GetCatsSuccess = createAction(
  CatsActions.GetCatsSuccess,
  props<{ cats: Cat[] }>() //add interface
);
