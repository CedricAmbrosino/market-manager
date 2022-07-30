import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-row-table]',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.css']
})
export class RowTableComponent implements OnInit {

  @Input() id:number
  @Input() name:string
  @Input() state:string

  linkToDetailProduct: string

  constructor(private router:Router) {
    this.id=0
    this.name="Default Product"
    this.state="Pas en stock"
    this.linkToDetailProduct= ""
   }

  ngOnInit(): void {
    this.linkToDetailProduct= 'produit/' + this.id    
  }

  onClickGoToDetailProduct(){
    this.router.navigate([this.linkToDetailProduct])
  }

}
