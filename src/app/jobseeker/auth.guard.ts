import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JobseekerApiService } from './jobseeker-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jobseekerService:JobseekerApiService,private router:Router){}

  canActivate():boolean{
    if(this.jobseekerService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/jobseekerlogin'])
      return false
    }

  }
  
  }