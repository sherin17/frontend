import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private jobseekerApi:JobseekerApiService,private router:Router,
    private route:ActivatedRoute) { } 

  id:any =''
  data:any=[]
  holder={
    qualification:'',
    completion_status:'',
    main_stream:'',
    specialization:'',
    university:'',
    percentage:'',
    year_of_pass:''
  }                                                    
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.jobseekerApi.getsinglejobseekerdata(this.id).subscribe((res:any)=>{
      this.data=res.education
      console.log(this.data)
    })
  }

  onsubmit(){
      this.data.push(this.holder)
      console.log(this.data);
      this.jobseekerApi.jobseekereducation(this.data, this.id).subscribe(res=>{
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
