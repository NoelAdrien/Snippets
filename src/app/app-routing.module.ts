import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { SnippetComponent } from './Snippets/snippet/snippet.component';
import { SearchSnippetsComponent } from './Search/search-snippets/search-snippets.component';
import { AddSnippetComponent } from './Snippets/add-snippet/add-snippet.component';

const routes: Routes = [
  { path: '', redirectTo: '/Snippets', pathMatch: 'full' },
  { path: 'Snippets', component: SnippetComponent },
  { path: 'Search', component: SearchSnippetsComponent },
  { path: 'AddSnippet', component: AddSnippetComponent },
];

@NgModule({

  exports: [RouterModule],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
  ],
  declarations: []
})

export class AppRoutingModule { }
