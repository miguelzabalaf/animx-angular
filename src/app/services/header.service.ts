import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public stateMuted: EventEmitter<string> = new EventEmitter();
  public isMuted: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  removeMuted(): void {
    this.stateMuted.emit('');
    this.isMuted.emit(false);
  }

  silence(): void {
    this.stateMuted.emit('muted');
    this.isMuted.emit(true);
  }

}
