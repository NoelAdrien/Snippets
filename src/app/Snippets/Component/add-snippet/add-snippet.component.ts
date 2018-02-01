import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';
import { Langages } from '../../Model/Langages';

import { SnippetService } from '../../Services/snippet.service';
import { SnippetModule } from '../../snippet/snippet.module';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})

export class AddSnippetComponent implements OnInit {

  langages: Langages[] = LANGAGES;
  snippet: Snippet;
  snippets: Snippet[];

  AddSnippet(title: string, keywords: string, langage: Langages, isPublic: boolean, codeSnippet: string): void {

    const snippet = new Snippet();
    snippet.id = this.getMaxSnippetsId();
    snippet.title = title;
    snippet.keywords = keywords;
    snippet.langage = langage;
    snippet.isPublic = isPublic;
    snippet.code = codeSnippet;

    this.snippetService.addSnippet(snippet);
    this.router.navigate(['/Snippets']);
  }

  getMaxSnippetsId(): number {
    this.snippetService.getSnippets().subscribe(snippetsAPI => this.snippets = snippetsAPI);

    let maxId;
    // Récupération maxID
    Math.max.apply(Math, this.snippets.map(function (snippetMaxId) {
      maxId = +snippetMaxId.id;
    }));

    return maxId + 1;
  }
  constructor(private snippetService: SnippetService, private router: Router) { }

  ngOnInit() {
  }
}
