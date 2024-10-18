import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoadBillNaturgyComponent } from './load-bill-naturgy/load-bill-naturgy.component';
import { MsourcesComponent } from './msources/msources.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomeComponent,
    ErrorComponent,
    LoadBillNaturgyComponent,
    MsourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
