import { Component,OnInit } from '@angular/core';
import { productInfo } from './product.model';
import { Injectable } from '@angular/core';
import { productDataService } from './product.service'
 
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private productUrl = '/api/product/';
  private productInfos : productInfo[];

 constructor(private http: Http, private productDataServices : productDataService) {
 
  }

  ngOnInit() {
     console.info("app init");
    //this.productDataServices.setProductData(this.productDataServices.getProductData());
    
    //fetching data from web - service
    //this.productDataServices.getProduct().then(productInfos => this.productInfos = productInfos);
    //added data to product data service
   // this.productDataServices.setProductData(this.productInfos);
  }




}
