import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CisgAppRoutingModule} from './cisg-app-routing.module';
import {CisgAppComponent} from './cisg-app.component';
import {AppNavComponent} from './widgets/app-nav/app-nav.component';
import {AppSideBarComponent} from "./widgets/app-side-bar/app-side-bar.component";
import {AppHomeComponent} from './pages/app-home/app-home.component';
import {AppSideBarItemComponent} from './widgets/app-side-bar/app-side-bar-item/app-side-bar-item.component';
import {TitleComponent} from './utils/title/title.component';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PdfViewerComponent} from './utils/pdf-viewer/pdf-viewer.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { LoaderComponent } from './utils/loader/loader.component';


@NgModule({
  declarations: [
    CisgAppComponent,
    AppNavComponent,
    AppSideBarComponent,
    AppHomeComponent,
    AppSideBarItemComponent,
    TitleComponent,
    PdfViewerComponent,
    LoaderComponent,
  ],
    exports: [
        TitleComponent,
        LoaderComponent,

    ],
  imports: [
    CommonModule,
    CisgAppRoutingModule,
    PdfViewerModule,


  ],
  providers: [
    AngularFirestore
  ]
})
export class CisgAppModule {
}
