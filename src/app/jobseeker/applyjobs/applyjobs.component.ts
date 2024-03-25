import { Component, OnInit } from '@angular/core';
import { JobseekerApiService } from '../../jobseeker/jobseeker-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applyjobs',
  templateUrl: './applyjobs.component.html',
  styleUrls: ['./applyjobs.component.css']
})
export class ApplyjobsComponent implements OnInit {
  jobs: any[] = [];
  form: FormGroup | null = null;

  constructor(private apiService: JobseekerApiService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      resume_file_upload: new FormControl(null),
      profile_link: new FormControl(null)
    });

    this.apiService.getappliedjobs().subscribe(
      (res: any) => {
        this.jobs = res;
      },
      (error: any) => {
        console.error('Error fetching applied jobs:', error);
        // Handle error, show error message, etc.
      }
    );
  }

  fileselect(event: any) {
    if (this.form) {
      const file: File = event.target.files[0];
      this.form.get('resume_file_upload')?.setValue(file);
    }
  }

  onSubmit() {
    if (this.form) {
      const formData = new FormData();
      formData.append('resume', this.form.get('resume_file_upload')?.value || '');
      formData.append('profile_link', this.form.get('profile_link')?.value || '');
      
      // Call your API service method to submit the form data
      // Example: this.apiService.submitJobApplication(formData).subscribe(...)
    }
  }
}
