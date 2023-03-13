import {Component} from '@angular/core';
import {AppNavService} from "../app-nav.service";

@Component({
  selector: 'ea-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {


  constructor(private _appNavService: AppNavService) {
  }

  openNav() {
    this._appNavService.openNav();
  }

  openMenu() {
    this._appNavService.openMenu();
  }

  get isOpenMenu() {
    return this._appNavService.isOpenMenu
  }


  get user() {
    return this._appNavService.user
  }

  signOut() {
    if (this.isOpenMenu) this.openMenu()
    this._appNavService.singOut()
  }
  get initials(){
    return this.user?.name?.slice(0, 2);

  }

}
