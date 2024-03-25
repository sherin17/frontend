import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { JobseekerModule } from './jobseeker/jobseeker.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './main/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { JobseekerSignupComponent } from './main/jobseeker-signup/jobseeker-signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpService } from './main/sign-up.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './main/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TokenInterceptorService } from './token-interceptor.service';
import { FilterPipe  } from './pipes/filter.pipe';
import { AdminApiService } from './admin/admin-api.service';
import { JobseekerApiService } from './jobseeker/jobseeker-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    JobseekerSignupComponent,
    FooterComponent,
    AdminLoginComponent,    
    FilterPipe 
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModule,
    JobseekerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    CarouselModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [SignUpService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }, AdminApiService, TokenInterceptorService, JobseekerApiService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
