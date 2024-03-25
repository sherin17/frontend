import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.css']
})
export class JobPostFormComponent implements OnInit { 
    status:boolean = false
  jobForm:any = new FormGroup({
    'jobTitle':new FormControl('',[Validators.required]),
    'companyName':new FormControl('',[Validators.required]),
    'qualification':new FormControl('',[Validators.required]),
    'jobSector':new FormControl('',[Validators.required]),
    'location':new FormControl('',[Validators.required]),
    'skills':new FormControl('',[Validators.required]),   
    'description':new FormControl('',[Validators.required]),
    'salaryRange':new FormControl('',[Validators.required]),
    'postedBy':new FormControl('admin',[Validators.required]),
    'experience':new FormControl('',[Validators.required]),
    'closingDate':new FormControl('',[Validators.required]),
  

  })
  constructor(private api:AdminApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.jobForm.value);
    let status:String = this.jobForm.status;
    if(status !== "INVALID"){ 
      this.api.postJob(this.jobForm.value).subscribe(res=>{
      console.log(res);
      window.alert("job posted")
    })
  } else{
    this.status = true
  }
  }
  function(){
    localStorage.removeItem('token') 
  }
}
