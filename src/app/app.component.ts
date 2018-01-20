import { Component, OnInit } from '@angular/core';
import { productInfo } from './product.model';
import { Injectable } from '@angular/core';
import { productDataService } from './product.service'

import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css",
    "../css/animate.css",
    "../css/icomoon.css",
    "../css/bootstrap.css",
    "../css/style.css"]
})
export class AppComponent {

  private productUrl = '/api/product/';
  private productInfos: productInfo[] = [];
  private bedInfo: productInfo[] = [];
  private tableInfos: productInfo[] = [];
  private matressInfos: productInfo[];
  private chairInfos: productInfo[];
  private cupboardInfos: productInfo[];
  private beanBagInfos: productInfo[];
  private rackInfos: productInfo[];
  busy: Subscription;

  constructor(private http: HttpClient, private productDataServices: productDataService) {

  }

  ngOnInit() {
    console.info("app init");
   this.busy = this.getAllProduct()
      .subscribe(  
        suc => {
        this.productInfos = suc;
        this.getSortedProduct();
        console.log(suc);
        },
        err => {
        console.log(err );
    });
    
    //console.info("added" + this.productInfos);
  }

  getAllProduct(): Observable<productInfo[]> {

    console.log("getAllProduct method");
    return this.http.get<productInfo[]>(this.productUrl);
  }

  getSortedProduct(){
    console.log("rohit1ß");
    for (let products of this.productInfos) {
      var product:string = products.productName;
     
      switch(product){

        case "Table":{
         this.tableInfos.push(products);
         break; 
        }

        case "Bed":{
          this.bedInfo.push(products);
          break;
        }

        case "Chair":{
          this.chairInfos.push(products);
          break;
        }

        case "Matress":{
          this.matressInfos.push(products);
          break;
        }

        case "Cupboard":{
          this.cupboardInfos.push(products);
          break;
        }

        case "Beanbag":{
          this.beanBagInfos.push(products);
          break;
        }

        case "Rack":{
          this.rackInfos.push(products);
          break;
        }
      }

    }


  }
}
