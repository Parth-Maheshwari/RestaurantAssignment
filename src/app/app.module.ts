import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { MenulistComponent } from './menulist/menulist.component';
import { RestlistComponent } from './restlist/restlist.component';
import { MenulistService } from './menulist.service'
import { RestlistService } from './restlist.service';
import { BooknowComponent } from './booknow/booknow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    LandingComponent,
    NavComponent,
    MenulistComponent,
    RestlistComponent,
    BooknowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenulistService, RestlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
