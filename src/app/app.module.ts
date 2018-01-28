import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SnippetRoutingModule } from './Snippets/snippet/snippet-routing.module';

import { AppComponent } from './app.component';
import { SearchSnippetsComponent } from './Search/search-snippets/search-snippets.component';
import { ResultSearchSnippetsComponent } from './Search/result-search-snippets/result-search-snippets.component';
import { UserInformationsComponent } from './Users/user-informations/user-informations.component';
import { ProfilComponent } from './Users/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSnippetsComponent,
    ResultSearchSnippetsComponent,
    UserInformationsComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnippetRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
