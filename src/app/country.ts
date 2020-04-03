export interface Country {
  country: string;
  cases: number;
  deaths: number;
  countryInfo: countryInfo;
}

interface countryInfo {
  iso2: string;
}
