import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-stock-button',
  templateUrl: './stock-button.component.html',
  styleUrls: ['./stock-button.component.css']
})
export class StockButtonComponent implements OnInit, OnChanges {
  @Input() id:number
  @Input() state:string

  nextState:string

  constructor(private productService : ProductService) { 
    this.id=0
    this.state=""
    this.nextState=""
   
  }

  ngOnChanges(): void {
    this.nextState = this.productService.nextState(this.state);
  }

  ngOnInit(): void {
    this.nextState = this.productService.nextState(this.state);
  }
  
  onClickSwitchThisProductState(idSelected:number){
    this.productService.changeProductState(idSelected)
  }

}
