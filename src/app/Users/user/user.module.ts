import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProfilComponent } from '../profil/profil.component';
import { UserService } from '../Services/user.service';

const userRoutes: Routes = [
  { path: 'Profil/:id', component: ProfilComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfilComponent,
    // UserInformationsComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
