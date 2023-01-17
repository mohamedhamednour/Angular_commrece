import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from './prudacts/components/all-products/all-products.component'
import {ProductDitailsComponent} from './prudacts/components/product-ditails/product-ditails.component'
import {    GetcardsComponent} from '../app/card/getcards/getcards.component'
const routes: Routes = [
  {path:'products' , component:AllProductsComponent},
  {path:'product/:id' , component:ProductDitailsComponent},
  {path:'cards' , component:GetcardsComponent},

  {path:'*' , redirectTo:'products' , pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
