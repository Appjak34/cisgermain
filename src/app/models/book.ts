import {EducationalService} from "./educational_service";
import {Timestamp} from "firebase/firestore";

export class Book {
  id: string
  name: string
  educational_service: EducationalService
  url_img: string
  url_PDF: string
  name_PDF: string
  created: Timestamp

  constructor(id: string, name: string, educational_service: EducationalService, url_img: string, url_PDF: string, name_PDF: string) {
    this.id = name
    this.name = name
    this.educational_service = educational_service
    this.url_img = url_img
    this.url_PDF = url_PDF
    this.name_PDF = url_PDF
    this.created = Timestamp.now()
  }


}
