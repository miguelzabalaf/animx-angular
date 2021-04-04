import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../../../interfaces/anime';
import { AnimeService } from '../../../../services/anime.service';
import { ResultAnime, ResultManga } from '../../../../interfaces/search-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterContentChecked {

  public typeValues = Type;
  public genres!: any[];
  public animeStatus!: any[];
  public mangaStatus!: any[];
  public resultAnime: ResultAnime[] = [];
  public resultManga: ResultManga[] = [];
  public loadingSearch: boolean = false;

  searchForm: FormGroup = this.fb.group({
    q: ['', Validators.minLength(3)],
    genre: [''],
    status: ['']
  })

  typeControl: FormControl = new FormControl('')

  constructor(
    private animeService: AnimeService,
    private fb: FormBuilder
  ) {
    this.typeControl.setValue('anime')
  }
  ngAfterContentChecked(): void {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.genres = this.animeService.genres;
    if (this.typeControl.value === 'anime') {
      this.animeStatus = this.animeService.animeAiringStatus;
    } else {
      this.animeStatus = this.animeService.mangaAiringStatus;
    }
  }

  getTypeValues(): any {
    const values = Object.values(this.typeValues);
    return values;
  }

  getAiringValues(): any {
    return this.animeStatus
  }

  changeSelect(ev: any) {
    console.log(ev)
  }

  search(): void {
    this.loadingSearch = true;
    this.animeService.searchAnimeAndManga(this.typeControl.value, this.searchForm.value).subscribe(data => {
      switch (this.typeControl.value) {
        case 'anime':
          this.resultManga = [];
          this.resultAnime = data;
          this.loadingSearch = false;
          break;
        case 'manga':
          this.resultAnime = [];
          this.resultManga = data;
          this.loadingSearch = false;
          break;
        default:
          break;
      }
      console.log('Animes:', this.resultAnime);
      console.log('Mangas:', this.resultManga);
    })
  }

  validSearch(): any {
    this.searchForm.markAsTouched()
    const q = this.searchForm.controls.q.value
    const genre = this.searchForm.controls.genre.value
    const status = this.searchForm.controls.status.value
    if (genre || status) {
      return false;
    } else if (q.length >= 3) {
      return false;
    }
    return true;
  }

}
