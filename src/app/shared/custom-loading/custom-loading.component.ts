import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss']
})
export class CustomLoadingComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    document.documentElement.style.overflow = "auto";
  }

  ngOnInit(): void {
    document.documentElement.style.overflow = "hidden";
  }
}
