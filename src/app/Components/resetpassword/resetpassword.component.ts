import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { CandidateService } from 'src/app/Services/candidate.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  token: string;
  Candidatedetails: any
  err: any;
  constructor(private route: ActivatedRoute, private Candidate: CandidateService) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    const decodedToken = JSON.parse(atob(this.token.split('.')[1]));
    let id = decodedToken.id;
    console.log(id);
    localStorage.setItem('idreset', id);


  }
  modifiercandidate() {
    let fd = new FormData();
   fd.append('password', this.Candidatedetails.password);
   console.log(fd);
  //  let idreset =  localStorage.getItem('idreset');
  //   this.Candidate.update(idreset, fd).subscribe(
  //     (data) => {
  //       console.log("modified", data);
  //       location.reload();
  //     },
  //     err => {
  //       this.err = err;
  //     })
  }

}
