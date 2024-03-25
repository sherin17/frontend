import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  condition:String =''
  jobs:any=''
  applications:any=''
  profile:any=''
  ngOnInit(): void {
    this.adminApi.getappliedjobs().subscribe(res=>{
      this.jobs = res
      console.log(this.jobs)
    })
  }
  view(id:any){
    this.adminApi.applicationforjob(id).subscribe(res=>{ //gets all applications from database
      this.applications = res // saving the reponse
      if(this.applications.length > 0){
        this.condition = `Number of Applications: ${this.applications.length}`
      }else{
        this.condition = "No Applicants yet!"
      }
      console.log(this.applications.length);
      console.log(this.applications);
    })
  }

  getprofile(id:any){
    this.adminApi.getsinglejobseekerdata(id).subscribe(res=>{
      console.log(res)
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
    })
  }
  delete(id:any){
    if(window.confirm(" are you sure?")){
      this.adminApi.deleteApplication(id).subscribe(res=>{
        location.reload()
      })
    }
  }

  deleteJob(id:any){
    if(window.confirm(" are you sure?")){
      this.adminApi.deleteJob(id).subscribe(res=>{
        location.reload()
      })
    }
  }
  verify(id:any){
    this.adminApi.verifyApplication(id).subscribe(res=>{
      window.alert(" verified")
      location.reload()
    })
  }

  function(){
    localStorage.removeItem('token')
  }
}
