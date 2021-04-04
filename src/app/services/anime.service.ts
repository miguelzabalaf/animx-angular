import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TopAiringAndUpcoming } from '../interfaces/top-airing-and-upcoming';
import { Observable } from 'rxjs';
import { TopAnime } from '../interfaces/top-anime-response';
import { Anime } from '../interfaces/anime';
import { Character, CharacterDetails } from '../interfaces/characters-response';
import { ResultAnime, ResultManga } from '../interfaces/search-response';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private BASE_URL: string = "https://api.jikan.moe/v3";

  public genres: any[] = [
    {
      id: '',
      name: 'All'
    },
    {
      id: 1,
      name: 'Action'
    },
    {
      id: 25,
      name: 'Shoujo'
    },
    {
      id: 6,
      name: 'Demons'
    },
    {
      id: 4,
      name: 'Comedy'
    }
    ,
    {
      id: 9,
      name: 'Ecchi'
    }
    ,
    {
      id: 21,
      name: 'Samurai'
    },
    {
      id: 2,
      name: 'Adventure'
    },
    {
      id: 3,
      name: 'Cars'
    },
    {
      id: 5,
      name: 'Dementia'
    },
    {
      id: 7,
      name: 'Mystery'
    },
    {
      id: 8,
      name: 'Drama'
    },
    {
      id: 10,
      name: 'Fantasy'
    },
    {
      id: 11,
      name: 'Game'
    },
    {
      id: 12,
      name: 'Hentai'
    },
    {
      id: 13,
      name: 'Historical'
    },
    {
      id: 14,
      name: 'Horror'
    },
    {
      id: 15,
      name: 'Kids'
    },
    {
      id: 16,
      name: 'Magic'
    },
    {
      id: 17,
      name: 'Martial Arts'
    },
    {
      id: 18,
      name: 'Mecha'
    },
    {
      id: 19,
      name: 'Music'
    },
    {
      id: 20,
      name: 'Parody'
    },
    {
      id: 21,
      name: 'Samurai'
    },
    {
      id: 22,
      name: 'Romance'
    },
    {
      id: 23,
      name: 'School'
    },
    {
      id: 24,
      name: 'Sci Fi'
    },
    {
      id: 25,
      name: 'Shoujo'
    },
    {
      id: 26,
      name: 'Shoujo Ai'
    },
    {
      id: 27,
      name: 'Shounen'
    },
    {
      id: 28,
      name: 'Shounen Ai'
    },
    {
      id: 29,
      name: 'Space'
    },
    {
      id: 30,
      name: 'Sports'
    },
    {
      id: 31,
      name: 'Super Power'
    },
    {
      id: 32,
      name: 'Vampire'
    },
    {
      id: 33,
      name: 'Yaoi'
    },
    {
      id: 34,
      name: 'Yuri'
    },
    {
      id: 35,
      name: 'Harem'
    },
    {
      id: 36,
      name: 'Slice Of Life'
    },
    {
      id: 37,
      name: 'Supernatural'
    },
    {
      id: 38,
      name: 'Military'
    },
    {
      id: 39,
      name: 'Police'
    },
    {
      id: 40,
      name: 'Psychological'
    },
    {
      id: 41,
      name: 'Thriller'
    },
    {
      id: 42,
      name: 'Seinen'
    },
    {
      id: 43,
      name: 'Josei'
    }
  ];

  public animeAiringStatus: any = [
    {
      name: 'All',
      value: ''
    },
    {
      name: 'Airing',
      value: 'airing'
    },
    {
      name: 'Completed',
      value: 'completed'
    },
    {
      name: 'Upcoming',
      value: 'upcoming'
    },
  ]

  public mangaAiringStatus: any = [
    {
      name: 'All',
      value: ''
    },
    {
      name: 'Airing',
      value: 'airing'
    },
    {
      name: 'Completed',
      value: 'completed'
    },
  ]

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

  searchAnimeAndManga(type: string, params: any = undefined) {
    return this.http.get<ResultAnime[] | ResultManga[]>(`${this.BASE_URL}/search/${type}`, { params })
      .pipe(map((data: any) => {
        return data.results
      }))
  }


}


