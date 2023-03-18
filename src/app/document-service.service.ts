import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
  url:string ='https://firebasestorage.googleapis.com/v0/b/centro-integral-sophie-germain.appspot.com/o/FundamentosDeEconomiaSecuenciaCorrecta.pdf?alt=media&token=330cfdff-fdaa-4767-b972-e0390ff5d4f8'

  constructor(private http: HttpClient) {
  }

  getPDF(invoiceId : number): Observable<Blob> {
    return this.http.get<Blob>(this.url);


  }
}
