import { Component, OnInit } from '@angular/core';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})

export class SnippetComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
