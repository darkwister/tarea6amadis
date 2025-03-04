import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather-repo-rd',
  templateUrl: './weather-repo-rd.page.html',
  styleUrls: ['./weather-repo-rd.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherRepoRdPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
