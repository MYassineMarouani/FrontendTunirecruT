import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  constructor(private router:Router,private http: HttpClient , private endpoint: EndpointService) { }
  add(Applynew) {
    return this.http.post(this.endpoint.url + 'Apply/add',Applynew)
  }
  getbyidoffer(id: any){
    return this.http.get(this.endpoint.url + 'Apply/getbyidOffer/'+ id);
  }
  getbyidCandidate(id: any){
    return this.http.get(this.endpoint.url + 'Apply/getbyidCandidate/'+ id);
  }
  update(id: any, Offrenew: any){

    return this.http.put(this.endpoint.url + 'Apply/update/' + id , Offrenew);

  }
}
