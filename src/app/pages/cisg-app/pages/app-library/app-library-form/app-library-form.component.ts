import {Component} from '@angular/core';
import {FileUploadControl} from "@iplab/ngx-file-upload";
import {EducationalServiceService} from "../../../services/educational-service.service";
import {Book} from "../../../../../models/book";
import {LibraryService} from "../../../services/library.service";
import {Timestamp} from "firebase/firestore";


@Component({
  selector: 'ea-app-library-form',
  templateUrl: './app-library-form.component.html',
  styleUrls: ['./app-library-form.component.scss']
})
export class AppLibraryFormComponent {


  book = <Book>{}
  public uploadedFiles: Array<File> = [];


  public fileUploadControl = new FileUploadControl({
    multiple: false,
    accept: ['.pdf']
  })

  constructor(private _educationalServiceService: EducationalServiceService, private readonly _libraryService: LibraryService) {

  }

  get list$() {
    return this._educationalServiceService.list$
  }

  get urlImgSelected() {
    return this.book.url_img ?? 'assets/no_cover_book.png'
  }


  select(value: string) {
    this.book.educational_service = JSON.parse(value)
  }

  async upload() {
    this.book.created = Timestamp.now()
    await this._libraryService.uploadBook(this.book, this.uploadedFiles[0])
  }

}
