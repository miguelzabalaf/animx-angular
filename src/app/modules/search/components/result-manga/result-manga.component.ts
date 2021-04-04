import { Component, Input, OnInit } from '@angular/core';
import { ResultManga } from '../../../../interfaces/search-response';

@Component({
  selector: 'app-result-manga',
  templateUrl: './result-manga.component.html',
  styleUrls: ['./result-manga.component.scss']
})
export class ResultMangaComponent implements OnInit {

  @Input() manga!: ResultManga;

  constructor() { }

  ngOnInit(): void {
  }

}
