import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { LogincompanyComponent } from './Components/logincompany/logincompany.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { RecruteurdashboardComponent } from './Components/recruteurdashboard/recruteurdashboard.component';
import { RegistercompanyComponent } from './Components/registercompany/registercompany.component';
import { TouslesoffresComponent } from './Components/touslesoffres/touslesoffres.component';


const routes: Routes = [
  { path: '' , redirectTo: '/Welcome' , pathMatch:'full' },
  {path:'Welcome',component:LandingComponent},
  {path:'RegisterCompany',component:RegistercompanyComponent},
  {path:'LoginCompany',component:LogincompanyComponent},
  {path:'Recruteurdashboard',component:RecruteurdashboardComponent , children : [
    {path:'myprofile',component:MyprofileComponent},
    {path:'touslesoffres',component:TouslesoffresComponent},
    {path:'',component:TouslesoffresComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
