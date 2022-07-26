import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]

  constructor() {
    this.products = []
  
    for(let i=1; i<=20; i++){
      this.products.push(new Product('Produit ' + i, 'En stock'))
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

  addProduct(product:Product){
    this.products.push(product)
  }

  getProductById(id:number):Product{
     return this.products[id]
  }

  editProduct(product:Product){
    this.products[product.id] = product
  }
}
