import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './pages/anime/anime.component';
import { AiringListComponent } from './components/airing-list/airing-list.component';
import { UpcomingListComponent } from './components/upcoming-list/upcoming-list.component';
import { TopListComponent } from './components/top-list/top-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
    children: [
      {
        path: '',
        component: AiringListComponent,
      },
      {
        path: 'upcoming',
        component: UpcomingListComponent,
      },
      {
        path: 'top',
        component: TopListComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
