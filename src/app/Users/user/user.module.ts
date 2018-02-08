import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { ProfilComponent } from '../profil/profil.component';
// import { UserInformationsComponent } from '../user-informations/user-informations.component';

const userRoutes: Routes = [
  { path: 'Profil/:id', component: ProfilComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfilComponent,
    // UserInformationsComponent
  ]
})
export class UserModule { }
