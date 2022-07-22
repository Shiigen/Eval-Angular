import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../../services/url-api";
import {HttpClientService} from "../../../services/http-client.service";
import {departement} from "../../../models/departement";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {
  public arrayDepartement:departement[] = []

  constructor(private _HttpService: HttpClientService) { }

  ngOnInit(): void {
    this.getdepartement()
  }

  getdepartement(url=UrlApi.rawUrl_DEPARTEMENT) {
    this._HttpService.getRequest<any>(url).subscribe((jsonResponse)=>{
      this.arrayDepartement=jsonResponse
      console.log(this.arrayDepartement)
    })
  }

}
