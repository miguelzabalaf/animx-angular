import { Component, OnInit } from '@angular/core';
import { MENU } from '../../core/constants';
import { Page } from '../../interfaces/page';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu: Page[] = MENU;
  public subHeaderIsVisible: boolean = false;
  public actualSubPages: Page[] = [];
  public showBackgroundMenu: boolean = true;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.subscribreToStateMuted();
  }

  subscribreToStateMuted(): void {
    this.headerService.isMuted.subscribe((event: boolean) => {
      this.showBackgroundMenu = event;
    })
  }

  itemMenuHover(item: Page): void {
    if (item.subpages) {
      this.actualSubPages = item.subpages;
      this.subHeaderIsVisible = true;
      this.headerService.silence();
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
