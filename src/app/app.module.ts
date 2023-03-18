import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {AuthGuard} from "@angular/fire/auth-guard";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StyleClassModule} from 'primeng/styleclass';
import {HttpClientModule} from "@angular/common/http";
import {FileUploadModule} from "@iplab/ngx-file-upload";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AppRoutingModule,
    StyleClassModule,
    FileUploadModule,

  ],
  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule {
}

