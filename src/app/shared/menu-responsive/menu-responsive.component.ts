import { Component, OnInit } from '@angular/core';
import { MENU } from '../../core/constants';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent implements OnInit {

  public menu: Page[] = MENU;
  public isOpenMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.isOpenMenu = true;
  }

  close(): void {
    this.isOpenMenu = false;
  }

}
