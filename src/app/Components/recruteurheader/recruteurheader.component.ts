import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-recruteurheader',
  templateUrl: './recruteurheader.component.html',
  styleUrls: ['./recruteurheader.component.css']
})
export class RecruteurheaderComponent implements OnInit {
  private _id: string;
  respone: Object;
  Recruteurdetails: Object;

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

}
