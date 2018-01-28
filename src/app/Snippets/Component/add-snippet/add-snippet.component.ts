import { Component, OnInit } from '@angular/core';
import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';
import { Langages } from '../../Model/Langages';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})

export class AddSnippetComponent implements OnInit {

  langages: Langages[] = LANGAGES;
  snippet: Snippet;

  AddSnippet(title: string, keywords: string, langage: Langages, isPublic: boolean, codeSnippet: string): void {
    this.snippet.title = title;
    this.snippet.keywords = keywords;
    this.snippet.langage = langage;
    this.snippet.isPublic = isPublic;
    this.snippet.code = codeSnippet;

    // TODO appel API pour l'ajout
  }

  constructor() { }

  ngOnInit() {
  }
}
