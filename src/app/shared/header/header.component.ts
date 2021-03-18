import { Component, OnInit } from '@angular/core';
import { MENU } from '../../core/constants';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu: Page[] = MENU;
  public subHeaderIsVisible: boolean = false;
  public actualSubPages: Page[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  itemMenuHover( item: Page ): void {
    if ( item.subpages ) {
      this.actualSubPages = item.subpages;
      this.subHeaderIsVisible = true;
    }
  }

  itemMenuLeave(): void {
    this.subHeaderIsVisible = false;
  }

  subHeaderHover() {
    this.subHeaderIsVisible = true;
  }

  subHeaderLeave() {
    this.subHeaderIsVisible = false;
  }

}
