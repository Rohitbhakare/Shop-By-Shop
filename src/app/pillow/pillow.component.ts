import { Component, OnInit } from '@angular/core';
import { pillow } from './pillow.model';


@Component({
  selector: 'app-pillow',
  templateUrl: './pillow.component.html',
  styleUrls: ['./pillow.component.css']
})
export class PillowComponent implements OnInit {

  pillowModel: pillow[] = [


  ];

  constructor() { }

  ngOnInit() {
  }

}
