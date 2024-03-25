import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css'],
})
export class ViewjobsComponent implements OnInit {
  constructor(private apiService: JobseekerApiService, private router: Router, private activeroute: ActivatedRoute) {}

  searchText: string = ''; // Define searchText property here
  form: any = new FormGroup({
    link: new FormControl(null),
    job_id: new FormControl(null),
    jobseeker_id: new FormControl(null)
  });

  date: boolean = true;
  jobs: any = [];
  selectedFile!: File;
  jobID: any = '';
  jobseekerID: any = '';

  ngOnInit(): void {
    this.getjob();
    this.jobseekerID = this.activeroute.snapshot.paramMap.get('id');
  }

  getjob() {
    this.apiService.getJob().subscribe((res) => {
      this.jobs = res;
      console.log(this.jobs);
    });
  }

  search() {
    if (this.searchText.trim() === '') {
      // If search text is empty, display all jobs
      this.getjob();
    } else {
      // Filter jobs based on search text
      this.jobs = this.jobs.filter((job: any) => { // Specify the type of job parameter
        return job.jobTitle.toLowerCase().includes(this.searchText.toLowerCase()) ||
               job.companyName.toLowerCase().includes(this.searchText.toLowerCase());
        // Add more fields for search as needed
      });
    }
  }

  storeid(id: any) {
    this.jobID = id;
  }

  fileselect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.form.value.job_id = this.jobID;
    this.form.value.jobseeker_id = this.jobseekerID;
    const data = new FormData();
    let link = this.form.value;
    for (const prop in link) {
      data.append(prop, link[prop]);
    }
    data.append('resume', this.selectedFile);
    console.log(data);
    this.apiService.addjobapplication(data).subscribe((res) => {
      console.log(res);
    });
    location.reload();
  }

  datecheck(date: any) {
    const today = new Date();
    const jobdate = new Date(date);
    console.log(today, jobdate);
    if (jobdate < today) {
      this.date = true;
      return true;
    } else {
      this.date = false;
      return false;
    }
  }
}
