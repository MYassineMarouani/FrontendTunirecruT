import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/Services/offre.service';

@Component({
  selector: 'app-ajouteroffre',
  templateUrl: './ajouteroffre.component.html',
  styleUrls: ['./ajouteroffre.component.css']
})
export class AjouteroffreComponent implements OnInit {
  file: any;
  NewOffer: any = {};
  err: any;

  constructor(private Offre:OffreService) { }

  ngOnInit() {
  }
  select(e) {
    this.file = e.target.files[0];
  }
  ajouteroffre() {
    let idRecruter = localStorage.getItem('id');
    let fd = new FormData();
    fd.append('idRecruter',idRecruter);
    fd.append('Banner', this.file);
    fd.append('Position', this.NewOffer.Position);
    fd.append('Description', this.NewOffer.Description);


    this.Offre.add(fd).subscribe(
      (data) => {
        console.log("registered succesfully", data);
       alert("registered succesully");
      },
      err => {
        this.err = err;
      })
  }

}
