import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from '../main/sign-up.service';
import { AdminApiService } from './admin-api.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private adminService:AdminApiService,private router:Router){}

  canActivate():boolean{
    
    if(this.adminService.loggedIn()){
      return true
    } else{
      this.router.navigate(['/adminlogin'])
      return false
    }

  }
  
}
