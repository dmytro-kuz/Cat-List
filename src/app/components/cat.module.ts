import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from './cat/cat-card/cat-card.component';
import { CatListComponent } from './cat/cat-list/cat-list.component';
import { CatFilterComponent } from './filter/cat-filter/cat-filter.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CatCardComponent,
    CatListComponent,
    CatFilterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  exports: [LayoutComponent],
})
export class CatModule {}
