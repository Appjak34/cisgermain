import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [


  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cisg-app/cisg-app.module').then(m => m.CisgAppModule)
  },
  {path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
