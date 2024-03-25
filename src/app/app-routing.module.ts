import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { JobseekerSignupComponent } from './main/jobseeker-signup/jobseeker-signup.component';
import { HomeComponent } from './main/home/home.component';

import { LoginComponent } from './main/login/login.component';
const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'jobseekersignup', component:JobseekerSignupComponent},
{path:'jobseekerlogin',component:LoginComponent},
{path:'adminlogin',component:AdminLoginComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
