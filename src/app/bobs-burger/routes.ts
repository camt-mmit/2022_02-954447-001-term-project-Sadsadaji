import { Route } from '@angular/router';
import { CharactersListPageComponent } from './router/characters/characters-list-page/characters-list-page.component';
import { CharactersViewPageComponent } from './router/characters/characters-view-page/characters-view-page.component';
import { BurgerListPageComponent } from './router/burger/burger-list-page/burger-list-page.component';
import { BurgerViewPageComponent } from './router/burger/burger-view-page/burger-view-page.component';
import { EpisodesListPageComponent } from './router/episodes/episodes-list-page/episodes-list-page.component';
import { EpisodesViewPageComponent } from './router/episodes/episodes-view-page/episodes-view-page.component';

import { BobsBurgerComponent } from './router/bobs-burger/bobs-burger.component';

export const routes: Route[] = [
  {
    path: '',
    component: BobsBurgerComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'characters', component: CharactersListPageComponent },
      { path: 'characters/:id', component: CharactersViewPageComponent },
      { path: 'episodes', component: EpisodesListPageComponent },
      { path: 'episodes/:id', component: EpisodesViewPageComponent },
      { path: 'burger', component: BurgerListPageComponent },
      { path: 'burger/:id', component: BurgerViewPageComponent },
    ],
  },
];
