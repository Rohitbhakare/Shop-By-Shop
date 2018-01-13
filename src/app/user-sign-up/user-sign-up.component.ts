import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onSubmit(forms : NgForm){

    console.log("in On submit method");
    console.log(forms); 
  }

}
