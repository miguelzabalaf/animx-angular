import { Component, OnInit } from '@angular/core';
import { MENU } from '../../../core/constants';
import { Page } from '../../../interfaces/page';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animeSubmenu!: Page[];

  constructor() {
    this.animeSubmenu = MENU.filter(page => page.title.toLowerCase() === 'anime')
   }

  ngOnInit(): void {
    console.log(this.animeSubmenu)
  }

}
