import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProdCategoryService {

  constructor(private database: AngularFireDatabase) { }

  getCategories(){  
    return this.database.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }
}
