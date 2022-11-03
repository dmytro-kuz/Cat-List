import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Cat } from 'src/app/shared/interfaces/Cat';
import { CatService } from '../../cat/cat.service';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit {
  panelOpenState = false;
  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.getBreeds('/breeds').subscribe((el) => {
      console.log(el);
    });
  }
}
