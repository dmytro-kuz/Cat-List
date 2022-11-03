import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { GetCats, GetCatsSuccess } from './actions';
import { getCatsList } from './selectors';
import { CatService } from '../components/cat/cat.service';

@Injectable()
export class CatsEffects {
  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCats),
      withLatestFrom(this.store.pipe(select(getCatsList))),
      mergeMap((action) =>
        this.catsService.getCats('/images/search', action[0].params).pipe(
          map((cats) => GetCatsSuccess({ cats })),
          catchError((err) => {
            console.log(err);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private catsService: CatService,
    private store: Store
  ) {}
}
