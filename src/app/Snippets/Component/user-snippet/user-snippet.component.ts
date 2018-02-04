import { Component, OnInit } from '@angular/core';

import { SnippetService } from '../../Services/snippet.service';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';

@Component({
  selector: 'app-user-snippet',
  templateUrl: './user-snippet.component.html',
  styleUrls: ['./user-snippet.component.css']
})

export class UserSnippetComponent implements OnInit {

  snippets: Snippet [];

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets(): void {
      this.snippetService.getSnippets().subscribe(snippetsApi => this.snippets = snippetsApi);
  }

  deleteSnippet(snippet: Snippet): void {
    this.snippetService.deleteSnippet(snippet);
    this.snippetService.getSnippets().subscribe(snippetsAPI => this.snippets = snippetsAPI);
  }

}
