import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AppNavService} from "../../app-nav.service";
import {Router} from "@angular/router";
import {AppSideBarItem} from "../models/app-side-bar-item";

@Component({
  selector: 'ea-app-side-bar-item',
  templateUrl: './app-side-bar-item.component.html',
  styleUrls: ['./app-side-bar-item.component.scss']
})
export class AppSideBarItemComponent implements OnInit {
  @Input() item!: AppSideBarItem;

  screenWidth: any;
  haveSubMenu: boolean = false

  openSubMenu: boolean = false

  constructor(private _appNavService: AppNavService, private router: Router) {
    this.screenWidth = window.innerWidth;

  }

  ngOnInit(): void {
    this.haveSubMenu = Boolean(this.item.subMenu)
    this.initAppSideBar()
  }


  initAppSideBar() {
    if (this.screenWidth > 640) this._appNavService.openNav();

  }


  open(subMenuClick = false, path?: string) {

    if(path)this.router.navigate([path])
    if (this.screenWidth < 640) {
      if (this.haveSubMenu && !subMenuClick) {
        this.openSubMenu = !this.openSubMenu
        return;
      }
      this._appNavService.openNav();
      return;
    }

    if (this.screenWidth > 640 || this.haveSubMenu) {
      if (!subMenuClick) this.openSubMenu = !this.openSubMenu
      return
    }
    this._appNavService.openNav();


  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
