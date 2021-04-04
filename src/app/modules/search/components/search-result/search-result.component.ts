import { Component, Input, OnInit } from '@angular/core';
import { ResultAnime, ResultManga } from '../../../../interfaces/search-response';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() animes: ResultAnime[] = [];
  @Input() mangas: ResultManga[] = [];
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
