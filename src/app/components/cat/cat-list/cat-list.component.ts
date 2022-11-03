import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { defFilterValue } from 'src/app/data/filterValue';
import { Store } from '@ngrx/store';
import { Cat } from 'src/app/shared/interfaces/Cat';
import { GetCats } from 'src/app/store/actions';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  constructor(
    private catService: CatService,
    private store: Store<{ catsList: Cat[] }>
  ) {}

  ngOnInit() {
    this.store.dispatch(GetCats({ params: defFilterValue }));
  }
}
