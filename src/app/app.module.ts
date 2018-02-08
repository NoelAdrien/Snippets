import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserInformationsComponent } from './Users/user-informations/user-informations.component';
// import { ProfilComponent } from './Users/profil/profil.component';

import { SnippetModule } from './Snippets/snippet/snippet.module';
import { UserModule } from './Users/user/user.module';

import { MessageComponent } from './Shared/Messages/Component/message/message.component';
import { MessageService } from './Shared/Messages/Services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInformationsComponent,
    // ProfilComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnippetModule,
    UserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
