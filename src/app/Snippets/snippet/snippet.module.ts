import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { UserSnippetComponent } from '../../Snippets/Component/user-snippet/user-snippet.component';
import { AddSnippetComponent } from '../../Snippets/Component/add-snippet/add-snippet.component';
import { SnippetDetailsComponent } from '../../Snippets/Component/snippet-details/snippet-details.component';

import { SnippetService } from '../Services/snippet.service';

const snippetRoutes: Routes = [
  { path: 'Snippets', component: UserSnippetComponent },
  { path: 'Snippets/Add', component: AddSnippetComponent },
  { path: 'Snippets/Edit/:id', component: SnippetDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(snippetRoutes)
  ],
  exports: [],
  declarations: [
    UserSnippetComponent,
    AddSnippetComponent,
    SnippetDetailsComponent
  ],
  providers: [SnippetService]
})
export class SnippetModule { }
