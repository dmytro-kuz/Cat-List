import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { defFilterValue } from 'src/app/data/filterValue';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService
      .getCats('/images/search', defFilterValue)
      .subscribe((res) => {
        console.log(res);
      });
    this.catService.getBreeds('/breeds').subscribe((res) => {
      console.log(res);
    });
  }
}
