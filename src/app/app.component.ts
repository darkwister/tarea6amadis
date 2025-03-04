
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { briefcase, homeSharp, homeOutline, maleFemaleSharp, maleFemaleOutline, calendarSharp, calendarOutline, schoolSharp, schoolOutline, cloudyNightOutline, cloudyNightSharp, logoWordpress, informationCircleSharp, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonGrid, IonCol, IonRow],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/main-menu', icon: 'home' },
    { title: 'Predecir sexo', url: '/gender-predict', icon: 'male-female' },
    { title: 'Determinar edad', url: '/age-determine', icon: 'calendar' },
    { title: 'Universidades del mundo', url: '/world-universities', icon: 'school' },
    { title: 'Reporte del clima local', url: '/weather-repo-rd', icon: 'cloudy-night' },
    { title: 'Pokedex', url: '/pokedex', icon: 'assets/icon/pokemon.png' },
    { title: 'Ultimas noticias en pag de wordpress', url:'/wordpress-lastest/', icon: 'logoWordpress'},
    { title: 'Acerca de', url:'/about-me', icon: 'information-circle'}
  ];
  constructor() {
    addIcons({briefcase, homeSharp, homeOutline, maleFemaleOutline, maleFemaleSharp, calendarSharp, calendarOutline, schoolSharp, schoolOutline, cloudyNightOutline, cloudyNightSharp, logoWordpress, informationCircleSharp, informationCircleOutline})
  }
}
