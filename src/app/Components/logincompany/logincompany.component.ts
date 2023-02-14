import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/Services/recruteur.service';

@Component({
  selector: 'app-logincompany',
  templateUrl: './logincompany.component.html',
  styleUrls: ['./logincompany.component.css']
})
export class LogincompanyComponent implements OnInit {
  userdata: any;
  idconnected: any;
  Recruteurdetails : any;
  constructor(private router: Router, private Recruteur: RecruteurService) { }
  respone : any;
  xdata = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }
  token: any;
  login() {
    this.Recruteur.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.userdata = this.Recruteur.getRecruteurData();
        var id = localStorage.getItem('id');
        this.Recruteur.getbyid(id).subscribe(
          res=>{
            this.respone = res
            this.Recruteurdetails = this.respone;
            console.log(this.Recruteurdetails)
            if (this.Recruteurdetails.Role==2) {
              this.router.navigate(['/Recruteurdashboard']);
            }
          }
        );     
      },
      err => {
        console.log(err);

      }

    );
  
  }
  loginrecruteur() {
    this.Recruteur.login(this.xdata).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        this.router.navigate(['/Recruteurdashbaord']);
      },
      err => {
        console.log(err);

      }

    );

  }

}
