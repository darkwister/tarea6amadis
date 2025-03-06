import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonLabel, IonRow, IonItem, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonImg, IonAvatar, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGithub, logoLinkedin } from 'ionicons/icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
  standalone: true,
  imports: [IonList, IonAvatar, IonImg, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonRow, IonLabel, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AboutMePage implements OnInit {

  constructor() { 
    addIcons({logoGithub,logoLinkedin});
  }

  ngOnInit() {
  }

}
