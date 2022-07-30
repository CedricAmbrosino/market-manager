import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  id:number
  name: string
  state: string

  constructor(private route:ActivatedRoute, private productService:ProductService ) { 
    this.id=0
    this.name="Default Name"
    this.state="No state"
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']
    this.name = this.productService.products[this.id-1].name
    this.state = this.productService.products[this.id-1].state
  }

  getStateInStock(){ return this.state === 'En stock'}
  getStateNoStock(){ return this.state === 'Pas en stock'}
  getStateNoState(){ return this.state !== 'En stock' && this.state !== 'Pas en stock'}

}
