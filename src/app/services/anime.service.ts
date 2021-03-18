import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TopAiringAndUpcoming } from '../interfaces/top-airing-and-upcoming';
import { Observable } from 'rxjs';
import { TopAnime } from '../interfaces/top-anime-response';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private BASE_URL: string = "https://api.jikan.moe/v3";

  constructor( private http: HttpClient ) {
  }

  getTopAiringOrUpcoming( type: string = 'airing' ): Observable<TopAiringAndUpcoming[]> {
    return this.http.get<TopAiringAndUpcoming[]>(`${ this.BASE_URL }/top/anime/1/${ type }`)
      .pipe( map( ( data: any )  =>  {
        return data.top;
      }))
  }

  getTop50OfAnime(): Observable<TopAnime[]> {
    return this.http.get<TopAnime[]>(`${ this.BASE_URL }/top/anime/1`)
      .pipe( map( ( data: any )  =>  {
        return data.top;
      }))
  }
}


