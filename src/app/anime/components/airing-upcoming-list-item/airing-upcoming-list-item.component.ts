import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopAiringAndUpcoming } from '../../../interfaces/top-airing-and-upcoming';

@Component({
  selector: 'app-airing-upcoming-list-item',
  templateUrl: './airing-upcoming-list-item.component.html',
  styleUrls: ['./airing-upcoming-list-item.component.scss']
})
export class AiringUpcomingListItemComponent implements OnInit {

  public navigationType: string = '';

  @Input() anime!: TopAiringAndUpcoming;

  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getNavigationType();
  }

  getNavigationType(): void {
    this.activateRoute.data.subscribe( ({ navigationType }) => {
      this.navigationType = navigationType;
    } )
  }

}
