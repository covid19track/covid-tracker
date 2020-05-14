import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from '../data';
import { Observable,of, from } from 'rxjs';

import { englishToGreek } from '../metascript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly API_URL = 'https://corona.lmao.ninja/v2/countries?sort=cases';

  country   = [];
  cases     = [];
  deaths    = [];
  recovered = [];

  chart     = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.titleService.setTitle('covidtrack.tk: Παρακολουθήστε την εξέλιξη της πανδημίας');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 9.1.4 et bootstrap 4.4.1' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });

    this.httpClient.get(this.API_URL).subscribe((res: Data[]) => {

      res.slice(0, 10).forEach(y => {
        if (y.country === 'World') {
          console.log('World summary data will not be added to the chart.')
        } else {
          englishToGreek(this.country, y.country);
          this.cases.push(y.cases);
          this.deaths.push(y.deaths);
          this.recovered.push(y.recovered);
        }
      });

      this.chart.push(new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.country,
          datasets: [
            {
              data: this.cases,
              backgroundColor: [
              'rgba(255, 150, 100, 0.6)',
              'rgba(255, 88, 90, 0.5)',
              'rgba(255, 77, 80, 0.5)',
              'rgba(255, 66, 70, 0.5)',
              'rgba(255, 55, 60, 0.5)',
              'rgba(255, 44, 50, 0.4)',
              'rgba(255, 33, 40, 0.4)',
              'rgba(255, 22, 30, 0.3)',
              'rgba(255, 11, 20, 0.25)',
            ],
            borderColor: [
              'rgba(255, 11, 20, 0.25)',
              'rgba(255, 22, 30, 0.3)',
              'rgba(255, 33, 40, 0.4)',
              'rgba(255, 33, 40, 0.4)',
              'rgba(255, 55, 60, 0.5)',
              'rgba(255, 66, 70, 0.5)',
              'rgba(255, 77, 80, 0.5)',
              'rgba(255, 88, 90, 0.5)',
              'rgba(255, 150, 100, 0.2)',
            ],
            borderWidth: 1
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
