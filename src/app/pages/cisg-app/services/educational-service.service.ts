import {Injectable} from '@angular/core'
import {

  collection,
  collectionData,
  CollectionReference,
  Firestore,
  orderBy,
  query,

} from '@angular/fire/firestore'
import {BehaviorSubject, map, Observable} from 'rxjs'
import {EducationalService} from "../../../models/educational_service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Profile} from "../../../models/profile";


@Injectable({
  providedIn: 'root'
})
export class EducationalServiceService {

  private _list: EducationalService[] = []

  private _listSubject: BehaviorSubject<EducationalService[]> = new BehaviorSubject(this._list)

  private _list$: Observable<EducationalService[] | null> = this._listSubject.asObservable()


  private _current: EducationalService = new EducationalService();
  private _path: string = 'educational_services'


  constructor(private firestore: AngularFirestore) {

    this._list$ = this.getAll()
    this.list$.subscribe(value => {
      console.log(value)
      this._listSubject.next(value ?? []);
    })
  }

  get list() {
    return this._listSubject.value
  }

  get list$() {
    return this._list$
  }


  private getAll() {
    return this.firestore.collection(this._path).valueChanges({idField: 'id'}) as Observable<EducationalService[]>
  }
}
