export interface CharacterResponse {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  characters: Character[];
  staff: Staff[];
}

export interface Character {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: Role;
  voice_actors: Staff[];
}

export enum Role {
  Main = "Main",
  Supporting = "Supporting",
}

export interface Staff {
  mal_id: number;
  name: string;
  url: string;
  image_url: string;
  language?: Language;
  positions?: string[];
}

export enum Language {
  Brazilian = "Brazilian",
  English = "English",
  Italian = "Italian",
  Japanese = "Japanese",
}
