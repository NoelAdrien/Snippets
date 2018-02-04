import { Component, OnInit } from '@angular/core';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';
import { Langages } from '../../Model/Langages';

import { SnippetService } from '../../Services/snippet.service';

import { asEnumerable, AsEnumerable } from 'linq-es2015';

@Component({
  selector: 'app-search-snippets',
  templateUrl: './search-snippets.component.html',
  styleUrls: ['./search-snippets.component.css']
})

export class SearchSnippetsComponent implements OnInit {

  constructor(private snippetService: SnippetService) { }

  langages: Langages[] = LANGAGES;
  snippets: Snippet[];

  ngOnInit() {
  }

  searchSnippets(keyword: string, langageId: number): void {
    const id = Number(langageId);
    this.snippetService.searchSnippets(id, keyword).subscribe(snippetsAPI => this.snippets = snippetsAPI);
  }

}
