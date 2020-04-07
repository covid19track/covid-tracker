import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { lexor } from '../metascript';
import { Country } from '../country';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  url: string;

  countries     = [];
  country       = [];
  cases         = [];
  deaths        = [];
  recovered     = [];
  countryInfo   = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
  }

  onCountrySelected($event: Country) {
    console.log($event);

    this.url = 'https://corona.lmao.ninja/country/' + $event.name;

    this._http.searchCountry($event.name).subscribe((data: Array<any>) => {
      data = data.filter(c => c.country !== 'World');

      data.forEach(y => {
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
