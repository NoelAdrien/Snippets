import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { asEnumerable, AsEnumerable } from 'linq-es2015';

import { Injectable } from '@angular/core';
import { Snippet } from '../Model/Snippet';

import { SNIPPETS } from '../Mock/mock-snippets';

import { MessageService } from '../../Shared/Messages/Services/message.service';
import { Langages } from '../Model/Langages';

@Injectable()

export class SnippetService {

  snippets: Snippet[] = SNIPPETS;
  searchSnip: Snippet[];

  constructor(private messageService: MessageService) { }

  getSnippets(): Observable<Snippet[]> {
    return of(this.snippets);
  }

  getSnippet(id: Number): Observable<Snippet> {
    return of(this.snippets.find(x => x.id === id));
  }

  searchSnippets(langageId: number, keywords: string): Observable<Snippet[]> {

    if (!keywords.trim() && typeof (langageId) === 'undefined') {
      return of([]);
    } else {

      this.getSnippets().subscribe(snippets => this.searchSnip = snippets);

      this.searchSnip = this.searchSnip.filter(x => x.isPublic);
      this.searchSnip = this.searchSnip.filter(x => x.langage.id === langageId);

      if (keywords.trim() !== '') {
        this.searchSnip = this.searchSnip.filter(x => x.keywords.includes(keywords));
      }

      return of(this.searchSnip);
    }
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
