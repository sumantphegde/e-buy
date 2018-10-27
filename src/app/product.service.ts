import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

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
}
