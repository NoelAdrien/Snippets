import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { asEnumerable, AsEnumerable } from 'linq-es2015';

import { User } from '../Model/User';
import { USERS } from '../Mock/Users-mock';
import { last } from '@angular/router/src/utils/collection';

import { UserService } from '../Services/user.service';

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
    this.userService.getUserById(id).subscribe(userAPI => this.user = userAPI);
  }

  save(): void {
    this.userService.updateUser(this.user);
    this.back();
  }

  back(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

}
