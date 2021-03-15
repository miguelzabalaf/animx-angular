export interface TopAiringAndUpcoming {
  mal_id:     number;
  rank:       number;
  title:      string;
  url:        string;
  image_url:  string;
  type:       Type;
  episodes:   number | null;
  start_date: string;
  end_date:   null | string;
  members:    number;
  score:      number;
}


export enum Type {
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV",
}
