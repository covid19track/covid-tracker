import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { Observable,of, from } from 'rxjs';

import { englishToGreek } from '../metascript';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly API_URL = 'https://corona.lmao.ninja/countries';

  countriesData: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getList().subscribe(data => {
      this.countriesData = data;
      console.table(this.countriesData);
      console.table(this.countriesData[0]);
    });
  }
}
