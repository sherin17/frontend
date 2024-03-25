import { Component, OnInit } from '@angular/core';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private jobseekerApi:JobseekerApiService,private router:Router,
    private route:ActivatedRoute) { }

  id:any=''
  data:any=[]
    holder={
      company:'',
      Designation:'',
      presently_working:'',
      starting_date:'',
      ending_date:'',
      current_monthly_salary:'',
      notice_period:''
    }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.jobseekerApi.getsinglejobseekerdata(this.id).subscribe((res:any)=>{
      this.data=res.experience
      console.log(this.data)
    })
  }
  onsubmit(){
    this.data.push(this.holder)
    console.log(this.data); 
    this.jobseekerApi.jobseekerexperience(this.data, this.id).subscribe(res=>{
    console.log(res)
    this.data=res
    alert("Data updated successfully")
    this.ngOnInit()
    this.router.navigate([`jobseekerdashboard/${this.id}`])
  })
  }

  back(){
    history.back()
  }
}
