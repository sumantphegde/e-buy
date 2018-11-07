import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private database : AngularFireDatabase) { }

  create(prod){
    return this.database.list('/products').push(prod);
  }

  getAllProducts(){
    return this.database.list('/products').snapshotChanges();
  }

  getProduct(prodId){
    return this.database.object('/products/' + prodId);
  }

  update(prodId, prod){
    return this.database.object('/products/' + prodId).update(prod);
  }

  delete(prodId){
    return this.database.object('/products/' + prodId).remove();
  }
  getAll() {//Return in terms of Product[] for enabling filtering
    return this.database.list<Product>('/products').snapshotChanges().pipe(
      map(changes =>
          changes.map(c => {
              const data = c.payload.val() as Product;
              const id = c.payload.key;
              return { id, ...data };
          })
      )
  );;
  }
}
