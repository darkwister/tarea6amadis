
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/main-menu', icon: '' },
    { title: 'Predecir sexo', url: '/gender-predict', icon: '' },
    { title: 'Determinar edad', url: '/age-determine', icon: '' },
    { title: 'Universidades del mundo', url: '/world-universities', icon: '' },
    { title: 'Reporte del clima local', url: '/weather-repo-rd', icon: '' },
    { title: 'Pokedex', url: '/pokedex', icon: 'warning' },
    { title: 'Ultimas noticias en pag de wordpress', url:'/wordpress-lastest/', icon: ''},
    { title: 'Acerca de', url:'/about-me', icon: ''}
  ];
  constructor() {
  }
}
