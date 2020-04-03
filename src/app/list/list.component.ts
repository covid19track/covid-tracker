import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly COUNTRIES = {
    'USA': 'Η.Π.Α (Αμερική)',
    'Italy': 'Ιταλία',
    'Spain': 'Ισπανία',
    'Germany': 'Γερμανία',
    'France': 'Γαλλία',
    'Iran': 'Ιράν',
    'UK': 'Ηνωμένο Βασίλειο',
    'Turkey': 'Τουρκία',
    'Switzerland': 'Ελβετία',
    'Belgium': 'Βέλγιο'
  };

  countriesData: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getList().subscribe(data => {
      this.countriesData = data;
      console.table(this.countriesData);
    });
  }
}
