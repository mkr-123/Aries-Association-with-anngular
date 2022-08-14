import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BuyerComponent } from './buyer/buyer.component';
import { LoginComponent } from './login/login.component';
import { VocherComponent } from './vocher/vocher.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    LoginComponent,
    VocherComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
