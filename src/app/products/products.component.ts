import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import {switchMap,map} from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] =[];
  filteredProducts: Product[]=[];
  cart: any;
  subscription: Subscription;
  
  category: string;

  constructor(private productService: ProductService,route:ActivatedRoute,private shoppingCartService:ShoppingCartService) {
    
    this.productService.getAll().switchMap(products=> {
      this.products=products;
      return route.queryParamMap;
    })
      .subscribe(params=>{
        this.category=params.get('category');
  
        this.filteredProducts=(this.category)?this.products.filter(p=>p.category===this.category):this.products;
      });
    
   }

  async ngOnInit() {
    this.subscription=(await this.shoppingCartService.getCart()).subscribe(cart=>this.cart=cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
