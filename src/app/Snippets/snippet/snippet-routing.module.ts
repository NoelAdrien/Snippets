import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSnippetComponent } from '../../Snippets/Component/user-snippet/user-snippet.component';
import { AddSnippetComponent } from '../../Snippets/Component/add-snippet/add-snippet.component';
import { SnippetDetailsComponent } from '../../Snippets/Component/snippet-details/snippet-details.component';

const snippetRoutes: Routes = [
  { path: 'Snippets', component: UserSnippetComponent },
  { path: 'Snippets/Add', component: AddSnippetComponent },
  { path: 'Snippets/Edit/:id', component: SnippetDetailsComponent },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(snippetRoutes)
  ]

})
export class SnippetRoutingModule { }
