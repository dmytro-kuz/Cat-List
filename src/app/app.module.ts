import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatModule } from './components/cat.module';
import { ApiKeyInterceptorProvider } from './interceptors/api-key';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CatModule],
  providers: [ApiKeyInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
