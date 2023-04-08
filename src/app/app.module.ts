import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SharepageComponent } from './sharepage/sharepage.component';
import { NavbarComponent } from './Sharepage/navbar/navbar.component';
import { FooterComponent } from './Sharepage/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { LocalshopComponent } from './Pages/localshop/localshop.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { DealsComponent } from './Pages/deals/deals.component';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './Pages/carousal/carousal.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';

import { PaymentComponent } from './Pages/payment/payment.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ShopsComponent } from './Pages/shops/shops.component';
import { SubShopsComponent } from './Pages/sub-shops/sub-shops.component';
import { FaishonComponent } from './Pages/faishon/faishon.component';
import { ElectronicsComponent } from './Pages/electronics/electronics.component';
import { GroceryComponent } from './Pages/grocery/grocery.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard1/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './dashboard1/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    // SharepageComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LocalshopComponent,
    CategoriesComponent,
    DealsComponent,
    LoginComponent,
    RegisterPageComponent,
    
    PaymentComponent,
    CartComponent,
    ShopsComponent,
    SubShopsComponent,
    FaishonComponent,
    ElectronicsComponent,
    GroceryComponent,
    ProductsComponent,
    ProductDetailsComponent,
    SearchComponent,
    DashboardComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule ,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
