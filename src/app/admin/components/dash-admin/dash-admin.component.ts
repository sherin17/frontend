import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';



@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {

  constructor(private apiservice: AdminApiService) { }

  ngOnInit(): void {

    this.getjobseekerUV();
    this.getjobseekerV();
    this.getAppUV();
    this.getAppV();

  }

  empV:any=[];
  empUV:any=[];
  jobseekerV:any=[];
  jobseekerUV:any=[];;
  appV:any=[];
  appUV:any=[];


  getjobseekerV(){
    this.apiservice.getjobseekerV().subscribe(res=>{
      this.jobseekerV = res
      console.log('jobseekerV:', this.jobseekerV.length)
    })
  }

  getjobseekerUV(){
    this.apiservice.getjobseeker().subscribe(res=>{
      this.jobseekerUV = res
      console.log('jobseeker UV:', this.jobseekerUV.length);
      
    })
  }



  getAppV(){
    this.apiservice.applicationVjob().subscribe(res=>{
      this.appV = res
      console.log("apps V", this.appV.length  );
      
    })
  }

  getAppUV(){
    this.apiservice.applicationUVjob().subscribe(res=>{
      this.appUV = res
      console.log("APPS UV", this.appUV.length);
      
    })
  }
  function(){
    localStorage.removeItem('token')
  }

}
