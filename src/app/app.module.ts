import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchSnippetsComponent } from './Search/search-snippets/search-snippets.component';
import { ResultSearchSnippetsComponent } from './Search/result-search-snippets/result-search-snippets.component';
import { UserInformationsComponent } from './Users/user-informations/user-informations.component';
import { ProfilComponent } from './Users/profil/profil.component';
import { SnippetModule } from './Snippets/snippet/snippet.module';
import { MessageComponent } from './Shared/Messages/Component/message/message.component';

import { MessageService } from './Shared/Messages/Services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchSnippetsComponent,
    ResultSearchSnippetsComponent,
    UserInformationsComponent,
    ProfilComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnippetModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
