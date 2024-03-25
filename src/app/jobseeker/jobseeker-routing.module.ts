import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobsComponent } from '../jobseeker/applyjobs/applyjobs.component';
import { DashboardComponent } from '../jobseeker/dashboard/dashboard.component';
import { EducationComponent } from '../jobseeker/education/education.component';
import { ExperienceComponent } from '../jobseeker/experience/experience.component';
import { GeneralInformationComponent } from '../jobseeker/general-information/general-information.component';
import { ViewjobsComponent } from '../jobseeker/viewjobs/viewjobs.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'jobseekerdashboard/:id',canActivate:[AuthGuard],component:DashboardComponent},
  {path:'general-information/:id',canActivate:[AuthGuard],component:GeneralInformationComponent },
  {path:'education/:id',canActivate:[AuthGuard],component:EducationComponent},
  {path:'experiences/:id',canActivate:[AuthGuard],component:ExperienceComponent},
  {path:'jobseekerviewjobs/:id',canActivate:[AuthGuard],component:ViewjobsComponent},
  {path:'appliedjobs',canActivate:[AuthGuard],component:ApplyjobsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekerRoutingModule { }
