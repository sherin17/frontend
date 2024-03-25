import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiService: SignUpService, private router: Router) { }

  filterString: string = '';
  jobs: any[] = [];
  searchText: string = ''; // Define searchText property here

  ngOnInit(): void {
    this.getJob();
  }

  getJob() {
    this.apiService.getJob().subscribe(res => {
      this.jobs = res;
    });
  }

  apply() {
    alert("Login/Signup to Apply for the job");
    this.router.navigate(['/jobseekersignup']);
  }
  search() {
    if (this.searchText.trim() === '') {
      // If search text is empty, display all jobs
      this.getJob();
    } else {
      // Filter jobs based on search text
      this.jobs = this.jobs.filter(job => {
        return job.jobTitle.toLowerCase().includes(this.searchText.toLowerCase()) || 
               job.companyName.toLowerCase().includes(this.searchText.toLowerCase());
        // Add more fields for search as needed
      });
    }
  }
  
}
