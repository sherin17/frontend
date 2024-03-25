import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient) { }
  postJob(data:any){
    return this.http.post('http://localhost:3000/api/verifiedjobs/postjob', data)
  }

  postmail(data:any, email:any, name:any){
    console.log(data, email, name)
    return this.http.post('http://localhost:3000/api/nodemailer/jobseekermail', {data, email, name})
  }

  getjobseeker(){
    return this.http.get('http://localhost:3000/api/jobseekeruv/jobseekers')
  }
postjobseeker(){
  return this.http.get('http://localhost:3000/api/jobseekeruv/jobseekersignup')
}

  getjobseekerV(){
    return this.http.get('http://localhost:3000/api/jobseekeruv/jobseekerVer')
  }

  approvejobseeker(data:any){
    return this.http.put(`http://localhost:3000/api/jobseekeruv/onejobseeker`,data)
    
  }


  deletejobseeker(id:any){
    return this.http.delete(`http://localhost:3000/api/jobseekeruv/deletejobseeker/${id}`)
  }

  getEmp(){
    return this.http.get('http://localhost:3000/api/employeuv/employers')
  }

  getEmpV(){
    return this.http.get('http://localhost:3000/api/employeuv/employersV')
  }

  deleteemp(id:any){
    return this.http.delete(`http://localhost:3000/api/employeuv/deleteemployer/${id}`)
  }

  approveemp(data:any){
    return this.http.put(`http://localhost:3000/api/employeuv/verifyemp`, data)
  } 

  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getadminjob')
  }
    getempappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getempjob')
  }

  applicationforjob(id:any){
    return this.http.get(`http://localhost:3000/api/applicationsuv/applicationdata/${id}`)
  }

  applicationUVjob(){
    return this.http.get(`http://localhost:3000/api/applicationsuv/UVApps`)
  }

  applicationVjob(){
    return this.http.get(`http://localhost:3000/api/applicationsuv/VApps`)
  }


  getsinglejobseekerdata(id:any){
    return this.http.get(`http://localhost:3000/api/jobseekeruv/jobseeker/${id}`)
  }
deleteApplication(id:any){
  return this.http.delete(`http://localhost:3000/api/applicationsuv/delete/${id}`)
}

verifyApplication(id:any){
  return this.http.put('http://localhost:3000/api/applicationsuv/verify/', {id})
}


download(id:any){
  return this.http.get(`http://localhost:3000/api/applicationsuv/download/${id}`)
}
deleteJob(id:any){
  return this.http.delete(`http://localhost:3000/api/verifiedjobs/deletejob/${id}`)
}
getToken(){
  return localStorage.getItem('token');
 }
 loggedIn(){
  return !!localStorage.getItem('token');
 }
 loggedOut(){
  return localStorage.removeItem('token');
 }
}
