import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { lexor } from '../metascript';
import { Country } from '../country';
import { CountryModel } from '../countrymodel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  url: string;
  country: CountryModel;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
  }

  onCountrySelected($event: Country) {
    console.log($event);

    this.url = `https://corona.lmao.ninja/v2/countries/${$event.alpha2Code}`;

    this._http.searchCountry(this.url).subscribe((data: CountryModel) => {

      this.country = data;
      this.country.country = lexor.get(data.country);
      console.table(data);
      console.table(this.country);
    });
  }

}
