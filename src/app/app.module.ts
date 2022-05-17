import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartSummaryComponent,
    PromoCodeComponent,
    CartHeaderComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
