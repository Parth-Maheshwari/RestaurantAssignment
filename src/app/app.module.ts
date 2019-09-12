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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';

// import { HTTPModule} from '@angular/http';

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
    // HTTPModule
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatDatepickerModule
  ],
  providers: [MenulistService, RestlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
