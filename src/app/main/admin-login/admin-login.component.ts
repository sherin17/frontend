import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

   
  constructor(private router:Router,
    private SignUpService:SignUpService) { }

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })
  ngOnInit(): void {
  }
  userverify(){
  
    console.log(this.loginForm.value)
    let data=this.loginForm.value
    this.SignUpService.loginadmin(data).subscribe(res=>{
      
        console.log('data from backend',res)
        localStorage.setItem('token',res.token)
        if(res.message){
          alert('Invalid Username and Password')
          this.router.navigate(['/adminlogin'])
        }
        else{
          alert("Admin  successfully logged In")
        this.router.navigate(['dashadmin'])
         } 
    })
    
  }
}