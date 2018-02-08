import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { asEnumerable, AsEnumerable } from 'linq-es2015';

import { User } from '../Model/User';
import { USERS } from '../Mock/Users-mock';

const users: User[] = USERS;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {

  @Input() user: User;

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = asEnumerable(users).Where(x => x.id === id).FirstOrDefault();
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

}
