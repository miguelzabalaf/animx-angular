import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../../../interfaces/anime';
import { AnimeService } from '../../../services/anime.service';
import { Character } from '../../../interfaces/characters-response';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  public animeId: string = '';
  public anime!: Anime;
  public characters: Character[] = [];
  public showCharacterDetail: boolean = false;
  public characterSelected!: number;

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
      this.getCharactersResponse();
    })
  }

  getAnimeResponse(): void {
    this.animeService.getAnimeById(this.animeId).subscribe(anime => {
      this.anime = anime;
    }, err => {
      console.log(err);
    })
  }

  getCharactersResponse(): void {
    this.animeService.getCharactersByAnimeId(this.animeId).subscribe(characters => {
      this.characters = characters;
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

  onShowCharacterDetail(character: Character) {
    this.characterSelected = character.mal_id;
    this.showCharacterDetail = true;
  }

  eventDismiss(ev: boolean) {
    this.showCharacterDetail = ev;
  }

}
