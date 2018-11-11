import { Component, OnInit,Input } from '@angular/core';
import { ProdCategoryService } from './../../prod-category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;
  constructor(categoryService:ProdCategoryService) {
    this.categories$=categoryService.getCategories();
   }

  ngOnInit() {
  }

}
