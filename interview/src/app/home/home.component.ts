import { Component, OnInit } from '@angular/core';
import { DATA } from './../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  data = DATA;
  title = 'Interview';
  constructor() {}

  ngOnInit(): void {}
}
