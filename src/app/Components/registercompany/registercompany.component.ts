import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/Services/recruteur.service';
@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css']
})
export class RegistercompanyComponent implements OnInit {
  Recruteurnew: any = {};
  file: any;
  err: any;
  toastMessage: string;
  showToast: boolean;


  constructor(private formbuilder: FormBuilder, private Recruteur: RecruteurService, private router: Router) { }

  ngOnInit() {
  }
  select(e) {
    this.file = e.target.files[0];
  }
  ajouterrecruteur() {
    this.Recruteurnew.lastname = "yass";
    let fd = new FormData();
    fd.append('Image', this.file);
    fd.append('name', this.Recruteurnew.name);
    fd.append('email', this.Recruteurnew.email);
    fd.append('password', this.Recruteurnew.password);
    fd.append('Company', this.Recruteurnew.Company);
    fd.append('lastname', this.Recruteurnew.lastname);
    this.Recruteur.register(fd).subscribe(
      (data) => {
        console.log("registered succesfully", data);
       alert("registered succesully");
      },
      err => {
        this.err = err;
      })
  }



}
