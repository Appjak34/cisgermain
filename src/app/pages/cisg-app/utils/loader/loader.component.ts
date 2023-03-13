import {Component} from '@angular/core';
import {LoaderService} from "../loader.service";

@Component({
  selector: 'ea-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(private _loaderService: LoaderService) {
  }

  get loading() {
    return this._loaderService.loading
  }

}
