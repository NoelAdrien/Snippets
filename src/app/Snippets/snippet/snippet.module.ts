import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserSnippetComponent } from '../../Snippets/Component/user-snippet/user-snippet.component';
import { SnippetRoutingModule } from './snippet-routing.module';
import { AddSnippetComponent } from '../../Snippets/Component/add-snippet/add-snippet.component';
import { SnippetDetailsComponent } from '../../Snippets/Component/snippet-details/snippet-details.component';

import { SnippetService } from '../Services/snippet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SnippetRoutingModule,
    UserSnippetComponent,
    AddSnippetComponent,
    SnippetDetailsComponent
  ],
  declarations: [
    UserSnippetComponent,
    AddSnippetComponent,
    SnippetDetailsComponent
  ],
  providers: [SnippetService]
})
export class SnippetModule { }
