export interface Region {
  id: number;
  name: string;
}

export interface Destination {
  id: number;
  country_name: string;
  region: Region;
  slug: string;
  description: string;
  city: string;
  airport: string;
  airport_code: string;
  image_url: string;
}
