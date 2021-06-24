import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { CamerasComponent } from './categories/cameras/cameras.component';
import { CategoriesComponent } from './categories/categories.component';
import { LaptopsComponent } from './categories/laptops/laptops.component';
import { SmartphonesComponent } from './categories/smartphones/smartphones.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'categories',component:CategoriesComponent,children:[
    {path:'smartphones',component:SmartphonesComponent},
    {path:'laptops',component:LaptopsComponent},
    {path:'cameras',component:CamerasComponent},
  ]},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
    {path:'cameras',component:CamerasComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
