import {Injectable} from '@angular/core';
import {
  Storage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  getStorage,
} from '@angular/fire/storage';
import {Timestamp} from "firebase/firestore";
import {HttpClient} from "@angular/common/http";
import {Storage_file} from "../../../models/storage_file";


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  _storageReference!: any

  constructor(private _http: HttpClient, private storage: Storage) {
  }

  upload(file: File, path: string): Promise<Storage_file> {
    const self = this
    const fileName = StorageService.getFilename(file.name);
    this._storageReference = storageRef(getStorage(), `${path}/${fileName}`);
    const uploadTask = uploadBytesResumable(this._storageReference, file)
    return new Promise(function (resolve, reject) {
      uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, a => {
        console.log(a)
      }, async () => {
        console.log("Complete")
        self.getDownloadURL(fileName, path).then(function (downloadURL) {
          resolve({
            name: fileName,
            downloadURL,
            type: file.type,
            created: Timestamp.now(),
            lastUpdated: Timestamp.now(),
          })
        })
      })
    })


  }

  async delete(fileName: string, path: string) {
    const pathName: string = `${path}/${fileName}`
    const ref = storageRef(this.storage, pathName)
    try {
      await deleteObject(ref)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }


  private static getFilename(fileName: string): string {
    const ext = fileName.split('.').pop();
    const name = fileName.split('.').shift();
    return `${name}_${Date.now()}.${ext}`;
  }

  async getDownloadURL(fileName: string, path: string) {
    const stRef = await storageRef(getStorage(), `${path}/${fileName}`);
    return await getDownloadURL(stRef);
  }


}
