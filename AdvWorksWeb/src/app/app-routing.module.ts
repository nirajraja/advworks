import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './content/tabs/people/people.component';
import { ProductsComponent } from './content/tabs/products/products.component';
import { SalesComponent } from './content/tabs/sales/sales.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'sales', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
