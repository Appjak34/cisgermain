import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoaderService} from "../loader.service";

@Component({
  selector: 'ea-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent {
  pdfSrc: string = "https://firebasestorage.googleapis.com/v0/b/centro-integral-sophie-germain.appspot.com/o/library";

  constructor(private actRoute: ActivatedRoute, private _loaderService: LoaderService) {
    this.pdfSrc = this.actRoute.snapshot.params['id']
    _loaderService.loading = true
  }

  loadComplete() {
    console.log('loadComplete')
    this._loaderService.loading = false
  }
}
