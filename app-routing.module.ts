import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compose } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '', component:AppComponent
  },
  {
    path: '/post', component:AppComponent
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
