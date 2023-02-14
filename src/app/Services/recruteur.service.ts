import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  constructor(private router:Router,private http: HttpClient , private endpoint: EndpointService) { }
  login(recruteur:any) {
    return this.http.post(this.endpoint.url + 'Recruteur/login',recruteur)
  }
  register(Recruteurnew) {
    return this.http.post(this.endpoint.url + 'Recruteur/register',Recruteurnew)
  }
  getall(){
    return this.http.get(this.endpoint.url + 'Recruteur/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Recruteur/delete/'+id);

  }
  update(id: any, Recruteurnew: any){

    return this.http.put(this.endpoint.url + 'Recruteur/update/' + id , Recruteurnew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Recruteur/getbyid/'+ id);
  }
  loggedin() {
    return !!localStorage.getItem('token')
  }
  getRecruteurData() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    localStorage.setItem('id',decodedToken.recruteur.id);
    return decodedToken.subject;
  }
  
  logoutRecruteur() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
