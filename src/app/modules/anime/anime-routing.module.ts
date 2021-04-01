import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './pages/anime/anime.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { AiringUpcomingListComponent } from './components/airing-upcoming-list/airing-upcoming-list.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
    children: [
      {
        path: 'airing',
        component: AiringUpcomingListComponent,
        data: { navigationType: 'airing', animeDetails: false }
      },
      {
        path: 'upcoming',
        component: AiringUpcomingListComponent,
        data: { navigationType: 'upcoming', animeDetails: false }
      },
      {
        path: 'top',
        component: TopListComponent,
        data: { navigationType: 'top', animeDetails: false },
      },
      {
        path: ':id',
        component: AnimeDetailsComponent,
        data: { animeDetails: true }
      },
      {
        path: '**',
        redirectTo: 'airing'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
