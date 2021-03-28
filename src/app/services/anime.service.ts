import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TopAiringAndUpcoming } from '../interfaces/top-airing-and-upcoming';
import { Observable } from 'rxjs';
import { TopAnime } from '../interfaces/top-anime-response';
import { Anime } from '../interfaces/anime';
import { Character, CharacterDetails } from '../interfaces/characters-response';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private BASE_URL: string = "https://api.jikan.moe/v3";

  constructor(private http: HttpClient) {
  }

  getTopAiringOrUpcoming(type: string = 'airing'): Observable<TopAiringAndUpcoming[]> {
    return this.http.get<TopAiringAndUpcoming[]>(`${this.BASE_URL}/top/anime/1/${type}`)
      .pipe(map((data: any) => {
        return data.top;
      }))
  }

  getTop50OfAnime(): Observable<TopAnime[]> {
    return this.http.get<TopAnime[]>(`${this.BASE_URL}/top/anime/1`)
      .pipe(map((data: any) => {
        return data.top;
      }))
  }

  getAnimeById(id: string): Observable<Anime> {
    return this.http.get<Anime>(`${this.BASE_URL}/anime/${id}`);
  }

  getCharactersByAnimeId(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.BASE_URL}/anime/${id}/characters_staff`)
      .pipe(map((data: any) => {
        return data.characters;
      }))
  }

  getCharacterById(id: number): Observable<CharacterDetails> {
    return this.http.get<CharacterDetails>(`${this.BASE_URL}/character/${id}`);
  }

}


