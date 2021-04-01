import { Component, Input, OnInit } from '@angular/core';
import { TopAnime } from '../../../../interfaces/top-anime-response';

@Component({
  selector: 'app-top-list-item',
  templateUrl: './top-list-item.component.html',
  styleUrls: ['./top-list-item.component.scss']
})
export class TopListItemComponent implements OnInit {

  @Input() anime!: TopAnime;

  constructor() { }

  ngOnInit(): void {
  }

}
