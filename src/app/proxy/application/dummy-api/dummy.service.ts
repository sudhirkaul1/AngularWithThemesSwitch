import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  apiName = 'Default';

  getDesc = () =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/dummy',
    },
    { apiName: this.apiName });

  getInfo = () =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/dummy/GetInfo',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
