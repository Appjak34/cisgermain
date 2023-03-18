import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../services/auth.service.service";
import {Router} from "@angular/router";
import {AppNavService} from "./widgets/app-nav.service";
import {Profile} from "../../models/profile";
import {EducationalServiceService} from "./services/educational-service.service";

@Component({
  selector: 'app-cisg-app',
  templateUrl: './cisg-app.component.html',
  styleUrls: ['./cisg-app.component.scss']
})
export class CisgAppComponent implements OnInit {

  constructor(private _authServiceService: AuthServiceService,
              private _educationalServiceService: EducationalServiceService,
              private router: Router, private _appNavService: AppNavService) {

    this.authState$()
  }

  ngOnInit(): void {
  }



  private authState$() {
    this._authServiceService.user$.subscribe((value) => {
      console.log(value)
      this._authServiceService.user = value ?? new Profile();
      if (value == null) this.router.navigate(['login'])
    })
  }


  get isOpenNav() {
    return this._appNavService.isOpenNav
  };

  open() {
    this._appNavService.openNav();
  }

}
