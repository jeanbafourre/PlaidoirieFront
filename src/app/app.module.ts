import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PostComponent } from './post/post.component';
import { JusticiableComponent } from './justiciable/justiciable.component';
import { AvocatComponent } from './avocat/avocat.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PieceComponent } from './piece/piece.component';
import { UserComponent } from './user/user.component';
import { CompteComponent } from './compte/compte.component';
import { DossierComponent } from './dossier/dossier.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    PostComponent,
    JusticiableComponent,
    AvocatComponent,
    CommentaireComponent,
    PieceComponent,
    UserComponent,
    CompteComponent,
    DossierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
