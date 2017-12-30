import { Injectable } from '@angular/core';
import { productInfo } from './product.model';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class productDataService {

    private productData: productInfo[]=[];
    private productUrl = '/api/product/';

    constructor(private http: HttpClient) {
        // this.productData = null;
    }

    public setProductData(val: productInfo[]): void {
       console.log("product set");
        this.productData = val;
    }

    public getProductData(): productInfo[] {
       
  
        console.log("productInfo method");
        //fetching data from web - service
        // this.getProduct().then(productData => this.productData = productData);
     //  if(null == this.productData){
        
        // this.getAllProduct().subscribe(
        //     (data: productInfo[]) => {
        //         this.setProductData(data);
                
        //     }
        // );
        this.http.get(this.productUrl).subscribe((data:productInfo[])  => {
      this.setProductData(data);
    });
  //  }
        return this.productData;
    }


    getAllProduct() {
        
        console.log("getAllProduct method");
        return this.http.get(this.productUrl).subscribe(data => {
      console.log(data);
    });
        // return this.http.get(this.productUrl)
        //     .map((res: Response) => res.json());
    }
}

 //fetching data from webservice
//   private getProduct(): Promise<productInfo[]> {
//     return this.http.get(this.productUrl)
//       .toPromise()
//       .then(response => response.json() as productInfo[])
//       .catch(this.handleError);
//   }

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }
//}