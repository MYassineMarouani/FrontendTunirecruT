import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/Services/candidate.service';

@Component({
  selector: 'app-entermail',
  templateUrl: './entermail.component.html',
  styleUrls: ['./entermail.component.css']
})
export class EntermailComponent implements OnInit {
  email: string;
  constructor(private Candidate:CandidateService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.Candidate.resetPassword(this.email).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

}
