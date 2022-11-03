import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/Breed';
import { CatService } from '../../cat/cat.service';
import { defLimits } from 'src/app/data/filterValue';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
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
      limit: [this.limits[1]],
    });
  }

  onSubmit() {}
}
