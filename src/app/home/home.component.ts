import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly API_URL = 'https://corona.lmao.ninja/countries';

  country = [];
  cases = [];
  deaths = [];
  recovered = [];

  chart = [];

  constructor(private httpClient: HttpClient) { }

  // res.forEach(y => {
  //   this.country.push(y.country);
  //   this.cases.push(y.cases);
  //   this.deaths.push(y.deaths);
  //   this.recovered.push(y.recovered);
  // });

  ngOnInit() {
    this.httpClient.get(this.API_URL).subscribe((res: Data[]) => {
      res.slice(0, 10).forEach(y => {
        this.country.push(y.country);
        this.cases.push(y.cases);
        this.deaths.push(y.deaths);
        this.recovered.push(y.recovered);
      });

      this.chart.push(new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.country,
          datasets: [
            {
              data: this.cases,
              borderColor: '#3cba9f',
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      }));
    });
  }
}
