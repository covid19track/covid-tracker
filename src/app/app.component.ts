import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CountryModel } from './countrymodel';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly ROOT_URL = 'https://corona.lmao.ninja';
  countries: Observable<any>;

  readonly FLAG_URL = 'https://restcountries.eu/rest/v2/alpha';
  flags: Observable<any>;

  constructor(private http: HttpClient) { }

  getCountries() {
    this.countries = this.http.get<CountryModel[]>(this.ROOT_URL + '/countries');
  }
}
