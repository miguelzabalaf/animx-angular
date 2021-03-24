export interface Anime {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null;
  premiered: string;
  broadcast: string;
  related: Related;
  producers: Genre[];
  licensors: Genre[];
  studios: Genre[];
  genres: Genre[];
  opening_themes: string[];
  ending_themes: string[];
}

export interface Aired {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Genre {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
}

export enum Type {
  Anime = "anime",
  Manga = "manga",
}

export interface Related {
  Adaptation: Genre[];
  "Side story": Genre[];
  Summary: Genre[];
}
