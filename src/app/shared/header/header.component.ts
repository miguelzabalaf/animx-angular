import { Component, OnInit, ViewChild } from '@angular/core';
import { MENU } from '../../core/constants';
import { Page } from '../../interfaces/page';
import { HeaderService } from '../../services/header.service';
import { MenuResponsiveComponent } from '../menu-responsive/menu-responsive.component';

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

  @ViewChild('menuResponsive') menuResponsive!: MenuResponsiveComponent;

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
      this.onVideoSilence();
    }
  }

  onVideoSilence(): void {
    this.headerService.silence();
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

  openMenuResponsive(): void {
    this.onVideoSilence()
    this.menuResponsive.open();
  }

  closeMenuResponsive(): void {
    this.menuResponsive.close();
  }

  toggleMenuResponsive(): void {
    return this.menuResponsive.isOpenMenu ? this.closeMenuResponsive() : this.openMenuResponsive()
  }

}
