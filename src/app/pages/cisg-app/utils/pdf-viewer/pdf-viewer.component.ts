import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ea-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent {
  pdfSrc: string = "https://firebasestorage.googleapis.com/v0/b/centro-integral-sophie-germain.appspot.com/o/library";

  constructor(private actRoute: ActivatedRoute) {
    this.pdfSrc = this.actRoute.snapshot.params['id']
  }
}
