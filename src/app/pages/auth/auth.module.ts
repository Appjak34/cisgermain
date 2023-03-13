import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./register/register.component";
import {CisgAppModule} from "../cisg-app/cisg-app.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        CisgAppModule,
    ],
  providers: []
})
export class AuthModule {
}

