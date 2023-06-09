import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLibraryComponent} from "./app-library.component";
import {AppLibraryFormComponent} from "./app-library-form/app-library-form.component";
import {PdfViewerComponent} from "../../utils/pdf-viewer/pdf-viewer.component";
import {AdminGuard} from "../../../../guards/admin.guard";

const routes: Routes = [

  {
    path: '',
    component: AppLibraryComponent
  },
  {
    path: 'add',
    component: AppLibraryFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'book/:id',
    component: PdfViewerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLibraryRoutingModule {
}
