import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFilterComponent } from './cat-filter/cat-filter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CatCardComponent, CatListComponent, CatFilterComponent],
  exports: [CatCardComponent, CatListComponent, CatFilterComponent],
})
export class CatModule {}
