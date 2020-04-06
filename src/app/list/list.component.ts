import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { Observable,of, from } from 'rxjs';
import { lexor, englishToGreek, toObject, singleObject } from '../metascript';
import { HttpService } from '../http.service';
import { Country } from '../country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly API_URL = 'https://corona.lmao.ninja/countries';


  countries = [];
  country = [];
  cases = [];
  deaths = [];
  recovered = [];
  countryInfo = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    this.httpClient.get(this.API_URL).subscribe((data: Array<any>) => {
      data = data.filter(c => c.country !== 'World');

      data.slice(0, 100).forEach(y => {
        this.countries.push({
          country: lexor.get(y.country),
          cases: y.cases,
          deaths: y.deaths,
          recovered: y.recovered,
          countryInfo: y.countryInfo
        });
      });;
      console.table(data);
      console.table(this.countries);
    });
  }
}