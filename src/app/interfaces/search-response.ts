export interface SearchResponse {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: ResultAnime[] | ResultManga;
  last_page: number;
}

export interface ResultAnime {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: Type;
  episodes: number;
  score: number;
  start_date: Date | null;
  end_date: Date | null;
  members: number;
  rated: Rated | null;
}

export enum Rated {
  G = "G",
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
  RatedR = "R+",
  Rx = "Rx",
}

export enum Type {
  Movie = "Movie",
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV",
  Unknown = "Unknown",
}


export interface ResultManga {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  publishing: boolean;
  synopsis: string;
  type: Type;
  chapters: number;
  volumes: number;
  score: number;
  start_date: Date | null;
  end_date: Date | null;
  members: number;
}

export enum Type {
  LightNovel = "Light Novel",
  Manga = "Manga",
  Manhua = "Manhua",
  Manhwa = "Manhwa",
}
