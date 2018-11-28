export interface SearchResultResponse {
  results: Results;
}

export interface Results {
  isGooglePowered: boolean;
  docs: Doc[];
  numFound: number;
}

export interface Doc {
  country: string;
  lng?: number;
  city?: string;
  searchType: string;
  alternative: string[];
  bookingId: string;
  placeType: string;
  placeKey: string;
  iata?: string;
  countryIso: string;
  locationId: string;
  name: string;
  ufi?: number;
  isPopular: boolean;
  region?: string;
  lang: string;
  lat?: number;
}
