import { Injectable } from '@angular/core';
import { productInfo } from './product.model';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class productDataService {

    productData: productInfo[] = [];
    productUrl = '/api/product/';

    constructor(private http: HttpClient) {
        // this.productData = null;
    }

    public setProductData(val: productInfo[]): void {
        console.log("product set");
        this.productData = val;
    }

    public getProductData() : productInfo[]{
        console.log("productInfo method");
        return this.productData;
        
    }

    getAllProductData() {
        console.log("all product productData");
      this.getAllProduct()
              .subscribe(hero => this.productData = hero);    

    }

    getAllProduct() : Observable<productInfo[]>{

        console.log("getAllProduct method");
        return this.http.get<productInfo[]>(this.productUrl);
      
    }
}

