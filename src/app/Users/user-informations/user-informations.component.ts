import { Component, OnInit } from '@angular/core';

import { User } from '../../Model/User';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})

export class UserInformationsComponent implements OnInit {

  user: User = {
    id: 1,
    firstName: 'Adrien',
    lastName: 'Noel',
    email: 'adrien.noel01@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
