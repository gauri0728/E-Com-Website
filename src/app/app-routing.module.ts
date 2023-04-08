import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarousalComponent } from './Pages/carousal/carousal.component';
import { CartComponent } from './Pages/cart/cart.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { DealsComponent } from './Pages/deals/deals.component';
import { ElectronicsComponent } from './Pages/electronics/electronics.component';
import { FaishonComponent } from './Pages/faishon/faishon.component';
import { GroceryComponent } from './Pages/grocery/grocery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LocalshopComponent } from './Pages/localshop/localshop.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { ShopsComponent } from './Pages/shops/shops.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard1/dashboard/dashboard.component';
import { RegisterComponent } from './dashboard1/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'localshop', component: LocalshopComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'deals', component: DealsComponent },
  {path:'carousal' , component:CarousalComponent},
  {path:'login' , component:LoginComponent},
  {path:'register-page' , component:RegisterPageComponent},
  {path:'cart' , component:CartComponent},
  {path:'shops', component:ShopsComponent},
  {path:'faishon', component:FaishonComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'grocery', component:GroceryComponent},
  { path:'product' , component:ProductsComponent},
  { component:ProductDetailsComponent , path:'details/:productId'},
  {  component:SearchComponent , path:'search/:query'},
  {component:DashboardComponent , path:'dashboard'},
  { component:RegisterComponent , path:'register'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
