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
  filteredOffredetails: any;
  searchTerm: string;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number;

  constructor(public endpoint: EndpointService, private Recruteur: RecruteurService, private router: Router, public Offre: OffreService) { }

  ngOnInit() {
    this._id = localStorage.getItem('id');
    this.Offre.getOffresbyidrecruter(this._id).subscribe(
      res => {
        this.respone = res
        this.Offredetails = this.respone;
        this.filteredOffredetails = this.Offredetails;
        console.log(this.Offredetails);
      }
    );
  }

  search() {
    if (this.searchTerm) {
      this.filteredOffredetails = this.Offredetails.filter((offre: any) =>
        offre.Position.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredOffredetails = this.Offredetails;
    }
  }
  get pagedOffredetails(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredOffredetails.slice(startIndex, endIndex);
  }
  delete(id: any) {
    if (confirm('Are you sure you want to delete this offer?')) {
      this.Offre.delete(id).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  

}
