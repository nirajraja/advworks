import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './content/tabs/people/people.component';
import { ProductsComponent } from './content/tabs/products/products.component';
import { SalesComponent } from './content/tabs/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ProductsComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
