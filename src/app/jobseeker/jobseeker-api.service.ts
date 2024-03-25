import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobseekerApiService {

  constructor(private http:HttpClient) { }
 
  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjobs')
  }
  addjobapplication(data:any){
    return this.http.post('http://localhost:3000/api/applicationsuv/upload',data)
  }
  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/applicatiodata')
  }

  // to fetch data of a single  
  getsinglejobseekerdata(id:any){
  return this.http.get(`http://localhost:3000/api/jobseekeruv/jobseeker/${id}`)
}
jobseekergeneraldata(data:any,id:any){
  return this.http.put(`http://localhost:3000/api/jobseekeruv/generaldata`,{data,id})
  
}
jobseekereducation(data:any, id:any){
  return this.http.put(`http://localhost:3000/api/jobseekeruv/jobseekereducation`,{data,id})
}
jobseekerexperience(data:any, id:any){
  return this.http.put(`http://localhost:3000/api/jobseekeruv/jobseekerexperience`,{data,id})
}
jobseekerexperienceremove(id:any){
  return this.http.delete(`http://localhost:3000/api/jobseekeruv/deleteexperience/${id}`)
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

