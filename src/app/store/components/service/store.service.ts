import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tranrs {
  storeId: string;
  storeName: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl = 'http://localhost:8080/store/queryAll'

  Trans = {
      "MWHEADER": {
          "msgId": "0001"
      },
      "TRANRQ": {

          "storeName": "Example Store",
          "tel": "0987654321"
      }
  }

  constructor(private http: HttpClient) { }

  getQueryStore() : Observable<Tranrs[]> {
    return this.http.post<Tranrs[]>(this.apiUrl, this.Trans);
  }



}
