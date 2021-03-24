import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime.service';
import { TopAnime } from '../../../interfaces/top-anime-response';


@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {

  public topAnimes: TopAnime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.getTopAnimes();
  }

  getTopAnimes(): void {
    this.animeService.getTop50OfAnime().subscribe(data => {
      this.topAnimes = data;
    })
  }

}
