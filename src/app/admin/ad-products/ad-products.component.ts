import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-products',
  templateUrl: './ad-products.component.html',
  styleUrls: ['./ad-products.component.css']
})
export class AdProductsComponent implements OnInit {
  product$ ;
//  pId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private products: ProductService) {
//    this.pId = this.route.snapshot.paramMap.get('id');
  //  console.log(this.pId);
    this.product$ = this.products.getAllProducts();

   }

  /* delete(){
     if (this.pId) {
       this.product.getProduct(this.pId).valueChanges().pipe(take(1)).subscribe(p => this.prd = p);
     }
     if(!confirm('Are you sure to delete this product?')) return;

     this.products.delete(this.pId)
     this.router.navigate(['admin/products']);
   }*/

  ngOnInit() {
  }

}
