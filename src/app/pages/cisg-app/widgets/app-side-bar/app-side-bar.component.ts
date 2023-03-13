import {Component, HostListener, OnInit} from '@angular/core';
import {AppNavService} from "../app-nav.service";
import {Router} from "@angular/router";
import {AppSideBarItem} from "./models/app-side-bar-item";
import {UserTypesEnum} from "../../../../models/enums";
import {adminMenu, studentMenu} from "./menus";

@Component({
  selector: 'ea-app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.scss']
})
export class AppSideBarComponent implements OnInit {
  screenWidth: any;

  menu: AppSideBarItem[]=studentMenu;

  constructor(private _appNavService: AppNavService, private router: Router) {
    this.screenWidth = window.innerWidth;
    _appNavService.user$.subscribe(value => {

      // @ts-ignore
      switch (value.type) {
        case UserTypesEnum.admin:
          this.menu = adminMenu
          break;
        case UserTypesEnum.student:
          this.menu = studentMenu
          break;
        case UserTypesEnum.teacher:
          this.menu = studentMenu
          break;
        default:
          this.menu = studentMenu
          break;
      }
    })
  }

  ngOnInit(): void {
    this.initAppSideBar()
  }

  private initAppSideBar() {
    if (this.screenWidth > 640) this._appNavService.openNav();
  }


  open(path: string, haveSubMenu = false) {
    if (path) this.router.navigate([path])
    if (this.screenWidth > 640 || haveSubMenu) return;
    this._appNavService.openNav();
  }

  get isOpenNav() {
    return this._appNavService.isOpenNav;
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

}
