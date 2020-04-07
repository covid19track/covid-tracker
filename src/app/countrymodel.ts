export interface CountryModel {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  countryInfo: countryInfo;
}

interface countryInfo {
  iso2: string;
}
