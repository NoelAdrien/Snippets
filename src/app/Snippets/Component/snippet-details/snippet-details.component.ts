import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SnippetService } from '../../Services/snippet.service';

import { Snippet } from '../../Model/Snippet';
import { LANGAGES } from '../../Mock/mock-langages';
import { Langages } from '../../Model/Langages';

@Component({
  selector: 'app-snippet-details',
  templateUrl: './snippet-details.component.html',
  styleUrls: ['./snippet-details.component.css']
})

export class SnippetDetailsComponent implements OnInit {

  langages: Langages[] = LANGAGES;

  @Input() snippet: Snippet;

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSnippet();
  }

  getSnippet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`get snippet id : ${{id}}`);
    this.snippetService.getSnippet(id).subscribe(snippetApi => this.snippet = snippetApi);
  }

  saveSnippet(): void {
    this.snippetService.updateSnippet(this.snippet);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
