import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeopleComponent } from './content/tabs/people/people.component';
import { ProductsComponent } from './content/tabs/products/products.component';
import { SalesComponent } from './content/tabs/sales/sales.component';
import { AppRoutingModule } from './app-routing.module';
import { AppConstants } from './content/common/constants/app.constants';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ProductsComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
