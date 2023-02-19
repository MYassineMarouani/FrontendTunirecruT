import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  respone: any;
  Recruteurdetails: any;

  constructor(private Recruter:RecruteurService,private router:Router) { }

  ngOnInit() {
    const id = localStorage.getItem('id');
    this.Recruter.getbyid(id).subscribe(
      res=>{
        this.respone = res
        this.Recruteurdetails = this.respone;   
      }
    );
  }

}
