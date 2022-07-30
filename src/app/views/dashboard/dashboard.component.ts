import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productsList: Array<any>

  constructor(private productService : ProductService) {
    this.productsList = productService.products
  }

  onClickSwitchAllProductsStates(newState:string){
    this.productService.changeAllsProductsStates(newState)
  }

  ngOnInit(): void {
      
  }
  
}

