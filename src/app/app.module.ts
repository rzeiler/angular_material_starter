import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import 'hammerjs';
/**/
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
/* firebase */
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MainNavComponent, InfoDialog } from './main-nav/main-nav.component';
import { AddWordComponent } from './add-word/add-word.component';

@NgModule({
  exports: [
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModules { }

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    InfoDialog,
    AddWordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MaterialModules
  ],
  entryComponents: [InfoDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
