import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductService } from './services/products/product.service';
import { RowTableComponent } from './components/row-table/row-table.component';
import { StockButtonComponent } from './components/stock-button/stock-button.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProductViewComponent } from './views/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RowTableComponent,
    StockButtonComponent,
    ErrorPageComponent,
    DashboardComponent,
    AuthViewComponent,
    HeaderComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
