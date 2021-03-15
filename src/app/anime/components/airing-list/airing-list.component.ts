import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime.service';
import { TopAiring } from '../../../interfaces/top-airing';

@Component({
  selector: 'app-airing-list',
  templateUrl: './airing-list.component.html',
  styleUrls: ['./airing-list.component.scss']
})
export class AiringListComponent implements OnInit {

  public topAiring: TopAiring[] = [];

  constructor( private animeService: AnimeService  ) { }

  ngOnInit(): void {
    this.getTopAiring();
  }

  getTopAiring(): void {
    this.animeService.getTopAiring().subscribe( data => {
      this.topAiring = data;
    });
  }

}
