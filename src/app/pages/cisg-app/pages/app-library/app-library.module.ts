import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppLibraryRoutingModule} from './app-library-routing.module';
import {AppLibraryComponent} from "./app-library.component";
import { AppLibraryFormComponent } from './app-library-form/app-library-form.component';
import {FileUploadModule} from "@iplab/ngx-file-upload";
import {CisgAppModule} from "../../cisg-app.module";
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    AppLibraryComponent,
    AppLibraryFormComponent
  ],
    imports: [
        CommonModule,
        AppLibraryRoutingModule,
        FileUploadModule,
        CisgAppModule,
        FormsModule,
        InfiniteScrollModule,
    ]
})
export class AppLibraryModule {
}
