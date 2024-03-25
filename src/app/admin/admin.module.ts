import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { JobPostFormComponent } from './components/jobPostForm/job-post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { JobseekerUVComponent } from './components/jobseeker-uv/jobseeker-uv.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthGuard } from './auth.guard';
import { AdminApiService } from './admin-api.service';


@NgModule({
  declarations: [ JobPostFormComponent, JobseekerUVComponent, JobApplicationsComponent,DashAdminComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule, MatSnackBarModule, CarouselModule,MatCardModule,MatExpansionModule,MatButtonModule,MatMenuModule],
  providers:[AuthGuard,AdminApiService]
}
)
export class AdminModule {}
