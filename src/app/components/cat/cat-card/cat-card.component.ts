import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/shared/interfaces/Cat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  constructor() {}

  @Input() catCard?: Cat;

  ngOnInit() {}
}
