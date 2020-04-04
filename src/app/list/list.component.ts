import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { Observable,of, from } from 'rxjs';
import { lexor, englishToGreek } from '../metascript';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly API_URL = 'https://corona.lmao.ninja/countries';

  country = [];
  cases = [];
  deaths = [];
  recovered = [];

  countriesData: Object;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.API_URL).subscribe((data: Array<any>) => {
      data = data.filter(c => c.country !== 'World');

      this.countriesData = data;
      // data.forEach(y => {
      //   englishToGreek(this.country, y.country);
      //   this.cases.push(y.cases);
      //   this.deaths.push(y.deaths);
      //   this.recovered.push(y.recovered);
      // });

      // this.countriesData['cases'] = this.cases;
      // this.countriesData['deaths'] = this.deaths;
      // this.countriesData['recovered'] = this.recovered;
    });
  }
}
