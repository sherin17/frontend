import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private jobseekerApi:JobseekerApiService,private router:Router,
    private route:ActivatedRoute) { }

    id:any
    data:any=[]
  
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.jobseekerApi.getsinglejobseekerdata(this.id).subscribe((res:any)=>{
      this.data=res

      
    })
   
  }
onsubmit(){
  this.jobseekerApi.jobseekergeneraldata(this.data,this.id).subscribe(res=>{
    console.log(res)
    this.data=res
    alert("Data updated successfully")
    this.router.navigate([`jobseekerdashboard/${this.id}`])
  })
}
back(){
  history.back()
}

  opened=false;
}
