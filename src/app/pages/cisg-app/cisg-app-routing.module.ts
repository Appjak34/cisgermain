import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CisgAppComponent} from "./cisg-app.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {AuthGuard} from "../../guards/auth.guard";
import {AppHomeComponent} from "./pages/app-home/app-home.component";
import {AppLibraryComponent} from "./pages/app-library/app-library.component";

const routes: Routes = [

  {
    path: '',
    component: CisgAppComponent,
    children: [
      {
        path: '',
        component: AppHomeComponent
      },
      {
        path: 'activities',
        component: AppHomeComponent
      },
      {
        path: 'rating',
        component: AppHomeComponent
      },
      {path: 'library', loadChildren: () => import('./pages/app-library/app-library.module').then(m => m.AppLibraryModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CisgAppRoutingModule {
}

