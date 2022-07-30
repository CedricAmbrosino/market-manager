import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Array<any>

  constructor() {
    this.products = []
  
    for(let i=1; i<=20; i++){
      this.products.push({
        id: i,
        name: 'Produit ' + i,
        state: 'En stock'
      })
    }
  }

  changeAllsProductsStates(newState:string){    
    for(let product of this.products){
      product.state = newState
    }
  }

  changeProductState(idSelected:number){    
    for(let product of this.products){
      if(+product.id === idSelected){
        product.state = this.nextState(product.state)
        break
      }      
    }
  }

  nextState(nowState:string):string{
    return nowState === 'En stock'? "Pas en stock":"En stock"
  }  
}
