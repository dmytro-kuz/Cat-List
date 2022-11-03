import { Component, OnInit } from '@angular/core';
import { defFilterValue } from 'src/app/data/filterValue';
import { select, Store } from '@ngrx/store';
import { Cat } from 'src/app/shared/interfaces/Cat';
import { GetCats } from 'src/app/store/actions';
import { getCatsList } from 'src/app/store/selectors';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  constructor(private store: Store<{ catsList: Cat[] }>) {}

  catsList$ = this.store.pipe(select(getCatsList));

  ngOnInit() {
    this.store.dispatch(GetCats({ params: defFilterValue }));
  }
}
