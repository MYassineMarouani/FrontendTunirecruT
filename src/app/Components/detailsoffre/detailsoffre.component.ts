import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { OffreService } from 'src/app/Services/offre.service';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
  Offredetails: any = {};
  respone: any;
  private _id: string;
  err: any;

  constructor(private Offre:OffreService,public endpoint : EndpointService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Offre.getbyid(this._id).subscribe(
      res=>{
        this.respone = res
        this.Offredetails = this.respone;
        
      }
    );
    
  }
  modifieroffre() {
    let fd = new FormData();
    fd.append('Position', this.Offredetails.Position);
    fd.append('Description', this.Offredetails.Description);
    this.Offre.update(this._id,fd).subscribe(
      (data) => {
        console.log("modified", data);
        location.reload();
      },
      err => {
        this.err = err;
      })
  }

}
