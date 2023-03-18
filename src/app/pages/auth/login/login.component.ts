import {Component} from '@angular/core';
import {AuthServiceService} from "../../../services/auth.service.service";
import {Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";
import {LoaderService} from "../../cisg-app/utils/loader.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''
  pass: string = ''


  constructor(private readonly _authServiceService: AuthServiceService, private router: Router, private _alertService: AlertService, private _loaderService: LoaderService) {
    this._authServiceService.user$.subscribe(user => {

      if (user) this.router.navigate(['admin']);
    })
  }


  async login() {
    this._loaderService.loading = true
    const access = await this._authServiceService.emailLogin(this.email, this.pass)
    if (access) {
      this._loaderService.loading = false
      return;
    }
    this._loaderService.loading = false
    this._alertService.warning('Ups...', 'Datos incorrectos, verificalos y vuelve a intentar')

  }


}
