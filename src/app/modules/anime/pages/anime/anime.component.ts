import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { MENU } from '../../../../core/constants';
import { Page } from '../../../../interfaces/page';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animeSubmenu!: Page[];

  constructor(
    private location: Location
  ) {
    this.animeSubmenu = MENU.filter(page => page.title.toLowerCase() === 'anime')
  }

  ngOnInit(): void {

  }

  goBack() {
    this.location.back();
  }

}
