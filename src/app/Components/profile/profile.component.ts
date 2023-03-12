import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';
import { EndpointService } from 'src/app/Services/endpoint.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _id: string;
  Candidatedetails: any;
  respone: Object;
  file1: any;
  file: any;
  err: any;

  constructor(public endpoint : EndpointService,private Candidate: CandidateService, private router: Router) { }

  ngOnInit() {
    this._id = localStorage.getItem('id');
    this.Candidate.getbyid(this._id).subscribe(
      res=>{
        this.respone = res
        this.Candidatedetails = this.respone;
        
      }
    );
  }
  select(e) {
    this.file = e.target.files[0];
  }
  select1(e1) {
    this.file1 = e1.target.files[0];
  }
  modifiercandidate() {
    let fd = new FormData();
    fd.append('Image', this.file);
    fd.append('CV', this.file1);
    fd.append('name', this.Candidatedetails.name);
    fd.append('email', this.Candidatedetails.email);
    fd.append('Telephone', this.Candidatedetails.Telephone);
    fd.append('Company', this.Candidatedetails.Age);
    fd.append('lastname', this.Candidatedetails.lastname);
    this.Candidate.update(this._id,fd).subscribe(
      (data) => {
        console.log("modified", data);
        location.reload();
      },
      err => {
        this.err = err;
      })
  }

}
