import { Component, OnInit } from '@angular/core';
import { matress } from './matress.model';

@Component({
  selector: 'app-matress',
  templateUrl: './matress.component.html',
  styleUrls: ['./matress.component.css']
})
export class MatressComponent implements OnInit {

  matressCupboard: matress[] = []
  
  ;

  constructor() { }

  ngOnInit() {
  }

}
