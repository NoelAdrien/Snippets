import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { SearchSnippetsComponent } from './Search/search-snippets/search-snippets.component';
import { SnippetModule } from './Snippets/snippet/snippet.module';

const routes: Routes = [
  { path: '', redirectTo: '/Search', pathMatch: 'full' },
  { path: 'Search', component: SearchSnippetsComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    SnippetModule,
    [
      RouterModule.forRoot(routes, {enableTracing: true})
    ],
  ],
  declarations: []
})

export class AppRoutingModule { }
