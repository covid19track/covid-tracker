import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  public getAll() {
    return this.http.get('https://corona.lmao.ninja/all');
  }

  public getList() {
    return this.http.get('https://corona.lmao.ninja/countries');
  }

  public searchCountry(country: string) {
    return this.http.get('https://corona.lmao.ninja/countries/' + country)
  }
}
