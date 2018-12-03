import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticateService } from './authenticate.service';
import { RestrictAccess } from './restrict-access.service';
import { UserService } from './user.service';
import { AdminAccess } from './admin-access.service';
import { ProdCategoryService } from './prod-category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import {OrderSuccessComponent} from './order-success/order-success.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdProductsComponent } from './admin/ad-products/ad-products.component';
import { AdOrdersComponent } from './admin/ad-orders/ad-orders.component';
import { PFormComponent } from './admin/p-form/p-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from 'src/app/order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ViewOrdersComponent } from './my-orders/view-orders/view-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    LoginComponent,
    AdProductsComponent,
    AdOrdersComponent,
    PFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    OrderSuccessComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shoppingCart', component: ShoppingCartComponent },
      { path : 'order-success/:id', component : OrderSuccessComponent, canActivate: [RestrictAccess] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [RestrictAccess] },
      { path: 'myOrders', component: MyOrdersComponent, canActivate: [RestrictAccess] },
      { path: 'login', component: LoginComponent },
      { path: 'view-orders/:id', component: ViewOrdersComponent, canActivate: [RestrictAccess]},
      {
        path: 'admin/products/add',
        component: PFormComponent,
        canActivate: [RestrictAccess, AdminAccess]
      },
      {
        path: 'admin/products/:id',
        component: PFormComponent,
        canActivate: [RestrictAccess, AdminAccess]
      },
      {
        path: 'admin/products',
        component: AdProductsComponent,
        canActivate: [RestrictAccess, AdminAccess]
      },
      {
        path: 'admin/orders',
        component: AdOrdersComponent,
        canActivate: [RestrictAccess, AdminAccess]
      },
    ])
  ],
  providers: [
    AuthenticateService,
    RestrictAccess,
    AdminAccess,
    UserService,
    ProdCategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
