import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-new-product-view',
  templateUrl: './new-product-view.component.html',
  styleUrls: ['./new-product-view.component.css']
})
export class NewProductViewComponent implements OnInit {

  product: Product

  constructor(private productService:ProductService, private router:Router) {
    this.product = new Product("","En stock")
   }

  ngOnInit(): void {
  }

  onSubmitNewProduct(){
    this.productService.addProduct(this.product)
    this.router.navigate(['/'])
  }

}
