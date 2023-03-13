import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {Book} from "../../../models/book";
import {
  addDoc,
  deleteDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where, doc
} from "@angular/fire/firestore";
import {Storage_file} from "../../../models/storage_file";
import {Observable} from "rxjs";
import {AlertService} from "../../../services/alert.service";
import {LoaderService} from "../utils/loader.service";
import {OPS} from "pdfjs-dist";
import constructPath = OPS.constructPath;
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PaginationService} from "../utils/pagination.service";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private readonly _collection = 'library'

  private _collectionRef: CollectionReference<Book>

  bookList$: Observable<Book[]> = new Observable<Book[]>()


  constructor(private readonly _storageService: StorageService,
              private firestore: Firestore,
              private db: AngularFirestore,
              private _alertService: AlertService,
              private _paginationService: PaginationService,
              private _loaderService: LoaderService) {
    this._collectionRef = collection(
      this.firestore,
      this._collection
    ) as CollectionReference<Book>
    this.initBookList()
    this.initPaginate()
  }

  initBookList() {
    this.bookList$ = this._paginationService.data
  }
  initPaginate(){
    this._paginationService.init('library', 'created', {reverse: false})
  }

  moreBooks() {
    this._paginationService.more();
  }

  errorForm(){
    this._alertService.warning('Campos obligatorios',' Hay campos vacios')
  }

  async deleteFirestore(book: Book, index: number) {
    this._loaderService.loading = true
    try {
      // @ts-ignore
      await this._alertService.confirmDelete(async () => {
        await this._storageService.delete(this._collection, book.url_PDF)
        await deleteDoc(doc(this._collectionRef, book.id));
        this._paginationService.deleteDoc(index)
        this._loaderService.loading = false
      })
    } catch (e) {
      console.log(e)
      this._loaderService.loading = false
      this._alertService.success('Ups... hubo un error', ':(')
    }

  }

  async uploadBook(book: Book, file: File): Promise<void> {
    this._loaderService.loading = true
    try {
      let storage_file = await this._storageService.upload(file, this._collection)
      book.url_PDF = storage_file.downloadURL
      book.name_PDF = storage_file.name
      await addDoc(this._collectionRef, book)
      this._alertService.success('Libro agregado')
      this._loaderService.loading = false
    } catch (e) {
      console.log(e)
      this._loaderService.loading = false
      this._alertService.success('Ups... hubo un error', ':(')
    }

  }

}
