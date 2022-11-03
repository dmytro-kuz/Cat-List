import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { catsReducer } from './store/reducers';
import { CatsEffects } from './store/effects';

import { AppComponent } from './app.component';
import { CatModule } from './components/cat.module';
import { ApiKeyInterceptorProvider } from './interceptors/api-key';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CatModule,
    StoreModule.forRoot({ cats: catsReducer }),
    EffectsModule.forRoot([CatsEffects]),
  ],
  providers: [ApiKeyInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
