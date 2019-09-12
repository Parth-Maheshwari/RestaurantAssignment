import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
// import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { MenulistComponent } from './menulist/menulist.component';
import { RestlistComponent } from './restlist/restlist.component';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'home', component: HomeComponent ,
  children: [
    
    {path: 'booknow', component: BooknowComponent},
    {path: 'nav', component: NavComponent },
    {path: ':id', component: MenulistComponent},
    
    {path: '', component: RestlistComponent, pathMatch: 'full'}
    ]
  },
{path : "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }