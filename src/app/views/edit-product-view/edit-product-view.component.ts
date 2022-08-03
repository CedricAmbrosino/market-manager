import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  product:Product
   
  constructor(private productService:ProductService, private route:ActivatedRoute,
    private router:Router) {
    let id = route.snapshot.params['id']
    this.product = productService.getProductById(id)
  }

  ngOnInit(): void {
  }

  onSubmitEditProduct(){
    this.productService.editProduct(this.product)
    this.router.navigate(['/'])
  }

}
