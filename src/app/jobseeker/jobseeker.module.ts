import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekerRoutingModule } from './jobseeker-routing.module';

import { GeneralInformationComponent } from '../jobseeker/general-information/general-information.component';
import { ExperienceComponent } from '../jobseeker/experience/experience.component';
import { EducationComponent } from '../jobseeker/education/education.component';
import { DashboardComponent } from '../jobseeker/dashboard/dashboard.component';
import { ViewjobsComponent } from '../jobseeker/viewjobs/viewjobs.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplyjobsComponent } from '../jobseeker/applyjobs/applyjobs.component';
import { HeaderComponent } from '../jobseeker/header/header.component';
import { JobseekerApiService } from './jobseeker-api.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    GeneralInformationComponent,
    ExperienceComponent,
    EducationComponent,
    DashboardComponent,
    ViewjobsComponent,
    ApplyjobsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    JobseekerRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


    
  ],
  providers:[JobseekerApiService,AuthGuard]
})

export class JobseekerModule { }
