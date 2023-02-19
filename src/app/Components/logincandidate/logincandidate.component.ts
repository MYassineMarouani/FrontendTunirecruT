import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-logincandidate',
  templateUrl: './logincandidate.component.html',
  styleUrls: ['./logincandidate.component.css']
})
export class LogincandidateComponent implements OnInit {
  userdata: any;
  idconnected: any;
  Candidatedetails : any;
  constructor(private router: Router, private Candidate: CandidateService) { }
  respone : any;
  xdata = {
    email: '',
    password: ''
  }
  ngOnInit() {
  }
  token: any;
  login() {
    this.Candidate.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.userdata = this.Candidate.getCandidateData();
        var id = localStorage.getItem('id');
        this.Candidate.getbyid(id).subscribe(
          res=>{
            this.respone = res
            this.Candidatedetails = this.respone;
            console.log(this.Candidatedetails)
              this.router.navigate(['/Candidatedashboard']);
              
            
          }
        );     
      },
      err => {
        console.log(err);

      }

    );
  
  }

}
