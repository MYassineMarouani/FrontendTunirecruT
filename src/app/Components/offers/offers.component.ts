import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from 'src/app/Services/apply.service';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { OffreService } from 'src/app/Services/offre.service';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  Offredetails: any;
  response: any[];
  searchPosition: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number;
  pages: number[] = [];
  filteredOffers: any[];

  constructor(public endpoint: EndpointService, private Recruteur: RecruteurService, private router: Router, public Offre: OffreService,private Apply:ApplyService) { }

  ngOnInit() {
    this.Offre.getall().subscribe(
      (res: any[]) => {
        this.response = res;
        this.Offredetails = this.response;
        this.filteredOffers = this.Offredetails;
        this.totalPages = Math.ceil(this.filteredOffers.length / this.itemsPerPage);
        this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        for(let i=0; i<this.filteredOffers.length; i++) {
          const idRecruter = this.filteredOffers[i].idRecruter;
          this.Recruteur.getbyid(idRecruter).subscribe(
            (res: any) => {
              this.filteredOffers[i].RecruteurName = res.name;
              this.filteredOffers[i].Recruteurcompany = res.Company;
            }
          );
        }
      }
    );
    
  }

  filterOffers() {
    if (this.searchPosition === '') {
      this.filteredOffers = this.Offredetails;
    } else {
      this.filteredOffers = this.Offredetails.filter((offer) =>
        offer.Position.toLowerCase().includes(this.searchPosition.toLowerCase())
      );
    }
    this.totalPages = Math.ceil(this.filteredOffers.length / this.itemsPerPage);
    this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    this.currentPage = 1;
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get visibleOffers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredOffers.slice(start, end);
  }
  Applynow(idRecruter: string, _id: string) {
    let newApply = {
      idRecruter: idRecruter,
      idCandidate: localStorage.getItem('id'),
      idOffer : _id ,
    };
    this.Apply.add(newApply).subscribe(response => {
      console.log(response);
      // Do something after the apply is added
    }, error => {
      console.log(error);
      // Handle the error
    });
  }
  
  
}