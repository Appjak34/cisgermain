import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {Observable, BehaviorSubject} from 'rxjs';
import {tap, take, scan} from 'rxjs/operators';
import {Book} from "../../../models/book";

export interface QueryConfig {
  path: string,
  field: string,
  state: string,
  limit: number,
  reverse: boolean

  [key: string]: any
}

@Injectable({
  providedIn: 'root',
})
export class PaginationService {

  private _data: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  private query!: QueryConfig;


  private initData = true;

  constructor(private afs: AngularFirestore,) {
  }

  get data(): Observable<Book[]> {
    return this._data.asObservable();
  }

  async init(path: string, field: string, opts?: any, filters?: any) {

    this.initData = true;

    this.query = {
      path,
      field,
      limit: 10,
      reverse: false,
      filter: null,
      ...opts,

    };

    const first = this.afs.collection<Book>(this.query.path, (ref) => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'asc' : 'desc')
        .limit(this.query.limit);
    });

    this.mapAndUpdate(first);
  }

  more() {
    const cursor = this.getCursor();
    this.initData = false;
    const more = this.afs.collection<Book>(this.query.path, (ref) => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'asc' : 'desc')
        .startAfter(cursor)
        .limit(this.query.limit);
    });
    this.mapAndUpdate(more);
  }

  reset() {
    this._data.next([]);
  }

  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      // @ts-ignore
      return current[current.length - 1].doc;
    }
    return null;
  }

  private mapAndUpdate(col: AngularFirestoreCollection<Book>) {
    return col
      .get()
      .pipe(
        tap((arr) => {
          const values: Book[] = [];
          arr.forEach((item) => {
            const value = {
              ...item.data(),
              id: item.id,
              doc: item,
            };
            values.push(value);
          });
          const acc = this.initData ? [] : this._data.getValue();
          this._data.next([...acc, ...values]);
        }),
        take(1)
      )
      .subscribe();
  }

  deleteDoc(index: number) {
    const docs = this._data.getValue();
    docs.splice(index, 1);
    this._data.next(docs);
  }
}
