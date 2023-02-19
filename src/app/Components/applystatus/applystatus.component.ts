import { Component, OnInit } from '@angular/core';
import { ApplyService } from 'src/app/Services/apply.service';
import { OffreService } from 'src/app/Services/offre.service';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-applystatus',
  templateUrl: './applystatus.component.html',
  styleUrls: ['./applystatus.component.css']
})
export class ApplystatusComponent implements OnInit {
  private _id: string;
  respone: Object;
  Applydetails: any[] = []; // Initialize as an empty array

  constructor(private Apply:ApplyService,private Recruteur:RecruteurService,private Offer:OffreService) { }

  ngOnInit() {
    this._id = localStorage.getItem('id');
    this.Apply.getbyidCandidate(this._id).subscribe(
      res => {
        this.respone = res;
        this.Applydetails = this.respone as any[]; // Cast respone to an array
        console.log(this.Applydetails);
        for(let i=0; i<this.Applydetails.length; i++) {
          const idRecruter = this.Applydetails[i].idRecruter;
          this.Recruteur.getbyid(idRecruter).subscribe(
            (res: any) => {
              this.Applydetails[i].Recruteurcompany = res.Company;
            }
          );
        }
        for(let j=0; j<this.Applydetails.length; j++) {
          const idOffer = this.Applydetails[j].idOffer;
          this.Offer.getbyid(idOffer).subscribe(
            (res: any) => {
              this.Applydetails[j].OfferPosition = res.Position;
              console.log(res.Position);
            }
          );
        }
      }
    );
  }

}
