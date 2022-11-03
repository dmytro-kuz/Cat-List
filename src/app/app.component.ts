import { Component } from '@angular/core';
import { LoaderService } from './shared/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private loader: LoaderService) {}

  title = 'the-cat-api';
  loading$ = this.loader.loading$;
}
