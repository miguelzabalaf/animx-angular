import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopAiringAndUpcoming } from '../../../../interfaces/top-airing-and-upcoming';
import { AnimeService } from '../../../../services/anime.service';

@Component({
  selector: 'app-airing-upcoming-list',
  templateUrl: './airing-upcoming-list.component.html',
  styleUrls: ['./airing-upcoming-list.component.scss']
})
export class AiringUpcomingListComponent implements OnInit {

  public topAiring: TopAiringAndUpcoming[] = [];
  public topUpcoming: TopAiringAndUpcoming[] = [];
  public navigationType: string = '';

  constructor(
    private animeService: AnimeService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.getNavigationType();
  }

  getNavigationType(): void {
    this.activateRoute.data.subscribe(({ navigationType }) => {
      this.navigationType = navigationType;
      this.getAiringOrUpcoming();
    });
  }

  getAiringOrUpcoming(): void {
    this.animeService.getTopAiringOrUpcoming(this.navigationType).subscribe(data => {
      if (this.navigationType === 'airing') {
        this.topAiring = data;
      } else if (this.navigationType === 'upcoming') {
        this.topUpcoming = data;
      } else {
        this.topAiring = [];
        this.topUpcoming = [];
      }
    });
  }

  getTop(): TopAiringAndUpcoming[] {
    return (this.navigationType === 'airing' ? this.topAiring : this.topUpcoming)
  }

  conditionalForLoading(): boolean {
    if (this.navigationType === 'airing' && !this.topAiring) {
      return true;
    } else if (this.navigationType === 'upcoming' && !this.topUpcoming) {
      return true;
    } else {
      return false;
    }
  }

}
