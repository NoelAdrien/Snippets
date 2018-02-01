import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Snippet } from '../Model/Snippet';

import { SNIPPETS } from '../Mock/mock-snippets';

import { MessageService } from '../../Shared/Messages/Services/message.service';

@Injectable()

export class SnippetService {

  snippets: Snippet[] = SNIPPETS;

  constructor(private messageService: MessageService) { }

  getSnippets(): Observable<Snippet[]> {
    return of(this.snippets);
  }

  getSnippet(id: Number): Observable<Snippet> {
    return of(this.snippets.find(x => x.id === id));
  }

  addSnippet(snippet: Snippet): void {
    this.snippets.push(snippet);
    this.messageService.Add(`Snippet Added  ${snippet.id}`, 'Success');
  }

  updateSnippet(snippet: Snippet): void {
    const index = this.snippets.findIndex(x => x.id === snippet.id);
    if (index > -1) {
      this.snippets[index] = snippet;
    }
    this.messageService.Add(`Snippet Updated  ${snippet.id}`, 'Success');
  }

  deleteSnippet(snippet: Snippet): void {
    const index = this.snippets.findIndex(x => x.id === snippet.id);
    if (index > -1) {
      this.snippets.splice(index, 1);
    }
    this.messageService.Add(`Snippet Deleted`, 'Success');
  }
}
