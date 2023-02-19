import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-registercandidate',
  templateUrl: './registercandidate.component.html',
  styleUrls: ['./registercandidate.component.css']
})
export class RegistercandidateComponent implements OnInit {
  Candidatenew: any = {};
  file: any;
  file1: any;
  err: any;
  toastMessage: string;
  showToast: boolean;
  constructor(private formbuilder: FormBuilder, private Candidate: CandidateService, private router: Router) { }

  ngOnInit() {
  }
  select(e) {
    this.file = e.target.files[0];
  }
  select1(e1) {
    this.file1 = e1.target.files[0];
  }
  ajoutercandidate() {
    this.Candidatenew.lastname = "yass";
    let fd = new FormData();
    fd.append('CV', this.file1);
    fd.append('Image', this.file);
    fd.append('name', this.Candidatenew.name);
    fd.append('email', this.Candidatenew.email);
    fd.append('password', this.Candidatenew.password);
    this.Candidate.register(fd).subscribe(
      (data) => {
        console.log("registered succesfully", data);
       alert("registered succesully");
      },
      err => {
        this.err = err;
      })
  }

}
