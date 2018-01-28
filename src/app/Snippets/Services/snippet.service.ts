import { Injectable } from '@angular/core';
import { Snippet } from '../Model/Snippet';

import { SNIPPETS } from '../Mock/mock-snippets';

@Injectable()

export class SnippetService {

  constructor() { }

  getSnippets(): Snippet [] {
    return SNIPPETS;
  }

  getSnippet(id: Number): Snippet {
    return SNIPPETS.find(x => x.id === id);
  }

  addSnippet(snippet: Snippet): void {

  }

  updateSnippet(snippet: Snippet): void {
    // TODO
  }

  deleteSnippet(snippet: Snippet): void{
    // TODO
  }
}
