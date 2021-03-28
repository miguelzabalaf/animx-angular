import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterDetails } from '../../../interfaces/characters-response';
import { AnimeService } from '../../../services/anime.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() characterId!: number;
  @Output() onDismissDetails: EventEmitter<boolean> = new EventEmitter();

  public character!: CharacterDetails;

  constructor(
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    this.getCharacterDetailsResponse();
  }

  dismissCharacterDetails(): void {
    console.log('Emit')
    this.onDismissDetails.emit(false);
  }

  getCharacterDetailsResponse(): void {
    this.animeService.getCharacterById(this.characterId).subscribe(character => {
      this.character = character;
      console.log(this.character)
    })
  }

}
