import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ResultAnimeComponent } from './components/result-anime/result-anime.component';
import { ResultMangaComponent } from './components/result-manga/result-manga.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
    ResultAnimeComponent,
    ResultMangaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
