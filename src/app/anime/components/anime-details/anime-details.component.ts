import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../../../interfaces/anime';
import { AnimeService } from '../../../services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  public animeId: string = '';
  public anime!: Anime;

  constructor(
    private activateRoute: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    this.getAnimeId();
  }

  getAnimeId(): void {
    this.activateRoute.params.subscribe(({ id }) => {
      this.animeId = id;
      this.getAnimeResponse();
    })
  }

  getAnimeResponse() {
    this.animeService.getAnimeById(this.animeId).subscribe(anime => {
      this.anime = anime;
    }, err => {
      console.log(err);
    })
  }

  isAiring(): boolean {
    return this.anime?.airing;
  }

  haveRating(): boolean {
    return this.anime?.rating === 'None' || '' ? false : true;
  }

}
