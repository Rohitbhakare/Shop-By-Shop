import { Component, OnInit , Input } from '@angular/core';
import { tables } from './table.model';
import { productInfo } from '../product.model'
import { productDataService } from '../product.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})

export class TableComponent implements OnInit {

 private productDetails: productInfo[]=[]; 
 private tableModel: tables[]; 

  constructor(private productDataServices : productDataService) { }

  ngOnInit() {
    console.log("Table init ");  
      this.productDetails = this.productDataServices.getProductData();
      console.info(this.productDetails); 
    //  for(let i = 0; i < this.productDetails.length ; i++){
    //   if('Table'=== this.productDetails[i].productName){
    //     this.tableModel.push(new tables(this.productDetails[i].productName,this.productDetails[i].description,this.productDetails[i].imagePath,this.productDetails[i].price)); 
    //   }
    // }

  }

}
