import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';

@Component({
  selector: 'app-user-snippet',
  templateUrl: './user-snippet.component.html',
  styleUrls: ['./user-snippet.component.css']
})

export class UserSnippetComponent implements OnInit {

  snippets: Snippet [] = [
    {
      id: 1, title: 'Create angular class', keywords: 'angular class',
      langage: LANGAGES.find(x => x.code === 'ang'), code: 'code snippet', isPublic: false
    },
    {
      id: 2, title: 'Javascript class', keywords: 'javascript',
      langage: LANGAGES.find(x => x.code === 'js'), code: 'js code snippet', isPublic: true
    }
  ];

  deleteSnippet(snippet: Snippet): void {
    const index = this.snippets.findIndex(x => x.id === snippet.id);
    if (index > -1) {
      this.snippets.splice(index, 1);
    }
  }

  editSnippet(snippet: Snippet): void {
    this.route.navigate([`/Snippets/Edit/${snippet.id}`]);
  }

  RedirectAdd(): void {
    this.route.navigate(['Snippets/Add']);
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }
}
