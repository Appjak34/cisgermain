import {Timestamp} from "firebase/firestore";

export interface Storage_file{
  name:string
  downloadURL:string
  type:string
  created:Timestamp
  lastUpdated:Timestamp
}
