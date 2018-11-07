import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import {  take } from 'rxjs/operators';
import {ShoppingCart } from './models/shopping-cart';
import { AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId=await this.getOrCreateCartId();
     let cart=this.db.object('/shopping-carts/' + cartId)
     .snapshotChanges().pipe(
       map((result:any)=>
       {
        const key = result.key;
        const items = result.payload.val().items;
        return new ShoppingCart(key,items);
      })
    )
    return cart;
  }

  async clearCart(){
    let cartId=await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId=localStorage.getItem('cartId');
    if(cartId) return cartId;
    
      let result=await this.create();
      localStorage.setItem('cartId',result.key);
      return result.key;
      }

      async addToCart(product: Product){
        this.updateItemQuantity(product,1);
       }

       async removeFromCart(product: Product){
        this.updateItemQuantity(product,-1);
       }

      private getItem(cartId: string,productId: string)
      {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
      }

      private async updateItemQuantity(product: Product,change: number){

        const cartId=await this.getOrCreateCartId();
        const item=this.getItem(cartId,product.id)
        item.snapshotChanges().pipe(take(1)).subscribe((i:any) =>{
          console.log(i);
          if(i.payload.val())
          { item.update({product: product,quantity: i.payload.val().quantity + change });
              if(i.payload.val().quantity===1 && change==-1)
                  item.remove();
        
        
        }
          else item.update({product: product, quantity: 1});
        });

      }
}
