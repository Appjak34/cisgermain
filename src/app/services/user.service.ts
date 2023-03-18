import {Injectable} from '@angular/core';
import {Profile} from "../models/profile";
import {Observable} from "rxjs";
import {doc, docData} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _path: string = 'users'

  constructor(private firestore: AngularFirestore) {
  }


  get(uid: string) {
    return docData(doc(this.firestore.firestore, this._path, uid)) as Observable<Profile>
  }

}
