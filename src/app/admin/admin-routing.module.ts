import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { JobseekerUVComponent } from './components/jobseeker-uv/jobseeker-uv.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';


 
const routes: Routes = [
  {path:'jobpost',canActivate:[AuthGuard], component:JobPostFormComponent},
  {path:'verifyjobseeker',canActivate:[AuthGuard], component:JobseekerUVComponent},
  {path:'adminjobsandapplies',canActivate:[AuthGuard], component:JobApplicationsComponent},
  {path:'dashadmin',canActivate:[AuthGuard], component:DashAdminComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
