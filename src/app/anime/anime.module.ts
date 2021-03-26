import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './pages/anime/anime.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { AiringUpcomingListComponent } from './components/airing-upcoming-list/airing-upcoming-list.component';
import { AiringUpcomingListItemComponent } from './components/airing-upcoming-list-item/airing-upcoming-list-item.component';
import { TopListItemComponent } from './components/top-list-item/top-list-item.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';


@NgModule({
  declarations: [
    AnimeComponent,
    TopListComponent,
    AiringUpcomingListComponent,
    AiringUpcomingListItemComponent,
    TopListItemComponent,
    AnimeDetailsComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
