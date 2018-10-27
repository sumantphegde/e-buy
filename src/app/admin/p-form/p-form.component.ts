import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdCategoryService } from './../../prod-category.service';
import { ProductService } from './../../product.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-p-form',
  templateUrl: './p-form.component.html',
  styleUrls: ['./p-form.component.css']
})
export class PFormComponent {
  categories$;
  prd: any = {};
  pId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: ProdCategoryService,
    private product: ProductService)
    {
      this.categories$ = categoryService.getCategories();

      this.pId = this.route.snapshot.paramMap.get('id');
      if (this.pId) {
        this.product.getProduct(this.pId).valueChanges().pipe(take(1)).subscribe(p => this.prd = p);
      }
    }

  save(prod) {
    if(this.pId) this.product.update(this.pId, prod)
    else this.product.create(prod);

    this.router.navigate(['admin/products']);
  }

  delete(){
    if(!confirm('Are you sure to delete this product?')) return;

    this.product.delete(this.pId)
    this.router.navigate(['admin/products']);
  }

  cancel(){
    this.router.navigate(['admin/products']);
  }
}
