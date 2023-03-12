import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyService } from 'src/app/Services/apply.service';
import { CandidateService } from 'src/app/Services/candidate.service';
import { EndpointService } from 'src/app/Services/endpoint.service';
import { OffreService } from 'src/app/Services/offre.service';

@Component({
  selector: 'app-allappliers',
  templateUrl: './allappliers.component.html',
  styleUrls: ['./allappliers.component.css']
})
export class AllappliersComponent implements OnInit {
  private _id: string;
  respone: Object;
  Appliesdetails: Object;
  offerdetails: any;
  respone1: Object;
  err1: any;

  constructor(private Candidate:CandidateService,private Offer:OffreService,private Apply:ApplyService,public endpoint : EndpointService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.Apply.getbyidoffer(this._id).subscribe(
      res=>{
        this.respone = res
        this.Appliesdetails = this.respone;
        if (Array.isArray(this.Appliesdetails)) {
          for(let i=0; i<this.Appliesdetails.length; i++) {
            const idCandidate = this.Appliesdetails[i].idCandidate;
            console.log(idCandidate);
            this.Candidate.getbyid(idCandidate).subscribe(
              (res: any) => {
               
                this.Appliesdetails[i].name = res.name ;
                this.Appliesdetails[i].lastname = res.lastname ;
                this.Appliesdetails[i].CV = res.CV ;
                console.log(res.CV)
              }
            );
          }
        }
      }
    );
    this.Offer.getbyid(this._id).subscribe(
      res=>{
        this.respone1 = res
        this.offerdetails = this.respone1;
  
      }
    );
  }
  viewCV(cvName: string): void {
    let fileUrl = this.endpoint.url + '/getCV/' + cvName;
    window.open(fileUrl, '_blank');
  }
  UpdateStatus(selectedStatus: string, id:String) {
    let fd = {
      Etat : selectedStatus
    }
    console.log(fd)
    this.Apply.update(id,fd).subscribe(
      (data) => {
        console.log("modified", data);
      },
      err => {
        this.err1 = err;
      })
}

  
  

}
