import { Component, OnInit } from '@angular/core';
import { chair } from './chair.model';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

chairModel: chair[] = [

];

  constructor() { }

  ngOnInit() {
  }

}
