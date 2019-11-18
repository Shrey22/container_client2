import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NfComponent } from './nf/nf.component';
import {  HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';

//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"home", component:HomeComponent},
      {path:"contact", component:ContactComponent},
      {path:"about", component:AboutComponent},
      {path:"**", component:NfComponent},
    ])
  ],
  providers: [HttpClientModule,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
