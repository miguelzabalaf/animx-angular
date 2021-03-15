import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './pages/anime/anime.component';
import { AiringListComponent } from './components/airing-list/airing-list.component';
import { UpcomingListComponent } from './components/upcoming-list/upcoming-list.component';
import { TopListComponent } from './components/top-list/top-list.component';


@NgModule({
  declarations: [AnimeComponent, AiringListComponent, UpcomingListComponent, TopListComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
