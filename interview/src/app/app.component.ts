import { Component } from '@angular/core';
import {DATA} from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Interview';
  data = DATA;
}
