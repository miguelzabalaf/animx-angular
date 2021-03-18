export interface TopAnime {
  mal_id:     number;
  rank:       number;
  title:      string;
  url:        string;
  image_url:  string;
  type:       Type;
  episodes:   number;
  start_date: string;
  end_date:   null | string;
  members:    number;
  score:      number;
}

export enum Type {
  Movie = "Movie",
  Ova = "OVA",
  Tv = "TV",
}
