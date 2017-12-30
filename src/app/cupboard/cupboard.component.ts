import { Component, OnInit } from '@angular/core';
import { cupboard } from './cupboard.model';

@Component({
  selector: 'app-cupboard',
  templateUrl: './cupboard.component.html',
  styleUrls: ['./cupboard.component.css']
})
export class CupboardComponent implements OnInit {

cupboardModel: cupboard[] = [


];

  constructor() { }

  ngOnInit() {
  }

}
