import { ResultAnime } from './../../../../interfaces/search-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.scss']
})
export class ResultAnimeComponent implements OnInit {

  @Input() anime!: ResultAnime;

  constructor() { }

  ngOnInit(): void {
  }

}
