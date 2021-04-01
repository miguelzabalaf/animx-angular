import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public stateMuted: string = 'muted';
  public isMuted: boolean = true;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.subscribeToStateMuted();
    this.subscribeToIsMuted();
  }

  subscribeToStateMuted(): void {
    this.headerService.stateMuted.subscribe((event: string) => {
      this.stateMuted = event;
    })
  }

  subscribeToIsMuted(): void {
    this.headerService.isMuted.subscribe((event: boolean) => {
      this.isMuted = event;
    })
  }

  watchVideo(): void {
    this.headerService.removeMuted();
  }

  muteVideo(): void {
    this.headerService.silence();
  }

}
