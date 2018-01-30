import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Snippet } from '../Model/Snippet';

import { SNIPPETS } from '../Mock/mock-snippets';

@Injectable()

export class SnippetService {

  constructor() { }

  getSnippets(): Observable<Snippet []> {
    return of(SNIPPETS);
  }

  getSnippet(id: Number): Observable<Snippet> {
    return of(SNIPPETS.find(x => x.id === id));
  }

  addSnippet(snippet: Snippet): void {

  }

  updateSnippet(snippet: Snippet): void {
    // TODO
  }

  deleteSnippet(snippet: Snippet): void {
    // TODO
  }
}
