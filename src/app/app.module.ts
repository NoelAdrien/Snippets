import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchSnippetsComponent } from './Search/search-snippets/search-snippets.component';
import { ResultSearchSnippetsComponent } from './Search/result-search-snippets/result-search-snippets.component';
import { UserInformationsComponent } from './Users/user-informations/user-informations.component';
import { ProfilComponent } from './Users/profil/profil.component';
import { SnippetComponent } from './Snippets/snippet/snippet.component';
import { AddSnippetComponent } from './Snippets/add-snippet/add-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSnippetsComponent,
    ResultSearchSnippetsComponent,
    UserInformationsComponent,
    ProfilComponent,
    SnippetComponent,
    AddSnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
