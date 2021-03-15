import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TopAiring } from '../interfaces/top-airing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private BASE_URL: string = "https://api.jikan.moe/v3";

  constructor( private http: HttpClient ) {
  }

  getTopAiring(): Observable<TopAiring[]> {
    return this.http.get<TopAiring[]>(`${ this.BASE_URL }/top/anime/1/airing`)
      .pipe( map( ( data: any )  =>  {
        return data.top;
      }))
  }
}


