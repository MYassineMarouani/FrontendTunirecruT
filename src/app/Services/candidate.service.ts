import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private resetPasswordUrl = '/candidates/reset-password';

  constructor(private router:Router,private http: HttpClient , private endpoint: EndpointService) { }
  login(candidate:any) {
    return this.http.post(this.endpoint.url + 'Candidate/login',candidate)
  }
  register(Candidatenew) {
    return this.http.post(this.endpoint.url + 'Candidate/register',Candidatenew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Candidate/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Candidate/delete/'+id);

  }
  update(id: any, Candidatenew: any){

    return this.http.put(this.endpoint.url + 'Candidate/update/' + id , Candidatenew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Candidate/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getCandidateData() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('id',decodedToken.candidateId);
    return decodedToken.subject;
  }
  
  logoutRecruteur() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  resetPassword(email: string) {
    return this.http.post(this.endpoint.url + 'Candidate/reset-password/', { email });
  }
  

  
}
