import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './pages/anime/anime.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { AiringUpcomingListComponent } from './components/airing-upcoming-list/airing-upcoming-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
    children: [
      {
        path: 'airing',
        component: AiringUpcomingListComponent,
        data: { navigationType: 'airing' }
      },
      {
        path: 'upcoming',
        component: AiringUpcomingListComponent,
        data: { navigationType: 'upcoming' }
      },
      {
        path: 'top',
        component: TopListComponent,
        data: { navigationType: 'top' }
      },
      {
        path: '**',
        redirectTo: 'airing'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
