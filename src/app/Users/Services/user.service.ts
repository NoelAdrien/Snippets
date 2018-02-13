import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { asEnumerable, AsEnumerable } from 'linq-es2015';

import { User } from '../Model/User';
import { USERS } from '../Mock/Users-mock';

@Injectable()
export class UserService {

  users: User[] = USERS;

  getUserById(id: number): Observable<User> {
    return of(asEnumerable(this.users).Where(x => x.id === id).FirstOrDefault());
  }

  updateUser(user: User): void {
    const id = this.users.findIndex(x => x.id === user.id);
    if (id > -1) {
      this.users[id] = user;
    }
  }

  constructor() { }

}
