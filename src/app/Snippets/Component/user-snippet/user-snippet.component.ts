import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router, private snippetService: SnippetService) { }

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets(): void {
      this.snippetService.getSnippets().subscribe(snippetsApi => this.snippets = snippetsApi);
  }

  editSnippet(snippet: Snippet): void {
    this.route.navigate([`/Snippets/Edit/${snippet.id}`]);
  }

  deleteSnippet(snippet: Snippet): void {
    const index = this.snippets.findIndex(x => x.id === snippet.id);
    if (index > -1) {
      this.snippets.splice(index, 1);
    }
  }

  RedirectAdd(): void {
    this.route.navigate(['Snippets/Add']);
  }

}
