import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-world-universities',
  templateUrl: './world-universities.page.html',
  styleUrls: ['./world-universities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WorldUniversitiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
