import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CharacterDetails, Animeography } from '../../../interfaces/characters-response';
import { AnimeService } from '../../../services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  @Input() visible: boolean = false;
  @Input() characterId!: number;
  @Output() onDismissDetails: EventEmitter<boolean> = new EventEmitter();

  public character!: CharacterDetails;
  public haveData: boolean = false;

  constructor(
    private animeService: AnimeService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    document.documentElement.style.overflow = "auto";
  }

  ngOnInit(): void {
    this.getCharacterDetailsResponse();
    document.documentElement.style.overflow = "hidden";
  }

  dismissCharacterDetails(): void {
    console.log('Emit')
    this.onDismissDetails.emit(false);
  }

  getCharacterDetailsResponse(): void {
    this.animeService.getCharacterById(this.characterId).subscribe(character => {
      this.character = character;
      this.haveData = this.visible;
    }, err => {
      console.warn(err)
    })
  }

  showAnime(anime: Animeography) {
    this.dismissCharacterDetails();
    this.router.navigate(['anime', anime.mal_id])
    window.scrollTo(500, 0);
  }

}
