import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-jobseeker-uv',
  templateUrl: './jobseeker-uv.component.html',
  styleUrls: ['./jobseeker-uv.component.css']
})
export class JobseekerUVComponent implements OnInit {


  feedbackForm:any = new FormGroup({
    'feedback' : new FormControl('')
    })
                                                               // all decalarations

  jobseekerData:any = []
  verified:any = []


  constructor(private api: AdminApiService) { }

  ngOnInit(): void {
    this.getjobseeker()
  }


                                                   // all functions
  
  onSubmit(){ }

  getjobseeker(){              // fetch jobseeker data
    this.api.getjobseeker().subscribe(res=>{
      this.jobseekerData = res;
      console.log(this.jobseekerData);
      
    })
  }

   approve(data:any){   // approval
     data.approval_status  = "verified"
    this.verified = data
     this.api.approvejobseeker(this.verified).subscribe( res =>{
        console.log(res);
        window.alert(" Approved ")
         this.getjobseeker()
     })
  }

   delete(id:any){          // jobseeker delete
    if(window.confirm(" are you sure to delete this ? ")){
      this.api.deletejobseeker(id).subscribe( res =>{
        this.getjobseeker()
     })
    }
  }

  function(){
    localStorage.removeItem('token')
  }

}

