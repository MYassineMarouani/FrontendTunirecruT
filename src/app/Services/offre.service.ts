import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient , private endpoint: EndpointService) { }
  add(Offrenew) {
    return this.http.post(this.endpoint.url + 'Offre/add',Offrenew)
  }
  getOffresbyidrecruter (id) {
    return this.http.get(this.endpoint.url+'offre/getbyidrecruter/'+id);

  }
  getall(){
    return this.http.get(this.endpoint.url + 'Offre/getall');
  }
  delete(id:any) {
    return this.http.delete(this.endpoint.url+'Offre/delete/'+id);

  }
  update(id: any, Offrenew: any){

    return this.http.put(this.endpoint.url + 'Offre/update/' + id , Offrenew);

  }
  getbyid(id: any){
    return this.http.get(this.endpoint.url + 'Offre/getbyid/'+ id);
  }
}
