import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../../services/url-api";
import {HttpClientService} from "../../../services/http-client.service";
import {region} from "../../../models/region"

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public arrayRegion:region[] = []

  constructor(private _HttpService: HttpClientService) { }

  ngOnInit(): void {
    this.getRegion()
  }

  getRegion(url=UrlApi.rawUrl_APIREGION) {
    this._HttpService.getRequest<region[]>(url).subscribe((jsonResponse)=>{
      this.arrayRegion=jsonResponse
      console.log(this.arrayRegion)
    })
  }

}
