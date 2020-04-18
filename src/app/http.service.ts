import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  public getAll() {
    return this.http.get('https://corona.lmao.ninja/v2/all');
  }

  public getList() {
    return this.http.get('https://corona.lmao.ninja/v2/countries');
  }

  public searchCountry(country: string) {
    return this.http.get('https://corona.lmao.ninja/v2/countries/' + country)
  }
}
