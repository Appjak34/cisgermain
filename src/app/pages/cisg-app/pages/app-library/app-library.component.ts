import {Component, OnInit} from '@angular/core';
import {DocumentServiceService} from "../../../../document-service.service";
import {LibraryService} from "../../services/library.service";
import {Book} from "../../../../models/book";
import {map, Observable} from "rxjs";
import {PaginationService} from "../../utils/pagination.service";
import {UserTypesEnum} from "../../../../models/enums";


@Component({
  selector: 'ea-app-library',
  templateUrl: './app-library.component.html',
  styleUrls: ['./app-library.component.scss']
})
export class AppLibraryComponent implements OnInit {

  bookList$: Observable<Book[]> = new Observable<Book[]>()


  constructor(private readonly _libraryService: LibraryService,) {

  }

  ngOnInit() {
    this.bookList$ = this._libraryService.bookList$
  }

  ngOnDestroy() {
    this.bookList$ = this._libraryService.bookList$
  }


  onScrollDown(ev: any) {
    this._libraryService.moreBooks()
  }


  async deleteBook(book: Book, index: number) {
    await this._libraryService.deleteFirestore(book, index)
  }

  get isUserAdmin (){
    return this._libraryService.user.type == UserTypesEnum.admin
  }


}
