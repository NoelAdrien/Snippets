import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { SnippetModule } from './Snippets/snippet/snippet.module';

const routes: Routes = [
  { path: '', redirectTo: '/Snippets/Search', pathMatch: 'full' },
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
