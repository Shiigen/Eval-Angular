import { Injectable } from '@angular/core';
import { observable } from "rxjs";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  constructor(private _httpClient:HttpClient) { }

  getRequest<T>(url:string) {
    console.log(url)
    return this._httpClient.get<T>(url)
  }
}
