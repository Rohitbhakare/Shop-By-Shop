import { Component, OnInit } from '@angular/core';
import { bed } from './bed.model';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {

bedModel: bed[] = [

]

  constructor() { }

  ngOnInit() {
  }

}
