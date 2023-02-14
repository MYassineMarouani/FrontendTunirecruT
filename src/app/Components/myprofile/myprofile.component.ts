import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  private _id: string;
  Recruteurdetails: any;
  respone: any;
  modifierRecruteurinfoform : FormGroup;
  file: any;
  err: any;
  constructor(public endpoint : EndpointService,private Recruteur: RecruteurService, private router: Router) { }

  ngOnInit() {
    this._id = localStorage.getItem('id');
    this.Recruteur.getbyid(this._id).subscribe(
      res=>{
        this.respone = res
        this.Recruteurdetails = this.respone;
        
      }
    );
    
  }
  select(e) {
    this.file = e.target.files[0];
  }
  modifierrecruteur() {
    let fd = new FormData();
    fd.append('Image', this.file);
    fd.append('name', this.Recruteurdetails.name);
    fd.append('email', this.Recruteurdetails.email);
    fd.append('password', this.Recruteurdetails.password);
    fd.append('Company', this.Recruteurdetails.Company);
    fd.append('lastname', this.Recruteurdetails.lastname);
    this.Recruteur.update(this._id,fd).subscribe(
      (data) => {
        console.log("modified", data);
        location.reload();
      },
      err => {
        this.err = err;
      })
  }

}
