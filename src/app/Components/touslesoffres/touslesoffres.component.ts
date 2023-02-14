import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { OffreService } from 'src/app/Services/offre.service';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-touslesoffres',
  templateUrl: './touslesoffres.component.html',
  styleUrls: ['./touslesoffres.component.css']
})
export class TouslesoffresComponent implements OnInit {
  private _id: string;
  respone: any;
  Offredetails: any;

  constructor(public endpoint : EndpointService,private Recruteur: RecruteurService, private router: Router,public Offre:OffreService) { }

  ngOnInit() {
    this._id = localStorage.getItem('id');
    this.Offre.getOffresbyidrecruter(this._id).subscribe(
      res=>{
        this.respone = res
        this.Offredetails = this.respone;
        console.log(this.Offredetails);
        
      }
    );
  
  }

}
