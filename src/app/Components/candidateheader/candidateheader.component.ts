import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';
import { EndpointService } from 'src/app/Services/endpoint.service';

@Component({
  selector: 'app-candidateheader',
  templateUrl: './candidateheader.component.html',
  styleUrls: ['./candidateheader.component.css']
})
export class CandidateheaderComponent implements OnInit {
  Candidatedetails: any;
  private _id: string;
  respone: any;

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

}
