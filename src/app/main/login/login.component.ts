import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { SignUpService } from '../sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private SignUpService:SignUpService, private snackBar:MatSnackBar) { }

    jobseekerdata:any=[]
    holder:any=[]
  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  }) 
  ngOnInit() {  
  
  }
login(){
  
   this.SignUpService.getjobseekerlogin(this.loginForm.value).subscribe(res=>{
    if(res.message){
      alert('admin didnot verified yet')
      this.router.navigate(['/jobseekerlogin'])
    }
    else{
      this.holder = res.data
      console.log(res)
      console.log('token',res.token);
      localStorage.setItem('token',res.token)
      alert('Successfully Login')
      this.router.navigateByUrl(`/jobseekerdashboard/${this.holder._id}`)
     } 
  })
    
}
}


