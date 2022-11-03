import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/Breed';
import { defFilterValue } from 'src/app/data/filterValue';
import { Cat } from 'src/app/shared/interfaces/Cat';
import { GetCats } from 'src/app/store/actions';
import { Store } from '@ngrx/store';

import { CatService } from '../../cat/cat.service';
import { defLimits } from 'src/app/data/filterValue';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit {
  panelOpenState = false;
  breeds: Breed[] = [];
  limits: number[] = defLimits;
  filterForm?: FormGroup;

  constructor(
    private catService: CatService,
    private formBuilder: FormBuilder,
    private store: Store<{ catsList: Cat[] }>
  ) {}

  ngOnInit() {
    this.catService.getBreeds('/breeds').subscribe((breeds) => {
      this.breeds = breeds;
    });
    this.initForm();
  }

  initForm() {
    this.filterForm = this.formBuilder.group({
      breed: [],
      limit: [defFilterValue.limit],
    });
  }

  clearFilter() {
    this.filterForm?.reset();
    this.filterForm?.patchValue({
      limit: [defFilterValue.limit],
    });
    this.store.dispatch(GetCats({ params: defFilterValue }));
  }

  onSubmit() {
    const filterValue = {
      breed_ids: this.filterForm?.value.breed.id,
      limit: this.filterForm?.value.limit,
    };
    this.store.dispatch(GetCats({ params: filterValue }));
  }
}
