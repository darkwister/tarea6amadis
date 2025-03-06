import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about-me',
    pathMatch: 'full',
  },
  {
    path: 'gender-predict',
    loadComponent: () => import('./pages/gender-predict/gender-predict.page').then( m => m.GenderPredictPage)
  },
  {
    path: 'age-determine',
    loadComponent: () => import('./pages/age-determine/age-determine.page').then( m => m.AgeDeterminePage)
  },
  {
    path: 'world-universities',
    loadComponent: () => import('./pages/world-universities/world-universities.page').then( m => m.WorldUniversitiesPage)
  },
  {
    path: 'weather-repo-rd',
    loadComponent: () => import('./pages/weather-repo-rd/weather-repo-rd.page').then( m => m.WeatherRepoRdPage)
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./pages/pokedex/pokedex.page').then( m => m.PokedexPage)
  },
  {
    path: 'wordpress-lastest',
    loadComponent: () => import('./pages/wordpress-lastest/wordpress-lastest.page').then( m => m.WordpressLastestPage)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me.page').then( m => m.AboutMePage)
  },
];
