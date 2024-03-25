import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private activaRoute:ActivatedRoute,private apiService: JobseekerApiService,private router:Router) { }
  
  jobseeker_id:any='' 
  jobseekerdata:any=''
  educations:any=''
  experiences:any=''
  ngOnInit(): void {
    let id= this.activaRoute.snapshot.paramMap.get('id')
     console.log(id)
     this.apiService.getsinglejobseekerdata(id).subscribe(res=>{
      this.jobseekerdata=res
      this.jobseeker_id=this.jobseekerdata._id
      this.educations=this.jobseekerdata.education
      this.experiences=this.jobseekerdata.experience
      console.log(this.educations)
      console.log(this.experiences)
      console.log(this.jobseekerdata);
     })
  } 
  navigatetogeneraldata(id:any){
    this.router.navigate([`/general-information/${id}`])
  }
  navigatetoeducation(id:any){
    this.router.navigate([`/education/${id}`])
  }
  navigatetoexperience(id:any){
    this.router.navigate([`/experiences/${id}`])
  }
  tojobs(id:any){
    this.router.navigateByUrl(`/jobseekerviewjobs/${id}`)
  }

  function(){
    localStorage.removeItem('token')
  }

}
